import { ADD_TODO, DELETE_TODO, CHANGE_INPUT, INIT_ITEM } from "./action-types";
import axios from "axios";

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const deleteTodoItem = (index) => ({
  type: DELETE_TODO,
  index,
});

export const addTodoItem = () => ({
  type: ADD_TODO,
});

export const initItem = (data) => ({
  type: INIT_ITEM,
  data,
});

export const getTodoItem = () => {
  return (dispatch) => {
    return axios
      .get("https://fa1bfe87-ee72-4e52-bb88-17e450b46a2c.mock.pstmn.io/list")
      .then((res) => {
        const data = res.data;
        const action = initItem(data);
        console.log(action);
        dispatch(action);
      });
  };
};
