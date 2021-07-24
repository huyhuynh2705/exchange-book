import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import AddBook from './components/AddBook/AddBook';
import BookDetail from './components/BookDetail/BookDetail';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import useStyles from './styles';
import Auth from './components/Auth/Auth';

const App = () => {
	const classes = useStyles();
	const user = JSON.parse(localStorage.getItem('profile'));
	return (
		<BrowserRouter>
			<Container className={classes.content} maxWidth='lg'>
				<Header />
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/search' exact component={Homepage} />
					<Route path='/books/:id' exact component={BookDetail} />
					<Route path='/cart' exact component={Cart} />
					<Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to='/' />)} />
					<Route path='/addbook' component={AddBook} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
