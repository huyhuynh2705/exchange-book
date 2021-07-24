
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    button:{
        padding: "1rem",
        border: "0.1rem #c0c0c0 solid",
        backgroundColor: "#f0f0f0",
    },
    button_primary:{
        backgroundColor:"#f0f0f0",
    },
    cart: {
        padding:"1rem",
        margin:"1rem",
        display:"flex"
    },
    cart_header:{
        borderBottom:"0.1rem #c0c0c0 solid"
    },
    cart_items:{
        padding:"0",
        width:"100%",
        listStyleType:"none",
    },
    cart_items_img:{
        width:"5rem"
    },
    cart_items_li:{
        display:"flex"
    },
    cart_items_li_div:{
        padding:".5rem"
    },
    cart_items_li_div_last_child:{
        flex:"1"
    },
    right:{
        textAlign:"right"
    },
    total:{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
}));

