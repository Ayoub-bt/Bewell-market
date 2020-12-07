import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  preparerOrder,
  deliverOrder,
  paidOrder,
  cancelOrder,
  updateDeliveredBy,
} from "../actions/orderActions";
import {
  ORDER_TRAITEMENT_RESET,
  ORDER_PREPA_RESET,
  ORDER_DELIVER_RESET,
  ORDER_CANCEL_RESET,
  ORDER_PAID_RESET,
  ORDER_DELIVERED_BY_RESET,
} from "../constants/orderConstants";

import InfoIcon from "@material-ui/icons/Info";
import CachedIcon from "@material-ui/icons/Cached";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Tooltip from "@material-ui/core/Tooltip";
import Meta from "components/Meta";

const OrderScreen = ({ match, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const orderId = match.params.id;

  const [livreur, setLivreur] = useState("");

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderTraitement = useSelector((state) => state.orderTraitement);
  const { success: successTraitement } = orderTraitement;

  const orderPrepa = useSelector((state) => state.orderPrepa);
  const { loading: loadingPrepa, success: successPrepa } = orderPrepa;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderPaid = useSelector((state) => state.orderPaid);
  const { loading: loadingPaid, success: successPaid } = orderPaid;

  const orderCancel = useSelector((state) => state.orderCancel);
  const { loading: loadingCancel, success: successCancel } = orderCancel;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderUpdateDeliveredBy = useSelector(
    (state) => state.orderUpdateDeliveredBy
  );
  const {
    loading: loadingLivreur,
    error: errorLivreur,
    success: successLivreur,
  } = orderUpdateDeliveredBy;

  if (!loading) {
    //   Calculate prices
    /*const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    */

    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    if (
      !order ||
      successDeliver ||
      successPrepa ||
      successTraitement ||
      successCancel ||
      successPaid ||
      successLivreur
    ) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_PREPA_RESET });
      dispatch({ type: ORDER_PAID_RESET });
      dispatch({ type: ORDER_TRAITEMENT_RESET });
      dispatch({ type: ORDER_CANCEL_RESET });
      dispatch({ type: ORDER_DELIVERED_BY_RESET });
      dispatch(getOrderDetails(orderId));
    } else {
      setLivreur(order.deliveredBy);
    }
  }, [
    dispatch,
    history,
    userInfo,
    orderId,
    successDeliver,
    successPrepa,
    successTraitement,
    successPaid,
    successCancel,
    successLivreur,
    order,
  ]);

  const preparationHandler = () => {
    dispatch(preparerOrder(order));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const paidHandler = () => {
    dispatch(paidOrder(order));
  };
  const cancelHandler = () => {
    dispatch(cancelOrder(order));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDeliveredBy({
        _id: orderId,
        deliveredBy: livreur,
      })
    );
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Meta title={order._id} />
      {userInfo.isAdmin ? (
        <Link className="btn btn-light my-3" to="/admin/orderlist">
          <KeyboardArrowLeftIcon /> &nbsp;Commandes
        </Link>
      ) : (
        <Link className="btn btn-light my-3" to="/orders">
          <KeyboardArrowLeftIcon /> &nbsp;Commandes
        </Link>
      )}
      <Container className="mt-5">
        <Row>
          <Col md={6} className="mb-4">
            <h5>Commande № "{order._id}"</h5>
          </Col>
          <Col md={6} className="mb-4">
            <Button
              className="btn bg-bewell float-right"
              onClick={() => dispatch(getOrderDetails(orderId))}
            >
              <CachedIcon />
              &nbsp; Actualiser
            </Button>
            {/* {userInfo &&
              userInfo.isAdmin &&
              order.isTraitement &&
              order.isPrepa &&
              order.isDelivered &&
              !order.isPaid &&
              !order.isCancel && (
                <Link to={`/admin/orderToPrint/${order._id}`}>
                  <Button className="btn bg-bewell float-right mr-2">
                    PDF
                  </Button>
                </Link>
              )} */}
          </Col>
          <Col md={8} className="mt-4">
            <ListGroup variant="flush">
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

                {order.isTraitement && order.isPrepa && !order.isDelivered ? (
                  <Message variant="info">
                    En cours de livraison
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="En cours de livraison."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                ) : !userInfo.isAdmin &&
                  order.isPrepa &&
                  (order.isDelivered || order.isPaid) ? (
                  <Message variant="success">
                    {userInfo.isAdmin ? (
                      <span>
                        Livrée le {order.deliveredAt.substring(0, 10)} par{" "}
                        <strong style={{ fontWeight: "900" }}>
                          {order.deliveredBy}
                        </strong>
                      </span>
                    ) : (
                      <span>
                        Livrée le {order.deliveredAt.substring(0, 10)}
                      </span>
                    )}
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="La commande est remise au transporteur."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                ) : userInfo.isAdmin &&
                  order.isPrepa &&
                  order.isDelivered &&
                  !order.isPaid ? (
                  <Message variant="success">
                    {userInfo.isAdmin ? (
                      <span>
                        Livrée le {order.deliveredAt.substring(0, 10)} par{" "}
                        <strong style={{ fontWeight: "900" }}>
                          {order.deliveredBy}
                        </strong>
                      </span>
                    ) : (
                      <span>
                        Livrée le {order.deliveredAt.substring(0, 10)}
                      </span>
                    )}
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="La commande est remise au transporteur."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                ) : userInfo.isAdmin && order.isDelivered && order.isPaid ? (
                  <Message variant="success">
                    Commande Payée le {order.paidAt.substring(0, 10)}
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="Commande payée."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                ) : order.isCancel ? (
                  <Message variant="danger">
                    Commande Annulée
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="Cette commande ne sera pas préparée, vous pouvez faire une nouvelle tentative."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                ) : (
                  <Message variant="warning">
                    Commandée{" "}
                    <Tooltip
                      placement="top"
                      className="float-right"
                      title="La commande est validée et va être prise en charge par notre équipe de préparation."
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Message>
                )}
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

                {userInfo &&
                  userInfo.isAdmin &&
                  order.isTraitement &&
                  !order.isPrepa &&
                  !order.isDelivered &&
                  !order.isPaid &&
                  !order.isCancel && (
                    <ListGroup.Item>
                      {loadingPrepa && <Loader />}
                      <Button
                        type="button"
                        className="btn btn-block btn-info"
                        onClick={preparationHandler}
                      >
                        En cours de livraison
                      </Button>
                    </ListGroup.Item>
                  )}
                {userInfo &&
                  userInfo.isAdmin &&
                  order.isTraitement &&
                  order.isPrepa &&
                  !order.isDelivered &&
                  !order.isPaid &&
                  !order.isCancel && (
                    <>
                      <Form onSubmit={submitHandler}>
                        {loadingLivreur ? (
                          <Loader />
                        ) : errorLivreur ? (
                          <Message variant="danger">{errorLivreur}</Message>
                        ) : (
                          <ListGroup.Item>
                            {/* Livreur */}
                            <Form.Group controlId="livreur">
                              <Form.Label>Livrée par :</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Nom du livreur"
                                value={livreur === "livreur X" ? "" : livreur}
                                onChange={(e) => setLivreur(e.target.value)}
                              ></Form.Control>
                            </Form.Group>
                          </ListGroup.Item>
                        )}

                        <ListGroup.Item>
                          {loadingDeliver && <Loader />}
                          <Button
                            type="submit"
                            className="btn btn-block btn-success"
                            onClick={deliverHandler}
                          >
                            Marquer comme livrée
                          </Button>
                        </ListGroup.Item>
                      </Form>
                    </>
                  )}

                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPrepa &&
                  order.isTraitement &&
                  order.isDelivered &&
                  !order.isPaid &&
                  !order.isCancel && (
                    <ListGroup.Item>
                      {loadingPaid && <Loader />}
                      <Button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={paidHandler}
                      >
                        Marquer comme payée
                      </Button>
                    </ListGroup.Item>
                  )}

                {userInfo && userInfo.isAdmin && !order.isCancel && (
                  <ListGroup.Item>
                    {loadingCancel && <Loader />}
                    <Button
                      type="button"
                      className="btn btn-block btn-danger"
                      onClick={cancelHandler}
                    >
                      Annuler commande
                    </Button>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderScreen;
