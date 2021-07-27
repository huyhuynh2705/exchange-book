import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { Paper, TextField, Typography, Grid, Container, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createBook } from '../../action/books';
import { useHistory } from 'react-router-dom';

const initialState = { title: '', review: '', price: '', selectedFile: '', creatorId: '', creator: '' };

async function reduce_image_file_size(base64Str, MAX_WIDTH = 450, MAX_HEIGHT = 450) {
	let resized_base64 = await new Promise((resolve) => {
		let img = new Image();
		img.src = base64Str;
		img.onload = () => {
			let canvas = document.createElement('canvas');
			let width = img.width;
			let height = img.height;

			if (width > height) {
				if (width > MAX_WIDTH) {
					height *= MAX_WIDTH / width;
					width = MAX_WIDTH;
				}
			} else {
				if (height > MAX_HEIGHT) {
					width *= MAX_HEIGHT / height;
					height = MAX_HEIGHT;
				}
			}
			canvas.width = width;
			canvas.height = height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0, width, height);
			resolve(canvas.toDataURL()); // this will return base64 image results after resize
		};
	});
	return resized_base64;
}

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

	const setImage = async (image) => {
		const newImage = await reduce_image_file_size(image);
		setForm({ ...form, selectedFile: newImage });
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
								<FileBase type='file' multiple={false} onDone={({ base64 }) => setImage(base64)} />
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
