import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//import dotenv from 'dotenv';

import BookRoutes from './routes/books.js';
import authRoute from './routes/auth.js';

const app = express();

//dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/books', BookRoutes);
app.use('/auth', authRoute);
app.use('/', (req, res) => {
	res.send('Hello to Exchange Book API');
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://hqhuy:hqhuy@cluster0.tszsf.mongodb.net/exchange-books?retryWrites=true&w=majority';

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
