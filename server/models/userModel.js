import mongoose from 'mongoose';
import BookMessage from './bookMessage';

const userSchema = mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
	borrowedBooks: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BookMessage'
    }],
	borrowingBooks: [{
		type: mongoose.Schema.Types.ObjectId, 
        ref: 'BookMessage'
	}]
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;
