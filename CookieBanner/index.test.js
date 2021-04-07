import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CookieBanner from "./index";

describe("Attachment", () => {
  it("renders the CookieBanner component", () => {
    const { container } = render(<CookieBanner />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
