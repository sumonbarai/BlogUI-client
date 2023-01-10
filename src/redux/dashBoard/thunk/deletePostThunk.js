import { toast } from "react-hot-toast";
import { deletePostAction } from "../actions";

const deletePostThunk = (id) => {
  return async (dispatch) => {
    try {
      const request = await fetch(
        `https://blogui-server.onrender.com/blog/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await request.json();
      console.log(result);
      if (result.acknowledged) {
        dispatch(deletePostAction(id));
        toast.success("Successfully deleted!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default deletePostThunk;
