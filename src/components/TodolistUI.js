import React from "react";
import PropTypes from "prop-types";

TodoListUI.propTypes = {
  inputValue: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

function TodoListUI(props) {
  const {
    inputValue,
    list,
    changeInputValue,
    addTodoItem,
    deleteTodoItem,
  } = props;
  return (
    <div>
      <div>
        <input
          type="text"
          id="todolist"
          name="todolist"
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={addTodoItem}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => deleteTodoItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListUI;
