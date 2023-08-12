import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <Logo />
      </Link>
    </nav>
  );
}

export default PageNav;
