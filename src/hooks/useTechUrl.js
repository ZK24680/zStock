import { useParams } from "react-router-dom";

function useTechUrl() {
  const { technicians } = useParams("technicians");

  return technicians;
}

export default useTechUrl;
