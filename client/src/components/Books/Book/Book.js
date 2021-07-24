import React from "react";
import { Grow, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import Books from "../Books";

const Book = ({ book, addToCart }) => {
    const classes = useStyles();
    //const dispatch = useDispatch();

    return (
        <Grow in>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={book.selectedFile} title={book.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{book.creator}</Typography>
                    <Typography variant="body2">{book.condition}</Typography>

                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
                {/* <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{book.price}</Typography>
                </div>  */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{book.title}</Typography>
                    <Typography variant="body2">{book.review}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => {} }>
                        &nbsp; Like &nbsp;
                        {book.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => addToCart(book)}>
                        Borrow
                    </Button>
                </CardActions>
            </Card>
        </Grow>

    );
}

export default Book;