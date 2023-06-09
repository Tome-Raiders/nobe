import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/joy/Button';
import UserContext from '../../hooks/Context';

type CustomColor = 'success' | 'danger';

function JoinClubButton(props: any) {
  const { clubId, member } = props;
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const id = user?.id;
  const setUser = userContext?.setUser;

  const [color, setColor] = useState<CustomColor>(member ? 'success' : 'danger');

  const addToClub = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    axios.post('/api/clubs/join', {
      id,
      clubId,
    }).then(() => {
      axios.get(`/user/id?id=${id}`).then((newUser) => {
        if (setUser && newUser && newUser?.data && newUser?.data !== undefined) {
          setUser(newUser?.data);
        }
      });
    });
    if (color === 'success') {
      setColor('danger' as CustomColor);
    } else {
      setColor('success' as CustomColor);
    }
  };

  useEffect(() => {
    if (member) {
      setColor('success' as CustomColor);
    }
  }, []);

  return (
    <Button
      aria-label="Join Club"
      size="md"
      variant="solid"
      color={color}
      onClick={addToClub}
    >
      {color === 'success' ? 'Leave Club' : 'Join Club'}
    </Button>
  );
}

export default JoinClubButton;
