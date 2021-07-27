const cartReducer = (cart = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...cart, action.payload];
		case 'REMOVE':
			return cart.filter((book) => book._id !== action.payload._id);
		case 'EMPTY_CART':
			return [];
		default:
			return cart;
	}
};

export default cartReducer;
