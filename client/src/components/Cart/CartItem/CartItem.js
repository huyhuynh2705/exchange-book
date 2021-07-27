import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleUpdateCartQty = (lineItem, newQuantity) => onUpdateCartQty(lineItem, newQuantity);

	const handleRemoveFromCart = (e, lineItem) => {
		e.preventDefault();
		onRemoveFromCart(lineItem);
		dispatch({ type: 'REMOVE', payload: lineItem });
	};

	return (
		<Card className={classes.card}>
			<CardMedia image={item?.selectedFile} alt={item?.title} className={classes.media} />
			<CardContent>
				<Typography variant='body1'>{item?.price}đ</Typography>
				<Typography variant='h6'>{item?.title}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				{/* <div className={classes.buttons}>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item, item.count - 1)}>-</Button>
          <Typography>&nbsp;{item.count}&nbsp;</Typography>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item, item.count + 1)}>+</Button>
        </div>    */}
				<Button variant='contained' type='button' color='secondary' onClick={(e) => handleRemoveFromCart(e, item)}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;

{
	/* <div className={classes.buttons}>
  <Button type="button" size="large" onClick={() => handleUpdateCartQty(item._id, item.count - 1)}>-</Button>
  <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
  <Button type="button" size="large" onClick={() => handleUpdateCartQty(item._id, item.count + 1)}>+</Button>
</div> */
}
