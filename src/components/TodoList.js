import React from "react";

const TodoList = ({ title }) => <h1>{title}</h1>;

TodoList.defaultProps = {
  title: "My todos",
};

export default TodoList;
