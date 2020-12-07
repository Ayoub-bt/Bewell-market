import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

// Material ui
import { Grid, Typography } from "@material-ui/core";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";

// Components
import calculateSpacing from "./calculateSpacing";
import Loader from "../Loader";
import Message from "../Message";

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
    color: "#ffffff !important",
    width: "90%",
  },
});

function ProductsSection(props, { history }) {
  const { classes, width } = props;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="lg-p-top4" id="ProductList">
              <Typography variant="h4" align="center" className="sectionTitle">
                Nos Produits
              </Typography>
              <div className="container">
                <Grid container spacing={calculateSpacing(width)}>
                  {products.map((product) => (
                    <Grid item xs={6} md={4} key={product._id}>
                      <Card className={classes.root}>
                        <Link to={`/product/${product._id}`}>
                          <CardMedia
                            id="productImage"
                            className={classes.media}
                            image={product.image}
                          />
                        </Link>
                        <CardContent>
                          <Link to={`/product/${product._id}`}>
                            <Typography variant="h5" color="textPrimary">
                              {product.name}
                            </Typography>
                          </Link>
                          <br />
                          <Typography
                            variant="h5"
                            className={classes.price}
                            component="p"
                          >
                            {product.price}.00 dh
                          </Typography>
                          {/* <Rating value={rating} /> */}
                        </CardContent>
                        <CardActions disableSpacing>
                          <Link
                            to={`/product/${product._id}`}
                            className="btn-block"
                          >
                            <Button
                              variant="contained"
                              className="btn-block btn-bewell3"
                            >
                              Ajouter au panier <ShoppingCart />
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

ProductsSection.propTypes = {
  width: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(ProductsSection);
