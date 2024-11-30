import React from "react";

const Button = ({ title, handleClick }) => (
  <button onClick={handleClick} className="btn btn-warning mt-2">
    {title}
  </button>
);

export default Button;
