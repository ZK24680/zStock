import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const TECH_URL = "http://localhost:9000/technicians";
const STOCK_URL = "http://localhost:9000/stocks";

function Form() {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);
  const [vouncher, setVouncher] = useState("");
  const [barcode, setBarcode] = useState("");
  const [item, setItem] = useState("");
  const [tech, setTech] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTech(technicians[0]);
  }, [technicians]);

  useEffect(() => {
    async function fetchTech() {
      setLoading(true);

      try {
        const res = await fetch(TECH_URL);

        if (!res.ok) {
          throw new Error("Something went wrong fetching Tech");
        }

        const data = await res.json();

        setTechnicians(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTech();
  }, []);

  async function addNewItem(newItem) {
    setLoading(true);
    try {
      const res = await fetch(STOCK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) throw new Error("Something went wrong adding new item!");

      const data = await res.json();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  function backUrl(e) {
    e.preventDefault();

    navigate(-1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      vouncher: Number(vouncher),
      barcode,
      item,
      tech,
      status: "using",
    };

    await addNewItem(newItem);

    setVouncher("");
    setBarcode("");
    setItem("");
    setTech(technicians[0]);
  }

  return (
    <>
      {loading && <Loader />}

      <form
        className={`${styles.form} ${loading ? styles["form-loading"] : ""}`}
        onSubmit={handleSubmit}
      >
        <div className={styles["form-group"]}>
          <label htmlFor="vouncher">Vouncher</label>
          <input
            type="number"
            id="vouncher"
            className={styles["form-input"]}
            placeholder="Vouncher Number..."
            value={vouncher}
            onChange={(e) => setVouncher(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="barcode">Barcode</label>

          <input
            type="text"
            id="barcode"
            className={styles["form-input"]}
            placeholder="Barcode..."
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="item">Item</label>

          <input
            type="text"
            id="item"
            className={styles["form-input"]}
            placeholder="item..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="tech">Tech :</label>

          <select
            className={styles["form-select"]}
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
            {technicians.map((technician) => (
              <option key={technician} value={technician}>
                {technician}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.btn}>
          <Button type="back" onClick={backUrl}>
            Back to app
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

export default Form;
