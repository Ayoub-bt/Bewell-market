import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else if (phone.length < 10) {
      setMessage("Numero de tel invalid!");
    } else {
      dispatch(register(name, email, phone, password));
    }
  };

  return (
    <div className="mt-5">
      <FormContainer>
        <h1 className="mb-4">S'inscrire</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          {/* Name */}
          <Form.Group controlId="name">
            <Form.Label>Nom complet :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre nom et prénom..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="email">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer votre email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Phone */}
          <Form.Group controlId="email">
            <Form.Label>Numero de téléphone :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer votre numero..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="password">
            <Form.Label>Mot de passe :</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer votre mot de passe..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmer Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Répétez votre mot de passe..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" className="login-btn" variant="contained">
            S'inscrire
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Deja inscrit?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="linkUnderline"
            >
              S'identifier
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
