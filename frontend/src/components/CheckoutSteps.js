import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <Nav className="justify-content-center my-4" id="checkoutSteps">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>1. S'identifier</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>1. S'identifier</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>2. Livraison</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>2. Livraison</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>3. Confirmation</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>3. Confirmation</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
