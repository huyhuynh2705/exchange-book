import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();

	const handleUpdateCartQty = (lineItem, newQuantity) => onUpdateCartQty(lineItem, newQuantity);

	const handleRemoveFromCart = (lineItem) => onRemoveFromCart(lineItem);

	return (
		<Card className={classes.card}>
			<CardMedia image={item?.selectedFile} alt={item?.title} className={classes.media} />
			<CardContent className={classes.cardContent}>
				<Typography variant='h4'>{item?.title}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				{/* <div className={classes.buttons}>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item, item.count - 1)}>-</Button>
          <Typography>&nbsp;{item.count}&nbsp;</Typography>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item, item.count + 1)}>+</Button>
        </div>    */}
				<Button variant='contained' type='button' color='secondary' onClick={() => handleRemoveFromCart(item)}>
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
