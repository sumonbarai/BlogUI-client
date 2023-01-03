import React from "react";

const DashBoardForm = ({ action }) => {
  return (
    <form class="bg-base-100 w-2/3 p-8 rounded-lg">
      <div class="p-1">
        <label for="">Title</label>
        <input
          type="text"
          placeholder="Type Blog Post Title"
          class="input input-bordered w-full"
        />
      </div>
      <div class="p-1">
        <label for="">Author Name</label>
        <input
          type="text"
          placeholder="Author Name Here"
          class="input input-bordered w-full"
        />
      </div>
      <div class="p-1">
        <label for="">Image Url</label>
        <input
          type="text"
          placeholder="please give image url"
          class="input input-bordered w-full"
        />
      </div>
      <div class="flex">
        <div class="p-1">
          <label for="">Date</label>
          <input
            type="text"
            placeholder="Day/Month/Year"
            class="input input-bordered w-full"
          />
        </div>
        <div class="p-1">
          <label for="">Reading Time</label>
          <input
            type="text"
            placeholder="8 mins"
            class="input input-bordered w-full"
          />
        </div>
        <div class="p-1">
          <label for="">Views</label>
          <input
            type="text"
            placeholder="2.1"
            class="input input-bordered w-full"
          />
        </div>
      </div>
      <div class="p-1">
        <label for="">Write Your Post</label>
        <textarea
          class="textarea textarea-bordered w-full"
          placeholder="Write Your post details"
        ></textarea>
      </div>
      <div class="flex justify-between items-center py-4">
        <select class="p-2 bg-base-100 border rounded">
          <option disabled selected>
            selected Category
          </option>
          <option value="">food</option>
          <option value="">vegetable</option>
        </select>
        <button class="btn btn-sm">{action}</button>
      </div>
    </form>
  );
};

export default DashBoardForm;
