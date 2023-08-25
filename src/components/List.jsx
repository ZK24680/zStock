import styles from "./List.module.css";
import ListItem from "./ListItem";

function List() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 30 }, (_, i) => (
        <ListItem key={i} />
      ))}
    </ul>
  );
}

export default List;
