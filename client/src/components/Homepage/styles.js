
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
      heading: {
        color: 'rgb(0,0,0)',
      },
      image: {
        marginLeft: '15px',
      },
      content: {
      marginTop: '80px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      }
}));

