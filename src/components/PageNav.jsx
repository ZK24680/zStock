import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import PropTypes from "prop-types";

PageNav.propTypes = {
  type: PropTypes.string,
  totalStock: PropTypes.number,
};

function PageNav({ type, totalStock }) {
  return (
    <nav className={`${styles.nav} ${styles[type]}`}>
      <Link to={"/"}>
        <Logo />
      </Link>

      {type === "app" && (
        <p>
          {totalStock} {totalStock > 1 ? "items" : "item"} found
        </p>
      )}
    </nav>
  );
}

export default PageNav;
