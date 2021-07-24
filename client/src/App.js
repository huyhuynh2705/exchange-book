import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import AddBook from './components/AddBook/AddBook';
import BookDetail from './components/BookDetail/BookDetail';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import useStyles from './styles';
import Auth from './components/Auth/Auth';

const App = (props) => {
	const classes = useStyles();
	const user = JSON.parse(localStorage.getItem('profile'));
	const [cart, setCart] = useState([]);

	const addToCart = (book) => {
		let alreadyInCart = false;
		console.log(cart);
		cart.forEach((item) => {
			if (item._id === book._id){
				item.count++;
				alreadyInCart = true;
			}
		})
		if (!alreadyInCart){
			cart.push({...book, count: 1});
			setCart(cart);
		}
	}; 

	const updateCartQty = (book, quantity) => {
		let cart_copy = [...cart];
		let idx = cart.findIndex(item => item._id === book._id);
		cart_copy[idx].count = quantity;
		if (!cart_copy[idx].count) removeFromCart(book);
		setCart(cart_copy);
	}; 

	const removeFromCart = (book) => {
		const items = cart.filter(item => item._id !== book._id);
  		setCart(items);
		console.log("Removed:" + cart);
	}; 

	const emptyCart = () => {
		setCart([]);
		console.log(cart);
	}; 

	return (
		<BrowserRouter>
			<Container className={classes.content} maxWidth='lg'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Homepage onAddToCart={addToCart}/>
					</Route>
					<Route exact path='/search'>
						<Homepage onAddToCart={addToCart}/>
					</Route>
					<Route path='/books/:id' exact component={BookDetail} />
					<Route exact path='/cart'>
						<Cart cart={cart} onRemoveFromCart={removeFromCart} onUpdateCartQty={updateCartQty} onEmptyCart={emptyCart}/>
					</Route>
					<Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to='/' />)} />
					<Route path='/addbook' component={AddBook} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
