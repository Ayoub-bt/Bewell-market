import React, { useEffect } from "react";
import { Button, Row, Col, Table, Container } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listMyOrders } from "../actions/orderActions";
import CachedIcon from "@material-ui/icons/Cached";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(listMyOrders());
    }
  }, [dispatch, history, userInfo]);

  return (
    <Container className="lg-p-top3">
      <Row>
        <Col md={6} className="mb-4">
          <h3>Mes Commandes</h3>
        </Col>
        <Col md={6} className="mb-4">
          <Button
            className="btn bg-bewell float-right"
            onClick={() => dispatch(listMyOrders())}
          >
            <CachedIcon />
            &nbsp; Actualiser
          </Button>
        </Col>
        <Col md={12}>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : orders.length === 0 ? (
            <>
              <Message>Aucune commande n'a été trouvée</Message>
              <Link to="/products" className="btn btn-light mb-5">
                <ChevronLeftIcon />
                &nbsp; Voir les produits
              </Link>
            </>
          ) : (
            <Table
              striped
              bordered
              hover
              responsive
              className="table-sm"
              id="ordersTable"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>STATUT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="ordersTableBody">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className={`${order.isCancel ? "isCancel" : ""}`}
                  >
                    <td>
                      <a href={`/order/${order._id}`}>{order._id}</a>
                    </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice} dh</td>
                    <td>
                      {order.isTraitement &&
                      order.isPrepa &&
                      !order.isDelivered ? (
                        <p className="alert-info p-3">En cours de livraison</p>
                      ) : (order.isPrepa &&
                          order.isDelivered &&
                          !order.isPaid) ||
                        (order.isDelivered && order.isPaid) ? (
                        <p className="alert-success p-3">
                          Livrée le {order.deliveredAt.substring(0, 10)}
                        </p>
                      ) : order.isCancel ? (
                        <p className="alert-danger p-3">Commande annulée</p>
                      ) : (
                        <p className="alert-warning p-3">Commandée</p>
                      )}
                    </td>
                    <td>
                      <a href={`/order/${order._id}`}>
                        <Button className="btn" variant="light">
                          Détails
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
