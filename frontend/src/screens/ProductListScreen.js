import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";

import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts(""));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Êtes Vous Sur De Vouloir Supprimer?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Meta title="Admin | Produits" />
      <Container className="lg-p-top3">
        <Row className="align-items-center">
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <h2>Produits</h2>
          </Col>
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <Button
              className="btn bg-bewell float-right"
              onClick={createProductHandler}
            >
              <AddIcon />
              &nbsp; Nouveau produit
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}
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
                {/* <th>ID</th> */}
                <th>IMAGE</th>
                <th>NOM</th>
                <th>PRIX</th>
                <th>CONTENANCE</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  {/* <td>{product._id}</td> */}
                  <td>
                    <img src={product.image} width="100px" alt={product.name} />
                  </td>
                  <td>
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </td>
                  <td>{product.price}dh</td>
                  <td>{product.contenance}g</td>
                  <td>{product.description}</td>

                  <td className="text-center">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <EditIcon />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
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

export default ProductListScreen;
