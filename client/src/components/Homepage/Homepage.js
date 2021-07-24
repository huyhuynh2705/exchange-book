import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getBooks } from '../../action/books';
import Books from '../../components/Books/Books';
import useStyles from './styles';

const Homepage = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBooks());
	}, [dispatch]);

	return (
		<Grow in>
			<Container>
				<Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
					<Grid item xs={12} sm={12}>
						<Books />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Homepage;
