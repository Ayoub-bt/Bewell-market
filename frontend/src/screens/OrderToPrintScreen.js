import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Container,
  Image,
  Button,
} from "react-bootstrap";
import Pdf from "react-to-pdf";

import Message from "components/Message";
import { Link } from "react-router-dom";
import Loader from "components/Loader";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import GetAppIcon from "@material-ui/icons/GetApp";

const ref = React.createRef();

const OrderToPrintScreen = ({ match, history }) => {
  //const orderId = match.params.id;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    //   Calculate prices

    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [dispatch, userInfo, history, order]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Button
        onClick={() => {
          history.goBack();
        }}
        to="/products"
        className="btn btn-light mb-5 mt-3"
      >
        <ChevronLeftIcon />
        &nbsp;Retour
      </Button>

      <Container className="" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Row ref={ref}>
          <Col
            md={12}
            className="mb-4"
            style={{ borderBottom: "1px solid #eeeeee" }}
          >
            <Image
              src={require("../components/images/LOGO BEWELL.png")}
              width="400px"
              fluid
            />
          </Col>
          <Col md={8} className="">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6>Commande № "{order._id}"</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Nom complet :{" "}
                  </strong>
                  {order.user.name}
                </p>
                <p>
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Email :{" "}
                  </strong>
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Tel :{" "}
                  </strong>
                  <a href={`tel:${order.user.phone}`}>{order.user.phone}</a>
                </p>
                <p>
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Adresse :{" "}
                  </strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                  {order.shippingAddress.postalCode}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h3 className="my-3">Articles</h3>
                {order.orderItems.length === 0 ? (
                  <Message>Commande vide</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row className="align-items-center">
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
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
                    <Col>{order.itemsPrice} dh</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Livraison</Col>
                    <Col>{order.shippingPrice} dh</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>{order.totalPrice} dh</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Pdf targetRef={ref} filename={`${order._id}.pdf`}>
          {({ toPdf }) => (
            <Button className="btn bg-bewell float-right mr-2" onClick={toPdf}>
              Télécharger&nbsp; <GetAppIcon />
            </Button>
          )}
        </Pdf>
      </Container>
    </>
  );
};

export default OrderToPrintScreen;
