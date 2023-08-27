import PageNav from "../components/PageNav";
import styles from "./FormLayout.module.css";
import Form from "../components/Form";

function FormLayout() {
  return (
    <section className={styles.form}>
      <PageNav />
      <Form />
    </section>
  );
}

export default FormLayout;
