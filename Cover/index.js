import React from "react";
import css from "styled-jsx/css";
const Cover = ({ coverImage, coverVideo }) => {
  return (
    <amp-story-page id="cover">
      <amp-story-grid-layer template="fill">
        <amp-video
          autoplay=""
          loop=""
          width="720"
          height="1280"
          poster={`/${coverImage}`}
          layout="responsive"
        >
          <source src={`/${coverVideo}`} type="video/mp4" />
        </amp-video>
      </amp-story-grid-layer>
    </amp-story-page>
  );
};

export default Cover;
