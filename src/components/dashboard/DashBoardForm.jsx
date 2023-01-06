import React from "react";

const DashBoardForm = ({ action }) => {
  return (
    <form className="bg-base-100 w-2/3 p-8 rounded-lg">
      <div className="p-1">
        <label for="">Title</label>
        <input
          type="text"
          placeholder="Type Blog Post Title"
          className="input input-bordered w-full"
        />
      </div>
      <div className="p-1">
        <label for="">Author Name</label>
        <input
          type="text"
          placeholder="Author Name Here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="p-1">
        <label for="">Image Url</label>
        <input
          type="text"
          placeholder="please give image url"
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex">
        <div className="p-1">
          <label for="">Date</label>
          <input
            type="text"
            placeholder="Day/Month/Year"
            className="input input-bordered w-full"
          />
        </div>
        <div className="p-1">
          <label for="">Reading Time</label>
          <input
            type="text"
            placeholder="8 mins"
            className="input input-bordered w-full"
          />
        </div>
        <div className="p-1">
          <label for="">Views</label>
          <input
            type="text"
            placeholder="2.1"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="p-1">
        <label for="">Write Your Post</label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write Your post details"
        ></textarea>
      </div>
      <div className="flex justify-between items-center py-4">
        <select className="p-2 bg-base-100 border rounded">
          <option disabled selected>
            selected Category
          </option>
          <option value="">food</option>
          <option value="">vegetable</option>
        </select>
        <button className="btn btn-sm">{action}</button>
      </div>
    </form>
  );
};

export default DashBoardForm;
