import React from "react";
import Layout from "../Layout";
import Episode from "../Episode";
import Cover from "../Cover";
// TODO: REMOVE THIS 👇 AS SOON AS THIS IS FIXED https://github.com/vercel/styled-jsx/issues/695
import _JSXStyle from "styled-jsx/style";
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}
// TODO: REMOVE THIS 👆 AS SOON AS THIS IS FIXED https://github.com/vercel/styled-jsx/issues/695

export const Home = ({ posts, configuration }) => {
  // TODO: use this 👇
  // const isLocal = process.env.NODE_ENV === "development";
  const {
    coverImage,
    coverVideo,
    nameMark,
    podcasts,
    ctaSubscribe,
    ctaDescribe,
    ctaInvite,
  } = configuration;

  return (
    <Layout configuration={configuration}>
      <Cover coverImage={coverImage} coverVideo={coverVideo} />
      {posts &&
        posts.map((post) => (
          <Episode
            key={post.guid}
            {...post}
            nameMark={nameMark}
            podcasts={podcasts}
            cta={{ ctaSubscribe, ctaDescribe, ctaInvite }}
          />
        ))}
    </Layout>
  );
};

export const HomeDocument = (props) => <Home {...props} />;
