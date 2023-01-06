import React from "react";

const Pagination = () => {
  return (
    <div className="text-center p-8">
      <div className="btn-group">
        <button className="btn btn-xs hover:bg-[#5869DA]">1</button>
        <button className="btn btn-xs hover:bg-[#5869DA] bg-[#5869DA]">
          2
        </button>
        <button className="btn btn-xs hover:bg-[#5869DA]">3</button>
        <button className="btn btn-xs hover:bg-[#5869DA]">4</button>
        <button className="btn btn-xs hover:bg-[#5869DA]">5</button>
        <button className="btn btn-xs hover:bg-[#5869DA]">6</button>
        <button className="btn btn-xs hover:bg-[#5869DA]">7</button>
      </div>
    </div>
  );
};

export default Pagination;
