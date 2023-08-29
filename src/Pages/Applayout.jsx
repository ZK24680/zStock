import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import styles from "./Applayout.module.css";
import { Outlet } from "react-router-dom";
import { useStock } from "../contexts/StockContext";

function Applayout() {
  const { totalStock } = useStock();

  // if (techUrl === undefined) return navigate("technicians", { replace: true });

  return (
    <section className={styles.appLayout}>
      <PageNav type={"app"} totalStock={totalStock} />
      <AppNav />
      <Outlet />
    </section>
  );
}

export default Applayout;
