import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      count
    </button>
  );
}

export default Button;
