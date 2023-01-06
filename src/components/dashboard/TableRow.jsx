import React from "react";

const TableRow = () => {
  return (
    <tr className="">
      <td>this is blog post</td>
      <td>food</td>
      <td>2.1k</td>
      <td>
        <button className="btn btn-xs">Update</button>
      </td>
      <td>
        <button className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
