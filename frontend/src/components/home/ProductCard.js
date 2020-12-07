import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
//import Rating from "../Rating";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "2px",
  },
  media: {
    height: "300px",
    backgroundSize: "contain",
    paddingTop: "2rem", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  price: {
    color: "#62AD42",
    fontSize: "1.5rem",
  },
  addToCart: {
    backgroundColor: "#62AD42",
    color: "#ffffff",
    width: "90%",
  },
});

const ProductCard = (props, { product }) => {
  const { classes, image, title, description, price } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <Link to={`/product/${product._id}`}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
      </Link>
      <CardContent>
        <Link to={`/product/${product._id}`}>
          <Typography variant="h5" color="textPrimary">
            {title}
          </Typography>
        </Link>
        <br />
        <Typography variant="h5" className={classes.price} component="p">
          {price}.00 dh
        </Typography>
        {/* <Rating value={rating} /> */}
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" className={classes.addToCart}>
          Ajouter au panier &nbsp;
          <ShoppingCart />
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProductCard);
