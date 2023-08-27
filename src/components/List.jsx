import { useStock } from "../contexts/StockContext";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import Loader from "./Loader";
import Message from "./Message";

function List() {
  const { stocks, foundStocks, searchQuery, loading, error } = useStock();

  const displayStocks = searchQuery.length > 0 ? foundStocks : stocks;

  if (error) return <Message message={error} />;
  if (loading) return <Loader />;

  return (
    <ul className={styles.list}>
      {displayStocks.map((stock) => (
        <ListItem stock={stock} key={stock.id} />
      ))}
    </ul>
  );
}

export default List;
