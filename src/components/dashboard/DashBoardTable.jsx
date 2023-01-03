import React from "react";
import TableRow from "./TableRow";

const DashBoardTable = () => {
  return (
    <table class="table w-full">
      <thead>
        <tr>
          <th class="text-lg">TITLE</th>
          <th class="text-lg">CATEGORY</th>
          <th class="text-lg">VIEWS</th>
          <th class="text-lg">UPDATE</th>
          <th class="text-lg">DELETE</th>
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
