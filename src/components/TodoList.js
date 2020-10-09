import React from "react";

const TodoList = ({ title, items }) => (
  <div>
    <h1>{title}</h1>
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

TodoList.defaultProps = {
  title: "My todos",
  items: ["Learn React"],
};

export default TodoList;
