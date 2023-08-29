import { useEffect, useState } from "react";
import { useStock } from "../contexts/StockContext";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { searchQuery, disPatch } = useStock();
  const [searchBy, setSearchBy] = useState("barcode");

  useEffect(() => {
    disPatch({ type: "searchMethod" });
  }, [searchBy]);

  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        id="text"
        name="text"
        className={styles.search}
        placeholder={`Search ${searchBy}...`}
        value={searchQuery}
        onChange={(e) =>
          disPatch({
            type: "searched",
            payLoad: { searchMethod: searchBy, value: e.target.value },
          })
        }
      />
      <div className={styles.selectGroup}>
        <select
          className={styles.select}
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value={"barcode"}>barcode</option>
          <option value={"vouncher"}>vouncher</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
