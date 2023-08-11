import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Button from "../components/Button";

function Homepage() {
  return (
    <section className={styles.home}>
      <PageNav />

      <div className={styles.main}>
        <div className={styles.content}>
          <p>zStock</p>
          <h1>Make your work faster and smater</h1>

          <Button type={"get-start"}>Get Start</Button>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
