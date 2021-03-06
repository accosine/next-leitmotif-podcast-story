import React from "react";
import MDX from "@mdx-js/runtime";
import Attachment from "../Attachment";

const Episode = ({
  audiosnippet,
  bitlength,
  date,
  draft,
  duration,
  episode,
  guid,
  image,
  number,
  poster,
  subtitle,
  title,
  video,
  content,
  nameMark,
  podcasts,
}) => {
  return (
    <>
      <amp-story-page id={`page${number}`} background-audio={audiosnippet}>
        {!!video && (
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay=""
              loop=""
              width="720"
              height="1280"
              poster={`/${poster}`}
              layout="responsive"
            >
              <source src={`/${video}`} type="video/mp4" />
            </amp-video>
          </amp-story-grid-layer>
        )}
        {!!nameMark && !!title && (
          <amp-story-grid-layer template="vertical">
            <div
              className="episodetitle content"
              animate-in="fly-in-top"
              animate-in-duration=".5s"
            >
              <h1>{title}</h1>
            </div>
            <div
              className="imgcontainer content"
              animate-in="twirl-in"
              animate-in-duration="1s"
            >
              <amp-img
                src={`/${nameMark}`}
                width="600"
                height="600"
                layout="responsive"
              ></amp-img>
            </div>
          </amp-story-grid-layer>
        )}
        {!!content && (
          <amp-story-grid-layer template="vertical" className="bottom padbutt">
            <div
              className="episodedesc"
              animate-in="fly-in-bottom"
              animate-in-duration="0.9s"
            >
              <MDX>{content}</MDX>
            </div>
          </amp-story-grid-layer>
        )}
        <Attachment podcasts={podcasts} />
      </amp-story-page>
    </>
  );
};

export default Episode;
