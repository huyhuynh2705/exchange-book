import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grow, Button, Typography, Container, Grid, Paper } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { getBook, likeBookDetail } from '../../action/books';
import useStyles from './styles';

const BookDetail = () => {
	const classes = useStyles();
	const { id } = useParams();
	const user = JSON.parse(localStorage.getItem('profile'));
	const book = useSelector((store) => store.books.book);
	const dispatch = useDispatch();

	const handleLike = (e) => {
		e.preventDefault();
		dispatch(likeBookDetail(book?._id, { userId: user?.result?._id }));
	};

	useEffect(() => {
		dispatch(getBook(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Paper style={{ padding: '20px' }}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<img className={classes.image} src={book?.selectedFile} alt={book?.title} />
					</Grid>
					<Grid item xs={6}>
						<Typography variant='h6'>{book?.creator}</Typography>
						<Typography variant='subtitle1'>Price: {book?.price === 0 ? 'Free' : `${book?.price}đ`}</Typography>
						<Typography variant='body1'>{book?.condition}</Typography>
						<Typography gutterBottom variant='h5' component='h2'>
							{book?.title}
						</Typography>
						<Typography variant='body2' gutterBottom>
							Review: {book?.review}
						</Typography>
						<Button size='large' variant='outlined' disabled={!user} color='primary' onClick={handleLike}>
							&nbsp; Like &nbsp;
							{book?.likeCount?.length}
						</Button>
						&nbsp; &nbsp;
						<Button size='large' variant='outlined' color='primary' onClick={() => {}}>
							Borrow
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default BookDetail;
