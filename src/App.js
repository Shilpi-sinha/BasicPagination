import Pagination from "./pagination";
import "./styles.css";
import data from "./data";

export default function App() {
  return (
    <>
      <Pagination itemcount={8} data={data} />
    </>
  );
}
