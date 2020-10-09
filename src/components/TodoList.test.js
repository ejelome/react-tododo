import { shallow } from "enzyme";
import React from "react";

import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("renders without crashing", () => {
    shallow(<TodoList />);
  });

  it("displays the title", () => {
    const [tag, title] = ["h1", "My todos"];
    const wrapper = shallow(<TodoList title={title} />);
    const text = wrapper.find(tag).text();
    expect(text).toBe(title);
  });

  it("displays the list item", () => {
    const [tag, listItems] = ["li", ["Learn React"]];
    const listItem = listItems[0];
    const wrapper = shallow(<TodoList listItems={listItems} />);
    const text = wrapper.find(tag).text();
    expect(text).toBe(listItem);
  });
});
