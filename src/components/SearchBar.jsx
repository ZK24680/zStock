import { useStock } from "../contexts/StockContext";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { searchQuery, disPatch } = useStock();

  return (
    <input
      type="text"
      id="text"
      name="text"
      className={styles.search}
      placeholder="Search by barcode..."
      value={searchQuery}
      onChange={(e) => disPatch({ type: "searched", payLoad: e.target.value })}
    />
  );
}

export default SearchBar;
