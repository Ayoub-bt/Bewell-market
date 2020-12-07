import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : "Casablanca"
  );
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode }));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler} className="mt-5">
        {/* Adress */}
        <Form.Group controlId="address">
          <Form.Label>Adresse: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez l'adresse..."
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* City */}
        <Form.Group controlId="city">
          <Form.Label>Ville: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer la ville..."
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Postal Code */}
        <Form.Group controlId="postalCode">
          <Form.Label>Code Postal: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer le code postal..."
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="bg-bewell">
          Suivant
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
