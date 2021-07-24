import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

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
export const getBook = (id) => API.get(`/books/${id}`);
export const updateBook = (id, updatedBook) => API.patch(`/books/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/books/${id}`);
export const likeBook = (id) => API.patch(`/books/${id}/likeBook`);

export const fetchQuestionsBySearch = (searchQuery) => API.get(`/books/search?searchQuery=${searchQuery}`);
