import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children ,type }) {
  return <button className={ `custom-button ${type}` }>{children}</button>;
}

export default CustomButton;
