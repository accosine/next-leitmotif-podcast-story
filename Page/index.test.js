import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { PageDocument } from "./index";
import {
  content,
  hamburger,
  podcasts,
  poster,
  video,
} from "../tests/fixtures.js";

const configuration = {
  hamburger,
  podcasts,
};

const pageProps = { configuration, content, poster, video };

describe("PageDocument", () => {
  it("renders the Page component", () => {
    const { container } = render(<PageDocument {...pageProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
