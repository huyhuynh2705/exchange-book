import React from 'react';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const Books = () => {
	const books = useSelector((state) => state.books);
	const classes = useStyles();

	return !books.length ? (
		<CircularProgress />
	) : (
		<Grid className={classes.container} container alignitems='strech' spacing={3}>
			{books.map((book) => (
				<Grid key={book._id} item xs={12} sm={6} md={3}>
					<Book book={book} />
				</Grid>
			))}
		</Grid>
	);
};

export default Books;
