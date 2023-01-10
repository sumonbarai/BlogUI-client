import { CATEGORY, CLEAR, INPUT_KEYWORD, SORT } from "./actionType";

export const sortAction = (value) => {
  return {
    type: SORT,
    payload: value,
  };
};

export const categoryAction = (value) => {
  return {
    type: CATEGORY,
    payload: value,
  };
};

export const InputKeywordAction = (input) => {
  return {
    type: INPUT_KEYWORD,
    payload: input,
  };
};

export const clearAction = () => {
  return {
    type: CLEAR,
  };
};
