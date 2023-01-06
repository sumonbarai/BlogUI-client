import React from "react";
import TableRow from "./TableRow";

const DashBoardTable = () => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th className="text-lg">TITLE</th>
          <th className="text-lg">CATEGORY</th>
          <th className="text-lg">VIEWS</th>
          <th className="text-lg">UPDATE</th>
          <th className="text-lg">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default DashBoardTable;
