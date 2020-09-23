import { connect } from "react-redux";
import {
  changeInputValue,
  deleteTodoItem,
  addTodoItem,
  getTodoItem,
} from "../redux/action-creator";

import Todolist from "../containers/Todolist";

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// version one, more understandable with using redux.
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    addTodoItem() {
      const action = addTodoItem();
      dispatch(action);
    },
    deleteTodoItem(index) {
      const action = deleteTodoItem(index);
      dispatch(action);
    },
    getTodoItem() {
      const action = getTodoItem();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
