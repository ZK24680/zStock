import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <input
      type="text"
      id="text"
      name="text"
      className={styles.search}
      placeholder="Search by barcode..."
    />
  );
}

export default SearchBar;
