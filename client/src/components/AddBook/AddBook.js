import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { Paper, TextField, Typography, Grid, Container, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createBook } from '../../action/books';
import { useHistory } from 'react-router-dom';

const initialState = { title: '', review: '', price: '', selectedFile: '', creatorId: '', creator: '' };

const AddBook = () => {
	const classes = useStyles();
	const history = useHistory();
	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = await dispatch(createBook({ ...form, creatorId: user?.result?._id, creator: user?.result?.fullName }));
		history.push(`/books/${id}`);
	};

	useEffect(() => {
		if (!user) {
			history.push('/auth');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className={classes.paper}>
			<Paper style={{ padding: '20px' }}>
				<form onSubmit={handleSubmit}>
					<Typography variant='h6' gutterBottom>
						Add Book
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12}>
							<TextField required name='title' label='Title' fullWidth onChange={(e) => setForm({ ...form, title: e.target.value })} />
						</Grid>

						<Grid item xs={12}>
							<TextField required name='review' label='Review' fullWidth onChange={(e) => setForm({ ...form, review: e.target.value })} />
						</Grid>
						<Grid item xs={12}>
							<TextField required name='price' label='Price' fullWidth onChange={(e) => setForm({ ...form, price: e.target.value })} />
						</Grid>
						<Grid item xs={12} sm={12}>
							<div className={classes.fileInput}>
								<Typography variant='h6' align='center'>
									Add a poster
								</Typography>
								<FileBase type='file' multiple={false} onDone={({ base64 }) => setForm({ ...form, selectedFile: base64 })} />
							</div>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default AddBook;
