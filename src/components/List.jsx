import { useStock } from "../contexts/StockContext";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import Loader from "./Loader";
import Message from "./Message";

function List() {
  const { stocks, foundStocks, searchQuery, loading, error } = useStock();

  const displayStocks = searchQuery.length > 0 ? foundStocks : stocks;

  const sorted = displayStocks.slice().sort((a, b) => a.vouncher - b.vouncher);

  if (error) return <Message message={error} />;
  if (loading) return <Loader />;

  return (
    <ul className={styles.list}>
      {sorted.map((stock) => (
        <ListItem stock={stock} key={stock.id} />
      ))}
    </ul>
  );
}

export default List;
