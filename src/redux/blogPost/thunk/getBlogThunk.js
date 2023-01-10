import {
  getBlogFailedAction,
  getBlogRequestAction,
  getBlogSuccessAction,
} from "../actions";

const getBlogThunk = () => {
  return async (dispatch) => {
    dispatch(getBlogRequestAction());
    try {
      const request = await fetch("https://blogui-server.onrender.com/blog");
      const data = await request.json();
      dispatch(getBlogSuccessAction(data));
    } catch (error) {
      dispatch(getBlogFailedAction(error));
    }
  };
};

export default getBlogThunk;
