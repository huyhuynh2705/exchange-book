import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, TextField, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { fetchBooksBySearch } from '../../action/books';

import useStyles from './styles';

const Header = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const [search, setSearch] = useState('');
	const location = useLocation();

	const signOut = () => {
		dispatch({ type: 'LOG_OUT' });
		setUser(null);
		window.location.reload();
	};

	const searchQuestion = (e) => {
		e.preventDefault();
		if (search.trim()) {
			dispatch(fetchBooksBySearch(search));
			history.push(`/search?searchQuery=${search}`);
		} else {
			history.push('/');
		}
	};

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			dispatch(fetchBooksBySearch(search));
			history.push(`/search?searchQuery=${search}`);
		}
	};

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<div>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link className={classes.link} to={'/'} underline='none' color='initial'>
							BOOK EXCHANGE
						</Link>
					</Typography>
					<div className={classes.search}>
						<TextField
							onKeyDown={handleKeyPress}
							className={classes.textField}
							margin='dense'
							size='small'
							variant='filled'
							label='Search books'
							fullWidth
							InputProps={{
								className: classes.input,
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<Button variant='contained' color='default' onClick={searchQuestion}>
							Search
						</Button>
					</div>
					{user?.result ? (
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user?.result.fullName} src={user?.result.imageUrl}>
								{user?.result.imageUrl ? user?.result.imageUrl : user?.result.fullName.charAt(0)}
							</Avatar>
							<Typography className={classes.userName} variant='h6'>
								{user?.result.fullName ? user?.result.fullName : user?.result.name}
							</Typography>
							<Button variant='contained' color='default' onClick={signOut}>
								Logout
							</Button>
						</div>
					) : (
						<Button className={classes.buttonSignIn} component={Link} to='/auth' variant='contained' color='default'>
							Sign In
						</Button>
					)}
				</Toolbar>
			</AppBar>
			{/* <Toolbar /> */}
		</div>
	);
};

export default Header;
