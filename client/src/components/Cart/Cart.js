import React , { useState} from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import image from './DoctorStrange_3.jpg';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import Auth from '../../components/Auth/Auth'

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link className={classes.link} to="/"> start adding some</Link>!
        </Typography>
    );

    const renderCart = () => (
        <div>
            <Grid container spacing={2}>
                {cart.map((lineItem) => (
                <Grid item xs={12} sm={4} key={lineItem._id}>
                    <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Total: {cart.reduce((a, b) => a + b.count, 0)}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </div>
    );

    return user?.result ? (
        <Container>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Cart</Typography>
            { !cart.length ? renderEmptyCart() : renderCart() }
        </Container>
    ) : <Auth/>;
};

export default Cart;