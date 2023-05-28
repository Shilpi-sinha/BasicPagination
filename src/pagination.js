import { useState } from "react";

const Pagination = (props) => {
  const { itemcount, data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const totalpage = Math.ceil(data.length / itemcount);
  // let arr = [];
  const firstIndex = (currentPage - 1) * itemcount;
  const lastIndex = firstIndex + itemcount;

  const items = data.slice(firstIndex, lastIndex);
  const handleprev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <ul>{items && items.map((i, index) => <li key={index}>{i}</li>)}</ul>
      <button onClick={handleprev} disabled={currentPage === 1}>
        Prev
      </button>
      {/* <span>{currentPage}</span> */}
      <span>{totalpage}</span>
      <button onClick={handleNext} disabled={currentPage === totalpage}>
        Next
      </button>
    </>
  );
};
export default Pagination;
