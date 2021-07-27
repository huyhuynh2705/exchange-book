const cartReducer = (cart = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...cart, action.payload];
		case 'EMPTY_CART':
			return [];
		default:
			return cart;
	}
};

export default cartReducer;
