import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import styles from "./Applayout.module.css";
import List from "../components/List";

function Applayout() {
  return (
    <section className={styles.appLayout}>
      <PageNav type={"app"} />
      <AppNav />
      <List />
    </section>
  );
}

export default Applayout;
