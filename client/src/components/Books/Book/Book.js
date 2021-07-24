import React from 'react';
import { Grow, Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeBook } from '../../../action/books';

import useStyles from './styles';

const Book = ({ book, onAddToCart }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = (e) => {
		e.preventDefault();
		history.push(`/books/${book?._id}`);
	};

	const handleLike = (e) => {
		e.preventDefault();
		dispatch(likeBook(book?._id));
	};
    
	return (
		<Grow in>
			<Card className={classes.card}>
				<CardActionArea onClick={handleClick}>
					<CardMedia className={classes.media} image={book?.selectedFile} title={book?.title} />
					<div className={classes.overlay}>
						<Typography variant='h6'>{book?.creator}</Typography>
						<Typography variant='body2'>{book?.condition}</Typography>
					</div>
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
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Button size='small' color='primary' onClick={handleLike}>
						&nbsp; Like &nbsp;
						{book?.likeCount}
					</Button>
					<Button size='small' color='primary' onClick={() => onAddToCart(book)}>
						Borrow
					</Button>
				</CardActions>
			</Card>
		</Grow>
	);
};

export default Book;
