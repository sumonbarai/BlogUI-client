import { toast } from "react-hot-toast";
import { editPostAction } from "../actions";

const editPostThunk = (id, data) => {
  return async (dispatch) => {
    try {
      const request = await fetch(
        `https://blogui-server.onrender.com/blog?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await request.json();
      if (result.acknowledged) {
        dispatch(editPostAction(id, data));
        toast.success("Successfully Updated!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default editPostThunk;
