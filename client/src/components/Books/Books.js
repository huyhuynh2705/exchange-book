import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const Books = ({ onAddToCart }) => {
	const classes = useStyles();
	const { books } = useSelector((state) => state.books);
	const cart = useSelector((state) => state.cart);
	const cartId = cart.map((book) => book?._id);
	let newBook = [];
	newBook = books.filter((book) => !cartId.includes(book?._id));
	useEffect(() => {
		newBook = books.filter((book) => !cartId.includes(book?._id));
	}, [books, cart]);

	return !books.length ? (
		<Typography variant='h6' align='center'>
			0 book found
		</Typography>
	) : (
		<Grid className={classes.container} container alignitems='strech' spacing={3}>
			{newBook?.map((book) => (
				<Grid key={book._id} item xs={12} sm={6} md={3}>
					<Book book={book} onAddToCart={onAddToCart} />
				</Grid>
			))}
		</Grid>
	);
};

export default Books;
