import Button from "./Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles["form-group"]}>
        <label htmlFor="vouncher">Vouncher</label>
        <input
          type="number"
          id="vouncher"
          className={styles["form-input"]}
          placeholder="Vouncher Number..."
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="barcode">Barcode</label>

        <input
          type="text"
          id="barcode"
          className={styles["form-input"]}
          placeholder="Barcode..."
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="item">Item</label>

        <input
          type="text"
          id="item"
          className={styles["form-input"]}
          placeholder="item..."
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="tech">Tech :</label>

        <select className={styles["form-select"]}>
          <option value={"MKA"}>MKA</option>
          <option value={"THZ"}>THZ</option>
          <option value={"BMN"}>BMN</option>
          <option value={"CN"}>CN</option>
        </select>
      </div>

      <div className={styles.btn}>
        <Button type="back">Back to app</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default Form;
