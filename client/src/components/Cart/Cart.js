import React, {Component} from 'react';
import useStyles from "./styles";
import image from './DoctorStrange_3.jpg';

const Cart = () => {
    const classes = useStyles();
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
    return (
        <div>
            {cartItems.length === 0? <div className={classes.cart, classes.cart_header}>Cart is empty.</div>
            :
                <div className={classes.cart, classes.cart_header}>
                    You have {cartItems.length} in the cart {" "}
                </div>
            }
            
            <div className={classes.cart}>
                <ul className={classes.cart_items}>
                    {cartItems.map(item =>(
                        <li key={item._id}>
                            <div>
                                <img className={classes.media} src={item?.selectedFile} alt={item?.title} />
                            </div>
                            <div>
                                <div>{item?.title}</div>
                                <div className={classes.right}>
                                    {item.count}{" "}                                    
                                    <button
                                        className={classes.button}
                                        onClick={()=>this.props.removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length != 0 && (
                <div className={classes.cart}>
                    <div className={classes.total}>
                        <div>
                            Total: 
                            {
                                cartItems.reduce((a,v) =>  a = a + v.count , 0 )
                            }
                        </div>
                        <button className={classes.button_primary}>Proceed</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
