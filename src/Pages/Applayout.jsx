import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import styles from "./Applayout.module.css";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <section className={styles.appLayout}>
      <PageNav type={"app"} />
      <AppNav />
      <Outlet />
    </section>
  );
}

export default Applayout;
