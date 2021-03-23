import React from "react";
import { HomeDocument } from "../Home";
import { PageDocument } from "../Page";

const App = (props) => {
  const { isHomepage, isPage } = props;
  return (
    <>
      {isHomepage && <HomeDocument {...props} />}
      {isPage && <PageDocument {...props} />}
    </>
  );
};

export default App;
