import {
  getDashBoardFailedAction,
  getDashBoardRequestAction,
  getDashBoardSuccessAction,
} from "../actions";

const getDashBoardThunk = () => {
  return async (dispatch) => {
    dispatch(getDashBoardRequestAction());
    try {
      const request = await fetch("http://localhost:5000/blog");
      const data = await request.json();
      dispatch(getDashBoardSuccessAction(data));
    } catch (error) {
      dispatch(getDashBoardFailedAction(error));
    }
  };
};

export default getDashBoardThunk;
