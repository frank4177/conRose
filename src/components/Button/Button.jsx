import React from "react";
import styles from "./button.module.css";

const Button = ({ text, color, backgroundColor, width, height, size, disabled, handleClick }) => {
  return (
    <button
      style={{
        background: `${backgroundColor}`,
        color: `${color}`,
        maxWidth: `${width}`,
        height:`${height}`,
        fontSize:`${size}`,
      }}
      onClick={()=> handleClick ?  handleClick() : null}
      className={styles.btn}
      disabled={disabled}
    >
      {text ? text : "Button"}
    </button>
  );
};

export default Button;
