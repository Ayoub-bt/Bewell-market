import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import "../bootstrap.min.css";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="mt-5">
      <FormContainer>
        <h1 className="mb-4">S'identifier</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          {/* Email */}
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer mot de passe..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" className="login-btn" variant="contained">
            Se Connecter
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Nouveau Client?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
              className="linkUnderline"
            >
              S'inscrire
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
