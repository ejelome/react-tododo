import { render } from "@testing-library/react";
import React from "react";

import App from "../../App";

test("<App /> renders learn react link", () =>
  expect(render(<App />).getByText(/my todos/i)).toBeInTheDocument());
