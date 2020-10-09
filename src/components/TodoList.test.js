import { shallow } from "enzyme";
import React from "react";

import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("renders without crashing", () => {
    shallow(<TodoList />);
  });

  it("displays the title", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("h1").text().toLowerCase()).toBe("my todos");
  });
});
