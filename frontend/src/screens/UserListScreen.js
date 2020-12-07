import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers, deleteUser } from "../actions/userActions";
import Meta from "../components/Meta";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CachedIcon from "@material-ui/icons/Cached";
import ReactToExcel from "react-html-table-to-excel";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <Meta title="Admin | Utilisateurs" />
      <Container className="lg-p-top3">
        <Row>
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <h2>Utilisateurs</h2>
          </Col>
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <Button
              className="btn bg-bewell float-right"
              onClick={() => dispatch(listUsers())}
            >
              <CachedIcon />
              &nbsp; Actualiser
            </Button>
            <ReactToExcel
              className="btn bg-bewell float-right mr-4"
              table="usersTable"
              filename="users"
              sheet="sheet 1"
              buttonText="EXCEL"
            />
          </Col>
        </Row>
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
            id="usersTable"
          >
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>NOM COMPLET</th>
                <th>EMAIL</th>
                <th>TEL</th>
                <th className="text-center">ADMIN</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  {/* <td>{user._id}</td> */}
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                  </td>
                  <td className="text-center">
                    {user.isAdmin ? (
                      <CheckIcon style={{ color: "green" }} />
                    ) : (
                      <ClearIcon style={{ color: "red" }} />
                    )}
                  </td>
                  <td className="text-center">
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <EditIcon />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default UserListScreen;
