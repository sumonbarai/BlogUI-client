import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addPostThunk from "../../redux/dashBoard/thunk/addPostThunk";

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // handle submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      image,
      duration,
      views,
      description,
      category,
      timeStamp: Date.now(),
    };
    if (
      title &&
      author &&
      image &&
      duration &&
      views &&
      description &&
      category
    ) {
      dispatch(addPostThunk(data));
      // empty form
      setTitle("");
      setAuthor("");
      setImage("");
      setDuration("");
      setViews("");
      setDescription("");
      setCategory("");
    }
  };

  return (
    <form className="bg-base-100 w-2/3 p-8 rounded-lg" onSubmit={handleSubmit}>
      <div className="p-1">
        <label>Title</label>
        <input
          type="text"
          placeholder="Type Blog Post Title"
          className="input input-bordered w-full"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="p-1">
        <label>Author Name</label>
        <input
          type="text"
          placeholder="Author Name Here"
          className="input input-bordered w-full"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="p-1">
        <label>Image Url</label>
        <input
          type="text"
          placeholder="please give image url"
          className="input input-bordered w-full"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <div className="flex">
        <div className="p-1">
          <label>Reading Duration</label>
          <input
            type="text"
            placeholder="8 mins"
            className="input input-bordered w-full"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          />
        </div>
        <div className="p-1">
          <label>Views</label>
          <input
            type="text"
            placeholder="2.1"
            className="input input-bordered w-full"
            onChange={(e) => setViews(e.target.value)}
            value={views}
          />
        </div>
      </div>
      <div className="p-1">
        <label>Write Your Post</label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write Your post details"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className="flex justify-between items-center py-4">
        <select
          className="p-4 bg-base-100 border rounded"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option disabled value={""}>
            selected Category
          </option>
          <option value="food">food</option>
          <option value="vegetable">vegetable</option>
          <option value="breakfast">breakfast</option>
        </select>

        <button className="btn btn-sm">Submit</button>
      </div>
    </form>
  );
};

export default AddForm;
