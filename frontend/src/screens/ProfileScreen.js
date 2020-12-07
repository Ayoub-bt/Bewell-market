import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

const ProfileScreen = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({ id: user._id, name, email, phone, password })
      );
      window.location.reload();
    }
  };

  return (
    <Container className="lg-p-top3">
      <Row>
        <Col md={12}>
          <h3 className="mb-5">Profile</h3>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {success && <Message variant="success">Profile modifié</Message>}
          {loading ? (
            <Loader />
          ) : (
            <Form onSubmit={submitHandler}>
              {/* Name */}
              <Form.Group controlId="name">
                <Form.Label>Nom complet :</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Entrer votre nom et prenom..."
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
              <Form.Group controlId="phone">
                <Form.Label>Tel :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer votre numero de tel..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="password">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Entrer votre nouveau mot de passe..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirmer mot de passe :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Répéter votre nouveau mot de passe..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="bg-bewell">
                Modifier
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
