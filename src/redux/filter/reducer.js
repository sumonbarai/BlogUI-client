import { CATEGORY, CLEAR, INPUT_KEYWORD, SORT } from "./actionType";

const initialState = {
  input: "",
  category: "",
  sort: "least_upload",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case INPUT_KEYWORD:
      return {
        ...state,
        input: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        input: "",
        category: "",
        sort: "least_upload",
      };
    default:
      return state;
  }
};

export default reducer;
