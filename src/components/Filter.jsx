import { useEffect, useState } from "react";
import { useStock } from "../contexts/StockContext";
import styles from "./Filter.module.css";
import { useNavigate } from "react-router-dom";

function Filter() {
  const { technicians, techUrl } = useStock();
  const navigate = useNavigate();

  const [filter, setFilter] = useState(techUrl);

  useEffect(() => {
    navigate(`${filter}`);
  }, [filter]);

  return (
    <select
      className={styles.filter}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value={"technicians"}>Technicians</option>
      {technicians.map((technician) => (
        <option value={`${technician}`} key={technician}>
          {technician}
        </option>
      ))}
    </select>
  );
}

export default Filter;
