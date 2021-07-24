import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grow, Card, CardActions, CardContent, CardMedia, Button, Typography, Container } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { getBook, likeBook } from '../../action/books';
import useStyles from './styles';

const BookDetail = () => {
	const classes = useStyles();
	const { id } = useParams();
	const book = useSelector((store) => store.books.book);
	const dispatch = useDispatch();
	console.log(book);

	const handleLike = (e) => {
		e.preventDefault();
		dispatch(likeBook(book?._id));
	};

	useEffect(() => {
		dispatch(getBook(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Grow in>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image={book?.selectedFile} title={book?.title} />
					<Typography variant='h6'>{book?.creator}</Typography>
					<Typography variant='body2'>{book?.condition}</Typography>
					<div className={classes.overlay2}>
						<Button style={{ color: 'white' }} size='small' onClick={() => {}}>
							<MoreHorizIcon fontSize='default' />
						</Button>
					</div>
					{/* <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{book.price}</Typography>
                </div>  */}
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{book?.title}
						</Typography>
						<Typography variant='body2'>{book?.review}</Typography>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button size='small' color='primary' onClick={handleLike}>
							&nbsp; Like &nbsp;
							{book?.likeCount}
						</Button>
						<Button size='small' color='primary' onClick={() => {}}>
							Borrow
						</Button>
					</CardActions>
				</Card>
			</Grow>
		</Container>
	);
};

export default BookDetail;
