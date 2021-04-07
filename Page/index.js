import React from "react";
import MDX from "@mdx-js/runtime";
import css from "styled-jsx/css";
import Layout from "../Layout";
// TODO: REMOVE THIS 👇 AS SOON AS THIS IS FIXED https://github.com/vercel/styled-jsx/issues/695
import _JSXStyle from "styled-jsx/style";
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}
// TODO: REMOVE THIS 👆 AS SOON AS THIS IS FIXED https://github.com/vercel/styled-jsx/issues/695

const Page = ({
  audiosnippet,
  configuration,
  content,
  date,
  headline,
  image,
  poster,
  slug,
  subline,
  subtitle,
  title,
  video,
}) => {
  // TODO: use this 👇
  // const isLocal = process.env.NODE_ENV === "development";

  return (
    <>
      <Layout configuration={configuration}>
        <style jsx global>
          {`
            p {
              font-size: 12px;
            }
            .episodedesc {
              overflow: scroll;
              text-align: justify;
            }

            .episodedesc ::-webkit-scrollbar {
              display: none;
            }

            .episodedesc {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}
        </style>
        <amp-story-page id="page">
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
          <amp-story-grid-layer template="vertical">
            <div
              className="episodedesc"
              animate-in="fly-in-bottom"
              animate-in-duration="0.9s"
            >
              <MDX>{content}</MDX>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
      </Layout>
    </>
  );
};

export const PageDocument = (props) => <Page {...props} />;
