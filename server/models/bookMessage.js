import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
	title: String,
	condition: {
		type: String,
		default: 'Available',
	},
	creator: String,
	price: {
		type: Number,
		default: 0,
	},
	selectedFile: String,
	review: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createAt: Date,
});

const BookMessage = mongoose.model('BookMessage', BookSchema);

export default BookMessage;
