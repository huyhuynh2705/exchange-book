import express from 'express';

import { getBooks, createBook, updateBook, deleteBook, likeBook, fetchBooksBySearch, getBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);
router.patch('/:id/likeBook', likeBook);
router.get('/search', fetchBooksBySearch);

export default router;
