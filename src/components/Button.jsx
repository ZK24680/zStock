import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

function Button({ type, children, onClick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
