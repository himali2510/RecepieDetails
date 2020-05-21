import React from "react";

//Destructuring & grab the alert msg from state
const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  );
};

export default Alert;
