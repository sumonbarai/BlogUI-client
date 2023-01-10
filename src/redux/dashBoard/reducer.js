import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_DASHBOARD_POST_FAILED,
  GET_DASHBOARD_POST_REQUEST,
  GET_DASHBOARD_POST_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  error: "",
  allPost: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        allPost: [],
      };
    case GET_DASHBOARD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        allPost: [...action.payload],
      };
    case ADD_POST:
      return {
        ...state,
        allPost: [...state, action.payload],
      };
    case EDIT_POST:
      const remaining = state.allPost.filter(
        (post) => post._id !== action.payload.id
      );

      return {
        ...state,
        allPost: [
          ...remaining,
          { _id: action.payload.id, ...action.payload.data },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        allPost: state.allPost.filter((post) => post._id !== action.payload),
      };
    case GET_DASHBOARD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        allPost: [],
      };
    default:
      return state;
  }
};

export default reducer;
