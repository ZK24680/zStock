import styles from "./Filter.module.css";

function Filter() {
  return (
    <select className={styles.filter}>
      <option value={"ALL"}>All</option>
      <option value={"MKA"}>MKA</option>
      <option value={"AKW"}>AKW</option>
      <option value={"MKA"}>THZ</option>
    </select>
  );
}

export default Filter;
