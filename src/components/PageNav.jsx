import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import PropTypes from "prop-types";

PageNav.propTypes = {
  type: PropTypes.string,
};

function PageNav({ type }) {
  return (
    <nav className={`${styles.nav} ${styles[type]}`}>
      <Link to={"/"}>
        <Logo />
      </Link>
    </nav>
  );
}

export default PageNav;
