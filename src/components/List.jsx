import { useStock } from "../contexts/StockContext";
import styles from "./List.module.css";
import ListItem from "./ListItem";

function List() {
  const { stocks } = useStock();

  console.log(stocks);

  return (
    <ul className={styles.list}>
      {stocks.map((stock) => (
        <ListItem stock={stock} key={stock.id} />
      ))}
    </ul>
  );
}

export default List;
