import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardMedia, CardContent, FormControl, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import BookDisplay from '../components/MattsBookDisplay/BookDisplay';

interface Book {
  books: {
    id: string;
    title: string;
    author: string;
    image: string;
  }
  id: string;
  wishlist: boolean;
  owned: boolean;
}

const Profile = () => {
  const [userBooks, setUserBooks] = useState<Book[]>([]);
  const [inventory, setInventory] = useState<string>('Owned');
  const [title, setTitle] = useState<string>('');

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  let id: string = useParams().id || user?.id;

  const getUserBooks = async (type?: string) => {
    try {
      let url = `/books/${id}`;
      if (type) {
        url += `/${type}`;
      }
      const res = await axios.get(url);
      setUserBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const ownedClicked = () => {
    getUserBooks('Owned');
    setInventory('Owned');
  }

  const wishClicked = () => {
    getUserBooks('Wishlist')
    setInventory('Wishlist');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post(`/books/${id}`, { title, inventory })
      .then(response => {
        setTitle("");
        getUserBooks(inventory);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUserBooks('Owned');
  }, [])

  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <Typography variant="h4">{`${user.firstName}'s`} Books</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', background: 'rgb(32, 32, 35)', marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '800px', width: '100%' }}>
            <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={ownedClicked}>Owned</Button>
            <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={wishClicked}>WishList</Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Book Title"
                  value={title}
                  onChange={handleTitleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Add Book
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <div style={{ margin: '15px' }}>
          <Typography variant="h5">{inventory} Books</Typography>
        </div>
        {userBooks.length > 0 ?
          <BookDisplay userBooks={userBooks} id={id} getUserBooks={getUserBooks} setUserBooks={setUserBooks} inventory={inventory} /> :
          <Typography variant="body1">No books</Typography>
        }
      </div>
    </div>
  );
}

export default Profile;
