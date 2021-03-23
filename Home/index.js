import React from "react";
import Layout from "../Layout";
import Episode from "../Episode";
import Cover from "../Cover";

export const Home = ({ posts, configuration }) => {
  // TODO: use this 👇
  // const isLocal = process.env.NODE_ENV === "development";
  const { coverImage, coverVideo, nameMark, podcasts } = configuration;

  return (
    <Layout configuration={configuration}>
      <Cover coverImage={coverImage} coverVideo={coverVideo} />
      {posts &&
        posts.map((post) => (
          <Episode key= {post.guid} {...post} nameMark={nameMark} podcasts={podcasts} />
        ))}
    </Layout>
  );
};

export const HomeDocument = (props) => <Home {...props} />;
