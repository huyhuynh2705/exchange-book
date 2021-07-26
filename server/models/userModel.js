import mongoose from 'mongoose';
import BookMessage from './bookMessage.js';

const userSchema = mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;
