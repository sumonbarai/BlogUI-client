import {
  ADD_READING,
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
        isReading: [...state.isReading],
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        blogs: [...action.payload],
        isReading: [...state.isReading],
      };
    case GET_BLOG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        blogs: [],
        isReading: [...state.isReading],
      };
    case ADD_READING:
      const isExits = state.isReading.find((f) => f._id === action.payload._id);
      if (isExits) {
        const remaining = state.isReading.filter(
          (f) => f._id !== action.payload._id
        );
        return {
          ...state,
          isReading: [isExits, ...remaining],
        };
      }
      return {
        ...state,
        isReading: [action.payload, ...state.isReading],
      };

    default:
      return state;
  }
};

export default reducer;
