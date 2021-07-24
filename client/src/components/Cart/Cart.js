import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import useStyles from './styles';

const Cart = () => {
    const items = [
        {
          id: 1,
          name: 'Ohrensessel Josslyn',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        },
        {
          id: 2,
          name: 'Sessel Sofie',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        },
        {
          id: 4,
          name: 'Schlafsessel Rovigo',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        },
        {
          id: 6,
          name: 'Sessel Little',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        },
        {
          id: 5,
          name: 'Sessel Peacock',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        },
        {
          id: 3,
          name: 'Sessel Anna',
          currency: 'EUR',
          image: './DoctorStrange_3.jpg',
        }
    ];
    const total = 100;
    const currency = "$";
    const classes = useStyles();
    const removeFromCart = (item) => {
        return " ";
    }
    return (
        <div>
            <h3>Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className={classes.cart__body}>
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className={classes.cart__total}>Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;