import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import AddBook from './components/AddBook/AddBook';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import useStyles from './styles';
import Auth from './components/Auth/Auth';

const App = () => {
	const classes = useStyles();
	return (
		<BrowserRouter>
			<Container className={classes.content} maxWidth='lg'>
				<Header />
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/cart' exact component={Cart} />
					<Route path='/auth' exact component={Auth} />
					<Route path='/addbook' component={AddBook} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
