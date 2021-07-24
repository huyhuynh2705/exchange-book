import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from '../../components/Books/Books';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { getBooks, fetchBooksBySearch } from '../../action/books';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Homepage = ({ onAddToCart }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const query = useQuery();
	const searchQuery = query.get('searchQuery') || undefined;

	useEffect(() => {
		if (searchQuery) {
			dispatch(fetchBooksBySearch(searchQuery));
		} else {
			dispatch(getBooks());
		}
	});

	return (
		<Grow in>
			<Container>
				<Grid container>
					<Grid item xs={4} sm={3}>
						<Button component={Link} to='/addbook' variant='contained' color='primary' fullWidth>
							Add book
						</Button>
					</Grid>
					<Grid item xs={4} sm={6}></Grid>
					<Grid item xs={4} sm={3}>
						<Button component={Link} to='/cart' variant='contained' color='primary' fullWidth>
							Cart
						</Button>
					</Grid>
				</Grid>
				<div style={{ height: '20px' }} />
				<Grid container justify='space-between' alignItems='stretch' spacing={3}>
					<Grid item xs={12} sm={12}>
						<Books onAddToCart={onAddToCart}/>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Homepage;
