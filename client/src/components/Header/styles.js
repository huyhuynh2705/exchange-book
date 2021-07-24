import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'rgba(255,255,255)',
      textDecoration: 'none',
    },
    signin:{
      color: '#3f51b5', 
    },
    profile: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px',
      align: 'right'
    },
    avatar: {
        marginRight: '5px',
        marginLeft: '25px',
    },
  }));