import {
  getDashBoardFailedAction,
  getDashBoardRequestAction,
  getDashBoardSuccessAction,
} from "../actions";

const getDashBoardThunk = () => {
  return async (dispatch) => {
    dispatch(getDashBoardRequestAction());
    try {
      const request = await fetch("https://blogui-server.onrender.com/blog");
      const data = await request.json();
      dispatch(getDashBoardSuccessAction(data));
    } catch (error) {
      dispatch(getDashBoardFailedAction(error));
    }
  };
};

export default getDashBoardThunk;
