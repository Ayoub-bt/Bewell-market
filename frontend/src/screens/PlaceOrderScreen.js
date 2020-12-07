import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 400 ? 0 : 10); // Shipping is free if total price is > 100$
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      localStorage.removeItem("cartItems");
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Container>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Coordonnées</h2>
                <p className="mt-4">
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Expédier à :{" "}
                  </strong>
                  {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                  {cart.shippingAddress.postalCode}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2 className="my-4">Produits commandés</h2>
                {cart.cartItems.length === 0 ? (
                  <Message>Votre panier est vide</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col className="align-self-center">
                            <Link
                              to={`/product/${item.product}`}
                              style={{ fontSize: "1rem" }}
                            >
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4} className="align-self-center">
                            {item.qty} x {item.price} dh ={" "}
                            {(item.qty * item.price).toFixed(2)} dh
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Sous-Total</Col>
                    <Col>{cart.itemsPrice} dh</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Livraison</Col>
                    <Col>{cart.shippingPrice} dh</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>{cart.totalPrice} dh</Col>
                  </Row>
                </ListGroup.Item>

                {error && (
                  <ListGroup.Item>
                    <Message variant="danger">{error}</Message>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block bg-bewell"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Confirmer la commande
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;
