import React from "react";
import css from "styled-jsx/css";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children, configuration }) => {
  const {
    attachmentColor,
    backgroundColor,
    linkColor,
    posterPortrait,
    publisher,
    publisherLogo,
    storyTitle,
    textColor,
    podcasts,
    hamburger,
  } = configuration;
  return (
    <>
      <style jsx global>
        {`
          amp-sidebar {
            background-color: ${backgroundColor};
          }
          amp-story {
            font-family: "Oswald", sans-serif;
            color: ${textColor};
          }
          amp-story-page {
            background-color: ${backgroundColor};
          }
          amp-story-page-attachment {
            color: ${attachmentColor};
          }
          amp-story-grid-layer.bottom {
            align-content: end;
          }
          amp-story-grid-layer.noedge {
            padding: 0px;
          }
          amp-story-grid-layer.center-text {
            align-content: center;
          }
          a {
            color: ${linkColor};
          }
          h1 {
            font-weight: bold;
            font-size: 2.875em;
            font-weight: normal;
            line-height: 1.174;
          }
          p {
            font-weight: normal;
            color: ${textColor};
          }
          q {
            font-weight: 300;
            font-size: 1.1em;
          }
          .abo {
            text-align: center;
          }
          .attachment {
            color: ${backgroundColor};
          }
          .wrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
          }
          .banner-text {
            text-align: center;
            background-color: ${backgroundColor};
            line-height: 2em;
          }
          .imgcontainer {
            height: 20vw;
            width: 20vw;
            margin: 0 auto;
          }
          .aligner {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .episodetitle {
            text-align: center;
          }
          .episodedesc {
            background-color: ${backgroundColor};
            padding: 5vw;
            margin-bottom: 10vh;
            opacity: 0.85;
          }
          .sidebarfont {
            font-size: 2em;
          }
          .capitalize {
            text-transform: capitalize;
          }
        `}
      </style>
      <amp-story
        standalone=""
        title={`${storyTitle}`}
        publisher={`${publisher}`}
        publisher-logo-src={`/${publisherLogo}`}
        poster-portrait-src={`/${posterPortrait}`}
      >
        <Sidebar hamburger={hamburger} podcasts={podcasts} />
        {children}
      </amp-story>
    </>
  );
};

export default Layout;
