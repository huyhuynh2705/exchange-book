import React, { useState, useEffect }  from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const Books = ({onAddToCart}) => {
	const { books } = useSelector((state) => state.books);
	const classes = useStyles();

	return !books.length ? (
		<Typography variant='h6' align='center'>
			0 book found
		</Typography>
	) : (
		<Grid className={classes.container} container alignitems='strech' spacing={3}>
			{books.map((book) => (
				<Grid key={book._id} item xs={12} sm={6} md={3}>
					<Book book={book} onAddToCart={onAddToCart}/>
				</Grid>
			))}
		</Grid>
	);
};

export default Books;
