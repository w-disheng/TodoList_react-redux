import React, { Component } from "react";

import TodolistUI from "../components/TodolistUI";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodoItem();
  }

  render() {
    return <TodolistUI {...this.props} />;
  }
}

export default TodoList;
