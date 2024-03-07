import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <p>
      <button
        className={[styles.button, styles.buttonRed].join(" ")}
      >
        {children}
      </button>
    </p>
  );
};

export default Button;
