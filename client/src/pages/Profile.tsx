/* eslint-disable no-console */
import { useParams, useNavigate } from 'react-router-dom';
import React, {
  useState, useEffect,
  // useRef,
  useContext,
} from 'react';
import axios from 'axios';
import {
  Typography, Grid, TextField, Button, Box,
} from '@material-ui/core';
import io from 'socket.io-client';
import Modal from '@mui/material/Modal';
import BookDisplay from '../components/BookDisplay/BookDisplay';
import UserContext from '../hooks/Context';
import NearBy from '../components/NearBy/NearBy';
import { Book, UserBook } from '../typings/types';

// The UserProfile interface defines the shape of an object
// returned from the server representing a user profile. It includes the user's ID, first name, //
// picture, and an array of books the user has read or wants to read.

interface UserProfile {
  id: string;
  firstName: string;
  picture: string;
  UserBooks: UserBook[];
}

const socketUrl = process.env.SOCKET_URL;

function Profile() {
  const [books, setBooks] = useState<Book[]>([]);
  const [inventory, setInventory] = useState<string>('Owned');
  const [title, setTitle] = useState<string>('');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const user = userContext?.user;

  const id = user?.id;
  const friendId: string = useParams().id || '';

  const getProfile = async () => {
    if (friendId !== '') {
      try {
        const response = await axios.get(`/user/id?id=${friendId}`);
        await setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleNearMeClick = async () => {
    try {
    // eslint-disable-next-line max-len
      const response = await axios.get('/location/locations', {
        params: {
          lon: user?.longitude, lat: user?.latitude, radius: user?.radius,
        },
      });
      const data = await response.data;
      navigate('/locations', { state: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getUserBooks = (query: string) => {
    const booksArray: Book[] = [];

    // eslint-disable-next-line eqeqeq
    if (query == 'Owned') {
      profile?.UserBooks?.forEach((book: UserBook) => {
        if (book.owned) booksArray.push(book.Books);
      });
      setBooks(booksArray);
    }
    // eslint-disable-next-line eqeqeq
    if (query == 'Wishlist') {
      profile?.UserBooks?.forEach((book: UserBook) => {
        if (book.wishlist) booksArray.push(book.Books);
      });
      setBooks(booksArray);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-console, no-sequences
    axios.get(`/bookdata/title/searchOne?title=${title}`).then((response) => { setBooks([response.data]); });
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // This function is called when a user follows another user.
  // It sends a notification to the user being followed
  // and saves the friendship to the database.

  const follow = async () => {
    const userId = user?.id;
    const userFirstName = user?.firstName;

    try {
      if (socketUrl) {
        const newSocket = io(socketUrl);
        newSocket.emit('new-follow', {
          message: `${userFirstName} has followed you`,
        });
      }
      await axios.post('/api/friendship', { userId, friendId });
    } catch (error) {
      console.error(error);
    }
  };

  const ownedClicked = () => {
    getUserBooks('Owned');
    setInventory('Owned');
  };

  const wishClicked = () => {
    getUserBooks('Wishlist');
    setInventory('Wishlist');
  };

  useEffect(() => {
    if (friendId !== '') {
      getProfile();
    } else if (user) {
      setProfile(user);
    }
  }, []);

  useEffect(() => {
    if (profile) {
      getUserBooks(inventory);
    }
  }, [profile, inventory]);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (

    <div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Grid container>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4">
              {friendId === '' ? `${user?.firstName}'s` : `${profile?.firstName}'s`}
              {' '}
              Books
            </Typography>
            {friendId === '' ? null : (
              <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={follow}>Follow</Button>)}
          </Grid>
        </Grid>

      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          display: 'flex', justifyContent: 'center', width: '100%',
        }}
        >
          <div style={{
            display: 'flex', justifyContent: 'center', maxWidth: '800px', width: '100%',
          }}
          >
            <Button variant="contained" style={{ margin: '10px' }} color="primary" type="submit">Book Search</Button>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Book Title"
                value={title}
                onChange={handleTitleChange}
                fullWidth
              />

            </form>
            <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={ownedClicked}>Owned</Button>
            <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={wishClicked}>WishList</Button>
            {user?.radius && user?.latitude && user?.latitude > 0 && user?.radius > 0 ? (<Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={handleNearMeClick}>Near Me</Button>)
              : (<Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={handleOpen}>Near Me</Button>)}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <NearBy />
              </Box>
            </Modal>
          </div>
        </div>

        {friendId === '' ? (

          <div style={{ display: 'flex', justifyContent: 'center' }} />

        ) : null}

        <div style={{ margin: '15px' }}>
          <Typography variant="h5">
            {inventory}
            {' '}
            Books
          </Typography>
        </div>
        <BookDisplay books={books} id={id} />
      </div>

    </div>
  );
}

export default Profile;
