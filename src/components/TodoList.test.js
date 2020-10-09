import { shallow } from "enzyme";
import React from "react";

import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper).toEqual({});
  });
});
