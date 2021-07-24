import React from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const Books = () => {
	const { books } = useSelector((state) => state.books);
	const classes = useStyles();
	console.log(books);

	const addToCart = (book) => {
		const cartItems = books.slice();
		let alreadyInCart = false;
		cartItems.forEach((item) => {
			if (item._id === book._id){
				item.count++;
				alreadyInCart = true;
			}
		})
		if (!alreadyInCart){
			cartItems.push({...book, count: 1})
		}
		console.log("CartItem")
	} 

	return !books.length ? (
		<Typography variant='h6' align='center'>
			0 book found
		</Typography>
	) : (
		<Grid className={classes.container} container alignitems='strech' spacing={3}>
			{books.map((book) => (
				<Grid key={book._id} item xs={12} sm={6} md={3}>
					<Book book={book} addToCart={addToCart}/>
				</Grid>
			))}
		</Grid>
	);
};

export default Books;
