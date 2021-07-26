import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from '../constants/actionTypes';

const bookReducer = (state = { books: [] }, action) => {
	switch (action.type) {
		case 'FETCH_BY_SEARCH':
		case FETCH_ALL:
			return {
				...state,
				books: action.payload,
			};
		case CREATE:
			return { ...state, books: [...state.books, action.payload] };
		case UPDATE:
		case LIKE:
			return { ...state, books: state.books.map((book) => (book._id === action.payload._id ? action.payload : book)) };
		case 'ADD_TO_CART':
			return { ...state, books: state.books.filter((book) => book._id !== action.payload._id) };
		case DELETE:
			return { ...state, books: state.books.filter((book) => book._id !== action.payload) };
		case 'GET_BOOK':
		case 'LIKE_BOOK':
			return { ...state, book: action.payload };
		default:
			return state;
	}
};

export default bookReducer;
