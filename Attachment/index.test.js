import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Attachment } from "./index";
import { podcasts } from "../tests/fixtures.js";

const [first, second] = Object.keys(podcasts);

describe("Attachment", () => {
  it("renders the link in an attachment of a podcast", () => {
    render(<Attachment podcasts={podcasts} />);

    const [firstAttachment, secondAttachment] = screen.getAllByRole("link");

    expect(firstAttachment).toHaveAttribute("href", podcasts[first].show);
    expect(secondAttachment).toHaveAttribute("href", podcasts[second].show);
  });
  it("renders the image in an attachment of a podcast", () => {
    render(<Attachment podcasts={podcasts} />);

    const [firstAttachment, secondAttachment] = document.querySelectorAll(
      "amp-img"
    );

    expect(firstAttachment).toHaveAttribute("src", podcasts[first].image);
    expect(secondAttachment).toHaveAttribute("src", podcasts[second].image);
  });
});
