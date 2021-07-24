
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    cart__body: {
        marginBottom: "0.7em"
    },
  
    cartItem: {
        marginBottom: "0.3em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
  
    cartItem__name: {
        marginLeft: "0.5em",
        verticalAlign: "middle",
    },
  
    cartItem__price: {
        fontWeight: "bold",
    },
  
    cart__total: {
        fontWeight: "bold",
        fontSize: "1.5em",
        lineHeight: "1.1em",
        textAlign: "right"
    }
}));
