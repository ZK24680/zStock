import styles from "./ListItem.module.css";
function ListItem() {
  return (
    <li className={styles.listItem}>
      <p>6424</p>
      <p>barcode</p>
      <p className={styles.takeTwo}>Redmi Note 7 pro Speaker jajaj</p>
      <p>technician</p>
      <p>status</p>
    </li>
  );
}

export default ListItem;
