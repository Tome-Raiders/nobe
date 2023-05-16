import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import BookDisplay from '../components/BookDisplay/BookDisplay';
import BigBook from '../components/Book/BookBig';
import UserContext from '../hooks/Context';
import QuoteDisplay from '../components/QuoteDisplay/QuoteDisplay';

function BookPage() {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const id = user?.id;
  const [book, setBooks] = useState<any | null>(null);
  const [title, setTitle] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`/bookdata/title/searchOne?title=${title}`).then((response) => { setBooks(response.data); });
    // .then(() => console.log(books))
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1> Search For A Book </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
        <Button type="submit">Submit</Button>
      </form>
      {book && <BigBook book={book} id={id} />}
      {/* {books.length > 0 && <BigBook book={books[0]} id={id} />} */}
      {/* <QuoteDisplay /> */}

    </div>
  );
}

export default BookPage;
