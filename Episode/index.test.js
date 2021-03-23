import React from "react";
import { render, screen } from "@testing-library/react";
import Excerpt from "./index";

const propsWithCategory = {
  title: "Title - Another Blog Post 2",
  slug: "another-blog-post-2",
  path: "article",
  category: "serverless",
  date: "2020-02-16T05:35",
  isCategory: true,
};

const propsWithoutCategory = {
  title: "Title - Another Blog Post 2",
  slug: "another-blog-post-2",
  path: "article",
  category: "",
  date: "2020-02-16T05:35",
  isCategory: false,
};

describe("Excerpt", () => {
  it("renders with 'serverless' category", () => {
    render(<Excerpt {...propsWithCategory} />);
    expect(screen.getByText("serverless")).toBeInTheDocument();
  });
});

describe("Excerpt", () => {
  it("renders without category", () => {
    render(<Excerpt {...propsWithoutCategory} />);
    expect(screen.queryByText("serverless")).toBeNull();
  });
});
