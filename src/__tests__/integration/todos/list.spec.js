import { render } from "@testing-library/react";
import React from "react";

import App from "../../../App";

test("<App /> displays todo list", () => {
  const { getByText } = render(<App />);
  expect(getByText("my todos", { exact: false })).toBeInTheDocument();
});
