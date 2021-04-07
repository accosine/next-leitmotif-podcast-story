import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./index";

describe("App", () => {
  it("renders the App component", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
