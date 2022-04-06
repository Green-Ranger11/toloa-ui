import React from "react";
import PropTypes from "prop-types";

function Card({ children }) {
  return <div className="m-3 py-2 px-1 rounded-md bg-[white] ">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
