import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const CartItem = ({ name, price, currency, onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.cartItem}>
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className={classes.cartItem__name}>{name}</span>
            </div>
            <div className={classes.cartItem__price}>{price} {currency}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;