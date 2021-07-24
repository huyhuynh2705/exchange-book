import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	media: {
		height: 0,
		//paddingTop: '56.25%',
		paddingTop: '100%',
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '5px',
		height: '100%',
		position: 'relative',
	},
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},
	overlay2: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		color: 'white',
	},
	grid: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '5px',
		marginLeft: '15px',
		marginRight: '5px',
	},
	title: {
		fontSize: '15px',
	},
	cardActions: {
		padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
	},
});
