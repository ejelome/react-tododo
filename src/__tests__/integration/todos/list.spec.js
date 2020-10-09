import { render } from "@testing-library/react";
import React from "react";

import App from "../../../App";

test("<App /> displays todo list", () => {
  const { getByText } = render(<App />);
  const title = getByText(/my todos/i);
  expect(title).toBeInTheDocument();

  const listItem = getByText(/learn react/i);
  expect(listItem).toBeInTheDocument();
});
