import { toast } from "react-hot-toast";
import { AddPostAction } from "../actions";

const addPostThunk = (data) => {
  return async (dispatch) => {
    try {
      const request = await fetch("https://blogui-server.onrender.com/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await request.json();
      if (result) {
        dispatch(AddPostAction(result));
        toast.success("Successfully added!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default addPostThunk;
