import {
  getBlogFailedAction,
  getBlogRequestAction,
  getBlogSuccessAction,
} from "../actions";

const getBlogThunk = () => {
  return async (dispatch) => {
    dispatch(getBlogRequestAction());
    try {
      const request = await fetch("http://localhost:5000/blog");
      const data = await request.json();
      dispatch(getBlogSuccessAction(data));
    } catch (error) {
      dispatch(getBlogFailedAction(error));
    }
  };
};

export default getBlogThunk;
