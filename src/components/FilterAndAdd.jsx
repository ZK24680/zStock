import styles from "./FilterAndAdd.module.css";
import Filter from "./Filter";
import Button from "./Button";

function FilterAndAdd() {
  return (
    <div className={styles.fAndA}>
      <Filter />
      <Button type="app">Add New</Button>
    </div>
  );
}

export default FilterAndAdd;
