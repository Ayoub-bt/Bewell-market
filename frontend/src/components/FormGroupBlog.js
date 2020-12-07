import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FormGroupBlog = (props) => {
  const { id, label, placeholder, value, onchange } = props;
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label} : </Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={
          value === "ingredient 1" ||
          value === "ingredient 2" ||
          value === "instruction 1" ||
          value === "instruction 2" ||
          value === "instruction 3"
            ? ""
            : value
        }
        onChange={(e) => onchange(e.target.value)}
      ></Form.Control>
    </Form.Group>
  );
};

FormGroupBlog.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.string.isRequired,
};

export default FormGroupBlog;
