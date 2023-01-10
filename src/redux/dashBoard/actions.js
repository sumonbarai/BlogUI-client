import {
  DELETE_POST,
  EDIT_POST,
  GET_DASHBOARD_POST_FAILED,
  GET_DASHBOARD_POST_REQUEST,
  GET_DASHBOARD_POST_SUCCESS,
} from "./actionType";

export const getDashBoardRequestAction = () => {
  return {
    type: GET_DASHBOARD_POST_REQUEST,
  };
};

export const getDashBoardSuccessAction = (data) => {
  return {
    type: GET_DASHBOARD_POST_SUCCESS,
    payload: data,
  };
};

export const getDashBoardFailedAction = (error) => {
  return {
    type: GET_DASHBOARD_POST_FAILED,
    payload: error,
  };
};

export const AddPostAction = (data) => {
  return {
    type: GET_DASHBOARD_POST_FAILED,
    payload: data,
  };
};
export const deletePostAction = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const editPostAction = (id, data) => {
  return {
    type: EDIT_POST,
    payload: { id: id, data: data },
  };
};
