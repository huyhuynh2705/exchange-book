import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import image from './DoctorStrange_3.jpg';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import Auth from '../../components/Auth/Auth'

const Cart = () => {
    const classes = useStyles();
    const onUpdateCartQty = () => {};
    const onRemoveFromCart = () => {};
    const onEmptyCart = () => {};
    const user = JSON.parse(localStorage.getItem('profile'));

    const cartItems = [
        {
            _id: "1",
            title: "Dark Nhan tam",
            count: 2,
            selectedFile: image
        }, 
        {
            _id: "2",
            title: "Dark Nhan tam",
            count: 3,
            selectedFile: image
        }, 
    ];
    const cart = {
        line_items: [
            {
                _id: "1",
                title: "Dark Nhan tam",
                count: 2,
                selectedFile: image
            }, 
            {
                _id: "2",
                title: "Dark Nhan tam",
                count: 3,
                selectedFile: image
            }, 
        ],
        subtotal: {
            formatted_with_symbol: "30$"
        }
    };

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
    );

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <div>
            <Grid container spacing={2}>
                {cart.line_items.map((lineItem) => (
                <Grid item xs={12} sm={4} key={lineItem._id}>
                    <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Total: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </div>
    );

    return user?.result ? (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Cart</Typography>
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
    ) : <Auth/>;
};

export default Cart;