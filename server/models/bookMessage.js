import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
	title: String,
	condition: {
		type: String,
		default: 'Available',
	},
	creator: String,
	creatorId: mongoose.Schema.Types.ObjectId,
	price: {
		type: Number,
		default: 0,
	},
	selectedFile: String,
	review: String,
	likeCount: { type: [mongoose.Schema.Types.ObjectId], default: [] },
	createAt: Date,
});

const BookMessage = mongoose.model('BookMessage', BookSchema);

export default BookMessage;
