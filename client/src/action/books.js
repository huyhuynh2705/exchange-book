import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

export const getBook = (id) => async (dispatch) => {
	try {
		const { data } = await api.getBook(id);
		dispatch({ type: 'GET_BOOK', payload: data });
	} catch (error) {}
};

export const getBooks = () => async (dispatch) => {
	try {
		const { data } = await api.fetchBooks();

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.response);
	}
};

export const createBook = (book) => async (dispatch) => {
	try {
		const { data } = await api.createBook(book);
		dispatch({ type: CREATE, payload: data });
		return data._id;
	} catch (error) {
		console.log(error.response);
	}
};

export const updateBook = (id, book) => async (dispatch) => {
	try {
		const { data } = await api.updateBook(id, book);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.response);
	}
};

export const deleteBook = (id) => async (dispatch) => {
	try {
		await api.deleteBook(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error.response);
	}
};

export const likeBook = (id, userId) => async (dispatch) => {
	try {
		const { data } = await api.likeBook(id, userId);

		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		console.log(error.response);
	}
};

export const likeBookDetail = (id, userId) => async (dispatch) => {
	try {
		const { data } = await api.likeBook(id, userId);

		dispatch({ type: 'LIKE_BOOK', payload: data });
	} catch (error) {
		console.log(error.response);
	}
};

export const fetchBooksBySearch = (search) => async (dispatch) => {
	try {
		const { data } = await api.fetchQuestionsBySearch(search);
		dispatch({ type: 'FETCH_BY_SEARCH', payload: data });
	} catch (error) {
		console.log(error);
	}
};
