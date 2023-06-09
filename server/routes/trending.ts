import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

const { PrismaClient } = require('@prisma/client');

dotenv.config();

const prisma = new PrismaClient();
const Trending = express.Router();

Trending.get('/', async (req: Request, res: Response) => {
  const category = req.query.category as string;

  const categoryWithoutQuotes = category.replace(/"/g, '');

  try {
    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${categoryWithoutQuotes}.json?api-key=${process.env.NYT_API}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

Trending.post('/inventory', async (req, res) => {
  try {
    const googleTitle = req.body.title;
    const { id } = req.body;
    const { color } = req.body;
    const { type, isbn10 } = req.body;

    let wishlist = false;
    let owned = false;

    if (color === 'danger' && type === 'wishlist') wishlist = true;
    if (color === 'danger' && type === 'owned') owned = true;

    console.log(req.body);
    console.log('isbn10', isbn10);

    const response = await axios.get(`http://localhost:8080/google-books/ISBN10?ISBN10=${isbn10}`);
    const {
      title, ISBN10, author, image, description,
    } = response.data;

    console.log('title', title);

    const newBook = await axios.post('http://localhost:8080/bookdata/title', {
      title,
      ISBN10,
      author,
      image,
      description,
    });

    const bookID = newBook.data.id;
    const userBook = await prisma.userBooks.upsert({
      where: {
        userId_bookId: { userId: id, booksId: bookID },
      },
      update: type === 'wishlist' ? { wishlist } : { owned },
      create: {
        wishlist: type === 'wishlist',
        owned: type !== 'wishlist',
        rating: null,
        review: null,
        userId: id,
        booksId: bookID,
      },
    });
    await prisma.activity.create({
      data: {
        userId: id,
        type: (wishlist ? 'Wishlist' : 'Owned'),
        bookId: bookID,
      },
    });
    res.send(ISBN10).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default Trending;
