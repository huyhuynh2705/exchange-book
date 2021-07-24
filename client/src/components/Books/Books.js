import React, { useState, useEffect }  from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/Book';

const Books = () => {
	const { books } = useSelector((state) => state.books);
	const classes = useStyles();
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (book) => {
		const cart = cartItems.slice();
		let alreadyInCart = false;
		cart.forEach((item) => {
			if (item._id === book._id){
				item.count++;
				alreadyInCart = true;
			}
		})
		if (!alreadyInCart){
			cart.push({...book, count: 1});
			setCartItems(cart);
		}
	}; 

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
