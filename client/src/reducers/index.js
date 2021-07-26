import { combineReducers } from 'redux';

import books from './books';
import auth from './auth';
import cart from './cart';

export default combineReducers({ books, auth, cart });
