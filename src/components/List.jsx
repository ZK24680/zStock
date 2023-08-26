import { useStock } from "../contexts/StockContext";
import styles from "./List.module.css";
import ListItem from "./ListItem";

function List() {
  const { stocks, foundStocks, searchQuery } = useStock();

  const displayStocks = searchQuery.length > 0 ? foundStocks : stocks;

  return (
    <ul className={styles.list}>
      {displayStocks.map((stock) => (
        <ListItem stock={stock} key={stock.id} />
      ))}
    </ul>
  );
}

export default List;
