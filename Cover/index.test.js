import React from "react";
import { render } from "@testing-library/react";
import Cover from "./index";
import { coverImage, coverVideo } from "../tests/fixtures.js";

const propsWithCategory = {
  coverImage,
  coverVideo,
};

const propsWithoutCategory = {};

describe("Cover", () => {
  it("renders an AMP Story cover with props", () => {
    render(<Cover {...propsWithCategory} />);

    const coverContainer = document.querySelector("#cover");

    expect(coverContainer).toBeInTheDocument();

    const theCoverImage = document.querySelector("amp-video");

    expect(theCoverImage).toHaveAttribute("poster", `/${coverImage}`);

    const theCoverSource = document.querySelector("source");

    expect(theCoverSource).toHaveAttribute("src", `/${coverVideo}`);
  });
});

describe("Cover", () => {
  it("renders an AMP Story cover without props", () => {
    render(<Cover {...propsWithoutCategory} />);
    const coverContainer = document.querySelector("#cover");
    expect(coverContainer).toBeInTheDocument();
  });
});
