import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { AmpImg, AmpUserNotification } from "./index";

const imgProps = {
  alt: "This is so alt",
  src: "useTheSource",
  width: 1,
  height: 1,
  layout: "no",
};

const notificationProps = {
  layout: "somedisplay",
  id: "justasillynotification",
  className: "sillyclassname",
  buttontext: "More cookies?",
  buttonClassName: "wantcookies",
};

describe("AmpImg", () => {
  it("renders with the role of an <img/>", () => {
    render(<AmpImg {...imgProps} />);

    const ampImg = screen.getByRole("img");

    expect(ampImg).toBeInTheDocument();
    expect(ampImg).toHaveAttribute("alt", "This is so alt");
    expect(ampImg).toHaveAttribute("src", "useTheSource");
    expect(ampImg).toHaveAttribute("width", "1");
    expect(ampImg).toHaveAttribute("height", "1");
    expect(ampImg).toHaveAttribute("layout", "no");
  });
});

describe("AmpUserNotification", () => {
  it("renders AmpUserNotification with default values", () => {
    render(<AmpUserNotification />);

    const container = document.querySelector("#amp-user-notification1");

    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute("layout", "nodisplay");
    expect(container).toHaveAttribute("id", "amp-user-notification1");
    // BEWARE: Renderer doesn't recognize classNames as classes on amp components
    expect(container).toHaveAttribute("className", "");
  });

  it("renders AmpUserNotification values from props", () => {
    render(<AmpUserNotification {...notificationProps} />);

    const container = document.querySelector("#justasillynotification");

    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute("layout", "somedisplay");
    expect(container).toHaveAttribute("id", "justasillynotification");
    // BEWARE: Renderer doesn't recognize classNames as classes on amp components
    expect(container).toHaveAttribute("className", "sillyclassname");
  });

  it("renders AmpUserNotification button with default values", () => {
    render(<AmpUserNotification />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("class", "");
  });

  it("renders AmpUserNotification button with custom values", () => {
    render(<AmpUserNotification {...notificationProps} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("wantcookies");
    expect(button).toHaveTextContent("More cookies?");
  });
});
