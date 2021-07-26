import axios from 'axios';

const API = axios.create({ baseURL: 'https://ex-change-book.herokuapp.com/' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
	}
	return req;
});

export const signIn = (form) => API.post('/auth/signin', form);
export const signUp = (form) => API.post('/auth/signup', form);

export const fetchBooks = () => API.get('/books');
export const createBook = (newBook) => API.post('/books', newBook);
export const getBook = (id) => API.get(`/books/book/${id}`);
export const updateBook = (id, updatedBook) => API.patch(`/books/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/books/${id}`);
export const likeBook = (id, userId) => API.patch(`/books/${id}/likeBook`, userId);

export const fetchQuestionsBySearch = (search) => API.get(`/books/search?searchQuery=${search}`);
