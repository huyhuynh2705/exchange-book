import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const handleEmptyCart = (e) => {
		e.preventDefault();
		dispatch({ type: 'EMPTY_CART' });
		onEmptyCart();
	};

	const handleGoBack = (e) => {
		e.preventDefault();
		history.goBack();
	};

	const renderEmptyCart = () => (
		<Typography variant='subtitle1'>
			You have no items in your shopping cart,
			<Link className={classes.link} to='/'>
				start adding some
			</Link>
			!
		</Typography>
	);

	const renderCart = () => (
		<div>
			<Button style={{ marginBottom: '20px' }} size='large' type='button' variant='contained' color='primary' onClick={handleGoBack}>
				Continue choosing
			</Button>
			<Grid container spacing={2}>
				{cart.map((lineItem) => (
					<Grid item xs={12} sm={4} key={lineItem._id}>
						<CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant='h6'>
					Total: {cart.reduce((a, b) => a + b.count, 0)} item. Price: {cart.reduce((a, b) => a + b.price, 0)}đ
				</Typography>
				<div>
					<Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>
						Empty cart
					</Button>
					<Button className={classes.checkoutButton} component={Link} to='/checkout' size='large' type='button' variant='contained' color='primary'>
						Checkout
					</Button>
				</div>
			</div>
		</div>
	);

	return (
		<Container>
			<Typography className={classes.title} variant='h4' gutterBottom>
				Your Cart
			</Typography>
			{!cart.length ? renderEmptyCart() : renderCart()}
		</Container>
	);
};

export default Cart;
