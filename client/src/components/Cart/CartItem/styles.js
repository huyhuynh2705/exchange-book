import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
  },
  cartActions: {
    justifyContent: 'flex-end',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));