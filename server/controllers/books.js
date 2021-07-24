import BookMessage from '../models/bookMessage.js';
import mongoose from 'mongoose';

export const getBooks = async (req, res) => {
    try {
        const BookMessages = await BookMessage.find();

        res.status(200).json(BookMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createBook = async (req, res) => {
    const Book = req.body;

    const newBook = new BookMessage(Book);

    try {
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateBook = async (req, res) => {
    const { id: _id } = req.params;
    const Book = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Book with that id');

    const updatedBook = await BookMessage.findByIdAndUpdate(_id, Book, { new: true });

    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');

    await BookMessage.findByIdAndRemove(id);

    res.json({message: 'Book deleted sucessfully'});
}

export const likeBook = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');

    const Book = await BookMessage.findById(id);
    const likedBook = await BookMessage.findByIdAndUpdate(id, { likeCount: Book.likeCount + 1}, { new: true });

    res.json(likedBook);
}