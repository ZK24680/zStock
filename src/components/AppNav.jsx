import styles from "./AppNav.module.css";
import SearchBar from "./SearchBar";
import FilterAndAdd from "./FilterAndAdd";

function AppNav() {
  return (
    <main className={styles.main}>
      <SearchBar />
      <FilterAndAdd />
    </main>
  );
}

export default AppNav;
