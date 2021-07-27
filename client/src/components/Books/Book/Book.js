import React from 'react';
import { Grow, Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeBook, deleteBook } from '../../../action/books';

import useStyles from './styles';

const Book = ({ book, onAddToCart }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));
	const history = useHistory();

	const handleAddToCart = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_TO_CART', payload: book });
		onAddToCart(book);
	};

	const handleClick = (e) => {
		e.preventDefault();
		history.push(`/books/${book?._id}`);
	};

	const handleLike = (e) => {
		e.preventDefault();
		dispatch(likeBook(book?._id, { userId: user?.result?._id }));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteBook(book?._id));
	};

	return (
		<Grow in>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia className={classes.media} image={book?.selectedFile} title={book?.title} onClick={handleClick} />
					<div className={classes.overlay}>
						<Typography variant='h6'>{book?.creator}</Typography>
						<Typography variant='body2'>{book?.condition}</Typography>
					</div>
					{user?.result?._id === book?.creatorId && (
						<div className={classes.overlay2}>
							<Button size='small' variant='contained' color='secondary' onClick={handleDelete}>
								Delete
							</Button>
						</div>
					)}
					<CardContent>
						<div onClick={handleClick}>
							<Typography variant='subtitle1'>Price: {book?.price === 0 ? 'Free' : `${book?.price}đ`}</Typography>
							<Typography gutterBottom variant='h6'>
								{book?.title}
							</Typography>
							<Typography variant='body2'>{book?.review.length > 200 ? book?.review.slice(0, 200) + '...' : book?.review}</Typography>
						</div>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Button size='small' color='primary' disabled={!user} onClick={handleLike}>
						&nbsp; Like &nbsp;
						{book?.likeCount?.length}
					</Button>
					<Button disabled={user?.result?._id === book?.creatorId} size='small' color='primary' onClick={handleAddToCart}>
						Borrow
					</Button>
				</CardActions>
			</Card>
		</Grow>
	);
};

export default Book;
