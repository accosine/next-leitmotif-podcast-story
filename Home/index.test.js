import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Home } from "./index";
import {
  coverImage,
  coverVideo,
  cta,
  nameMark,
  podcasts,
  posts,
} from "../tests/fixtures.js";

const { ctaSubscribe, ctaDescribe, ctaInvite } = cta;
const configuration = {
  coverImage,
  coverVideo,
  ctaDescribe,
  ctaInvite,
  ctaSubscribe,
  nameMark,
  podcasts,
};

describe("Home", () => {
  it("renders the Home component", () => {
    const { container } = render(
      <Home posts={posts} configuration={configuration} />
    );
    expect(container).toBeInTheDocument();
  });
});
