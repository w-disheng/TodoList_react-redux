import { ADD_TODO, DELETE_TODO, CHANGE_INPUT, INIT_ITEM } from "./action-types";

const initState = {
  inputValue: "",
  list: [],
};

export const reducer = (state = initState, action) => {
  if (action.type === CHANGE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...state.list, state.inputValue];
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...action.data];
    return newState;
  }
  return state;
};

export default reducer;
