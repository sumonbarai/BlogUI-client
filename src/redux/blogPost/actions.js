import {
  GET_BLOG_FAILED,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "./actionType";

export const getBlogRequestAction = () => {
  return {
    type: GET_BLOG_REQUEST,
  };
};

export const getBlogSuccessAction = (data) => {
  return {
    type: GET_BLOG_SUCCESS,
    payload: data,
  };
};

export const getBlogFailedAction = (error) => {
  return {
    type: GET_BLOG_FAILED,
    payload: error,
  };
};
