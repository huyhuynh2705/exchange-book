const cartReducer = (cart = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...cart, action.payload];
		default:
			return cart;
	}
};

export default cartReducer;
