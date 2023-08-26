import styles from "./ListItem.module.css";
import PropTypes from "prop-types";

ListItem.propTypes = {
  stock: PropTypes.object,
};

function ListItem({ stock }) {
  return (
    <li className={styles.listItem}>
      <p>{stock.vouncher}</p>
      <p>{stock.barcode}</p>
      <p className={styles.takeTwo}>{stock.item}</p>
      <p>{stock.tech}</p>
      <p>{stock.status}</p>
    </li>
  );
}

export default ListItem;
