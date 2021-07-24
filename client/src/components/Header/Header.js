import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
	const classes = useStyles();

	const user = 'null';

	const handleLogout = (e) => {
		console.log('logout');
	};

	return (
		<div className={classes.grow}>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography component={Link} to='/' className={classes.title} variant='h6' noWrap>
						Exchange Books
					</Typography>
					{user ? (
						<div className={classes.profile}>
							<Button component={Link} to='/cart' color='inherit'>
								Cart
							</Button>
							<Button component={Link} to='/addbook' color='inherit'>
								Add Book
							</Button>
							<Avatar className={classes.avatar}>H</Avatar>
							<Button color='inherit' onClick={handleLogout}>
								Logout
							</Button>
						</div>
					) : (
						<div className={classes.profile}>
							<Button component={Link} to='/auth' variant='contained' color='default'>
								<Typography className={classes.signin} variant='h7'>
									Signin
								</Typography>
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
