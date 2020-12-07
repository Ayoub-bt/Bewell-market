import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cart-style.css";

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col md={8}>
          <h1 className="py-3">Panier</h1>
          {cartItems.length === 0 ? (
            <>
              <Message>Votre panier est vide.</Message>
              <Link to="/products" className="btn btn-light mb-5">
                <ChevronLeftIcon />
                &nbsp;Retour
              </Link>
            </>
          ) : (
            <>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2} id="cart-productImage">
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={4} id="cart-productName">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2} id="cart-productPrice">
                        {item.price} dh
                      </Col>
                      <Col md={2} id="cart-productQte">
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2} id="cart-productDelete">
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <DeleteIcon />
                        </Button>
                      </Col>
                      <Col md={2} id="cart-productDelete2">
                        <Button
                          type="button"
                          variant="light"
                          className="btn-block"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Supprimer
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/products" className="btn btn-light mb-5 mt-3">
                <ChevronLeftIcon />
                &nbsp;Ajouter plus de produits
              </Link>
            </>
          )}
        </Col>
        <Col md={4} className="sous-total">
          <Card>
            <ListGroup variat="flush">
              <ListGroup.Item>
                <h5>
                  Sous-Total (
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}) produits
                </h5>
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}{" "}
                dh
              </ListGroup.Item>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2) < 100 && (
                <ListGroup.Item className="p-0 minPanier">
                  <Message variant="danger">
                    Le minimum pour passer une commande est 100dh.
                  </Message>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block btn-bewell2 m-0"
                  disabled={
                    cartItems.length === 0 ||
                    cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2) < 100
                  }
                  onClick={checkoutHandler}
                >
                  Confirmer la commande
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
