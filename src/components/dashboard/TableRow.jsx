import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deletePostThunk from "../../redux/dashBoard/thunk/deletePostThunk";

const TableRow = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <tr className="">
      <td className="capitalize">{blog.title}</td>
      <td>{blog.category}</td>
      <td>{blog.views}k</td>
      <td>
        <button
          className="btn btn-xs"
          onClick={() => navigate(`/editBlog/${blog._id}`)}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-xs"
          onClick={() => dispatch(deletePostThunk(blog._id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
