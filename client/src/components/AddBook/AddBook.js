import React from 'react';
import { Paper, TextField, Typography, Grid, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import useStyles from './styles';

const AddBook = () => {
	const classes = useStyles();
	return (
		<Container className={classes.paper}>
			<Typography variant='h6' gutterBottom>
				{' '}
				Add Book{' '}
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<TextField required id='title' name='title' label='Title' fullWidth autoComplete='given-name' />
				</Grid>

				{/* <Grid item xs={12}>
                <TextField
                required
                id="condition"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid> */}
				<Grid item xs={12} sm={6}>
					<TextField required id='zip' name='zip' label='Zip / Postal code' fullWidth autoComplete='shipping postal-code' />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField required id='country' name='country' label='Country' fullWidth autoComplete='shipping country' />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddBook;
