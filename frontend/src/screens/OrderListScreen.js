import React, { useEffect } from "react";
//import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listOrders } from "../actions/orderActions";

import CachedIcon from "@material-ui/icons/Cached";
import Meta from "components/Meta";
import ReactToExcel from "react-html-table-to-excel";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <Meta title="Admin | Commandes" />
      <Container className="lg-p-top3">
        <Row>
          <Col md={6} className="mb-4">
            <h2>Commandes</h2>
          </Col>
          <Col md={6} className="mb-4">
            <Button
              className="btn bg-bewell float-right"
              onClick={() => dispatch(listOrders())}
            >
              <CachedIcon />
              &nbsp; Actualiser
            </Button>
            <ReactToExcel
              className="btn bg-bewell float-right mr-4"
              table="ordersTable"
              filename="orders"
              sheet="sheet 1"
              buttonText="EXCEL"
            />
          </Col>
          <Col md={12}>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
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
                    <th>CLIENT</th>
                    <th>NUMERO</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>STATUT</th>
                    <th>LIVRÉE PAR</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="ordersTableBody">
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className={`${
                        order.isCancel
                          ? "isCancel"
                          : order.isPaid
                          ? "isPaid"
                          : ""
                      }`}
                    >
                      <td>
                        <a href={`/order/${order._id}`}>{order._id}</a>
                      </td>
                      <td>{order.user && order.user.name}</td>
                      <td>
                        <a href={`tel:${order.user.phone}`}>
                          {order.user.phone}
                        </a>
                      </td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice} dh</td>
                      <td>
                        {order.isTraitement &&
                        order.isPrepa &&
                        !order.isDelivered ? (
                          <p className="alert-info p-3">
                            En cours de livraison
                          </p>
                        ) : order.isPrepa &&
                          order.isDelivered &&
                          !order.isPaid ? (
                          <p className="alert-success p-3">
                            Livrée le {order.deliveredAt.substring(0, 10)}
                          </p>
                        ) : order.isDelivered && order.isPaid ? (
                          <p className="alert-success p-3">
                            Payée le {order.paidAt.substring(0, 10)}
                          </p>
                        ) : order.isCancel ? (
                          <p className="alert-danger p-3">Commande annulée</p>
                        ) : (
                          <p className="alert-warning p-3">Commandée</p>
                        )}
                      </td>
                      <td>
                        {order.isDelivered || order.isPaid ? (
                          <span>{order.deliveredBy}</span>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td>
                        <a href={`/order/${order._id}`}>
                          <Button className="btn-sm" variant="light">
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
    </>
  );
};

export default OrderListScreen;
