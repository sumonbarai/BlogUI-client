import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const DashBoardTable = () => {
  const { allPost } = useSelector((state) => state.dashboard);

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
        {allPost &&
          allPost.map((blog) => <TableRow key={blog._id} blog={blog} />)}
      </tbody>
    </table>
  );
};

export default DashBoardTable;
