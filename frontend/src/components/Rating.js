import React from "react";
import PropTypes from "prop-types";
import {
  StarRounded,
  StarBorderRounded,
  StarHalfRounded,
} from "@material-ui/icons";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <StarRounded />
        ) : value >= 0.5 ? (
          <StarHalfRounded />
        ) : (
          <StarBorderRounded />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <StarRounded />
        ) : value >= 1.5 ? (
          <StarHalfRounded />
        ) : (
          <StarBorderRounded />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <StarRounded />
        ) : value >= 2.5 ? (
          <StarHalfRounded />
        ) : (
          <StarBorderRounded />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <StarRounded />
        ) : value >= 3.5 ? (
          <StarHalfRounded />
        ) : (
          <StarBorderRounded />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <StarRounded />
        ) : value >= 4.5 ? (
          <StarHalfRounded />
        ) : (
          <StarBorderRounded />
        )}
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f7e200",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
