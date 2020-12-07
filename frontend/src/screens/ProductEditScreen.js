import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [contenance, setContenance] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setContenance(product.contenance);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        contenance,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      <Meta title="Admin | Ajouter / Modifier produit" />
      <Link to="/admin/productlist" className="btn btn-light my-3">
        <ChevronLeftIcon /> Retour
      </Link>
      <FormContainer>
        <h1 className="mb-4">Ajouter / Modifier</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label>Nom :</Form.Label>
              <Form.Control
                type="text"
                value={name === "Sample nom" ? "" : name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Price */}
            <Form.Group controlId="price">
              <Form.Label>Prix : </Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Image */}
            <Form.Group controlId="image">
              <Form.Label>Image : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le lien d'une image..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Ou choisir une photo"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            {/* Contenance */}
            <Form.Group controlId="contenance">
              <Form.Label>Contenance : </Form.Label>
              <Form.Control
                type="number"
                value={contenance}
                onChange={(e) => setContenance(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock : </Form.Label>
              <Form.Control
                type="number"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description">
              <Form.Label>Description : </Form.Label>
              <Form.Control
                type="text"
                value={description === "Sample description" ? "" : description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" className="bg-bewell">
              Ajouter / Modifier
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
