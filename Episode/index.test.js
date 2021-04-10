import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Episode from "./index";
import {
  audiosnippet,
  content,
  nameMark,
  podcasts,
  poster,
  title,
  video,
  number,
  cta,
} from "../tests/fixtures.js";

const episodeProps = {
  audiosnippet,
  content,
  cta,
  nameMark,
  number,
  podcasts,
  poster,
  title,
  video,
};
describe("Episode", () => {
  it("renders the Episode component", () => {
    const { container } = render(<Episode {...episodeProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
