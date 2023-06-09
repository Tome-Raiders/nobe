import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import IconButton from '@mui/joy/IconButton';
import { Tooltip } from '@material-ui/core';
import UserContext from '../../hooks/Context';

type CustomColor = 'success' | 'danger';
function LendingLibraryButton(props: any) {
  const { book } = props;
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const id = user?.id;
  const [color, setColor] = useState<CustomColor>('danger');
  const [toolTip, setToolTip] = useState<NonNullable<React.ReactNode>>(
    <h1>Add to Lending Library</h1>,
  );

  interface UserBook {
    owned: boolean;
    Books: {
      title: string;
    };
  }

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const { title } = book;
    const { isbn10 } = book.isbns[0];
    const type = 'owned';

    event.stopPropagation();
    axios.post('/api/trending/inventory', {
      title,
      id,
      color,
      type,
      isbn10,
    }).then((data) => console.log(data.data));
    if (color === 'success') {
      setColor('danger' as CustomColor);
      setToolTip(<h1>Add to Lending Library</h1>);
    } else {
      setColor('success' as CustomColor);
      setToolTip(<h1>Remove from Lending Library</h1>);
    }
  };

  useEffect(() => {
    const isBookInArray = user?.UserBooks.some((
      entry: UserBook,
    ) => entry.Books.title.toUpperCase() === book.title && entry.owned === true);

    if (isBookInArray) {
      setColor('success' as CustomColor);
      setToolTip(<h1>Remove from Lending Library</h1>);
    }
  }, [book, id]);

  return (
    <Tooltip title={toolTip} placement="top-end">
      <IconButton
        aria-label="Lending Library"
        size="md"
        variant="solid"
        color={color}
        sx={{
          position: 'absolute',
          zIndex: 2,
          borderRadius: '50%',
          right: '4rem',
          bottom: 0,
          transform: 'translateY(50%)',
        }}
        onClick={onClick}
      >
        <LibraryBooksIcon />
      </IconButton>
    </Tooltip>
  );
}

export default LendingLibraryButton;
