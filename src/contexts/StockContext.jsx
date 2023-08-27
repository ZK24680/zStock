import { createContext, useContext, useEffect, useReducer } from "react";
import useTechUrl from "../hooks/useTechUrl";
import PropTypes from "prop-types";

StockProvider.propTypes = {
  children: PropTypes.object,
};

const StockContext = createContext();

const intitalState = {
  stocks: [],
  foundStocks: [],
  loading: false,
  technicians: [],
  error: "",
  searchQuery: "",
};

const STOCK_URL = "http://localhost:9000/stocks";
const TECH_URL = "http://localhost:9000/technicians";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: "" };

    case "technician/loaded":
      return { ...state, loading: false, technicians: action.payLoad };

    case "stocks/loaded":
      return { ...state, loading: false, stocks: action.payLoad };

    case "searched":
      let set = action.payLoad.length > 0 ? true : false;

      return {
        ...state,
        searchQuery: action.payLoad,
        foundStocks: set
          ? state.stocks.filter((stock) =>
              stock.barcode.toLowerCase().includes(action.payLoad.toLowerCase())
            )
          : [],
      };

    case "rejected":
      return { ...state, loading: false, error: action.payLoad };
    default:
      throw new Error("Wrong action usage");
  }
}

function StockProvider({ children }) {
  const [
    { stocks, loading, technicians, error, searchQuery, foundStocks },
    disPatch,
  ] = useReducer(reducer, intitalState);

  const techUrl = useTechUrl();
  const queryUrl = `${techUrl === "technicians" ? "" : `?tech=${techUrl}`}`;

  useEffect(() => {
    async function fetchTech() {
      disPatch({ type: "loading" });

      try {
        const res = await fetch(TECH_URL);

        if (!res.ok) {
          throw new Error("Something went wrong fetching Tech");
        }

        const data = await res.json();

        disPatch({ type: "technician/loaded", payLoad: data });
      } catch (err) {
        disPatch({ type: "rejected", payLoad: `${err.message}` });
      }
    }

    fetchTech();
  }, []);

  useEffect(() => {
    async function fetchStockData() {
      disPatch({ type: "loading" });

      try {
        const res = await fetch(`${STOCK_URL + queryUrl}`);

        if (!res.ok)
          throw new Error("Something went wrong while data fetching");

        const data = await res.json();

        disPatch({ type: "stocks/loaded", payLoad: data });
      } catch (err) {
        disPatch({ type: "rejected", payLoad: `${err.message}` });
      }
    }

    fetchStockData();
  }, [queryUrl]);

  return (
    <StockContext.Provider
      value={{
        stocks,
        loading,
        error,
        technicians,
        searchQuery,
        techUrl,
        disPatch,
        foundStocks,
      }}
    >
      {children}
    </StockContext.Provider>
  );
}

function useStock() {
  const context = useContext(StockContext);

  if (context === undefined)
    throw new Error("Using useSotck outside of the provider");

  return context;
}

export { StockProvider, useStock };
