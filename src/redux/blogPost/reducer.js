import {
  GET_BLOG_FAILED,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  error: "",
  blogs: [],
  isReading: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        blogs: [],
        isReading: [],
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        blogs: [...action.payload],
        isReading: [],
      };
    case GET_BLOG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        blogs: [],
        isReading: [],
      };

    default:
      return state;
  }
};

export default reducer;
