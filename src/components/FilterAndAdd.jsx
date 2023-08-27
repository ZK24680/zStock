import styles from "./FilterAndAdd.module.css";
import Filter from "./Filter";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function FilterAndAdd() {
  const navigate = useNavigate();

  return (
    <div className={styles.fAndA}>
      <Filter />
      <Button type="app" onClick={() => navigate("/form")}>
        Add New
      </Button>
    </div>
  );
}

export default FilterAndAdd;
