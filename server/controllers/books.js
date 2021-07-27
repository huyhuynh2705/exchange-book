import BookMessage from '../models/bookMessage.js';
import mongoose from 'mongoose';

export const getBook = async (req, res) => {
	const { id } = req.params;
	try {
		const BookMessages = await BookMessage.findById(id);
		res.status(200).json(BookMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getBooks = async (req, res) => {
	try {
		const BookMessages = await BookMessage.find();

		res.status(200).json(BookMessages.reverse());
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createBook = async (req, res) => {
	const { title, creator, creatorId, price, selectedFile, review } = req.body;
	const newBook = new BookMessage({ title, creator, creatorId, price, selectedFile, review, createAt: new Date().toISOString() });
	try {
		await newBook.save();

		res.status(201).json(newBook);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateBook = async (req, res) => {
	const { id: _id } = req.params;
	const Book = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Book with that id');

	const updatedBook = await BookMessage.findByIdAndUpdate(_id, Book, { new: true });

	res.json(updatedBook);
};

export const deleteBook = async (req, res) => {
	const { id } = req.params;
	const oldBook = await BookMessage.findById(id);

	if (!oldBook) return res.status(404).send('No Book with that id');

	await BookMessage.findByIdAndRemove(id);

	res.json(oldBook);
};

export const likeBook = async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');

	const oldBook = await BookMessage.findById(id);

	const index = oldBook.likeCount.findIndex((id) => String(id) === userId);
	if (index === -1) {
		oldBook.likeCount.push(userId);
	} else {
		oldBook.likeCount = oldBook.likeCount.filter((id) => String(id) !== userId);
	}
	const likedBook = await BookMessage.findByIdAndUpdate(id, oldBook, { new: true });
	res.json(likedBook);
};

export const fetchBooksBySearch = async (req, res) => {
	const { searchQuery } = req.query;
	try {
		const title = new RegExp(searchQuery, 'i');
		const books = await BookMessage.find({ $or: [{ title }] });

		res.status(200).json(books.reverse());
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
