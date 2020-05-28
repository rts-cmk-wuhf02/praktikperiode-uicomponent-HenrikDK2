import React, { useState, useEffect, Suspense } from "react";
import { render } from "react-dom";
import Pages from "./Pages.jsx";
import { BrowserRouter } from "react-router-dom";
import contentfulContext from "./context/contentful.context.jsx";
import Global from "./Global.jsx";
require("./images/loader.svg");
const contentful = require("contentful");
const client = contentful.createClient({
  space: "px4ekxgk60u8",
  accessToken: "CHr2wOJan5ubejwq9cpH9bGZslWkoo9_2lJ-LB2uyvc",
});

const App = () => {
  const contentfulHook = useState(null);

  //Remove preloader when content is loaded
  useEffect((e) => {
    client.getEntries().then((res) => contentfulHook[1](res.items));

    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = 0;
      preloader.addEventListener("transitionend", (e) => {
        preloader.remove();
      });
    }, 0);
  }, []);
  return (
    <contentfulContext.Provider value={contentfulHook}>
      <BrowserRouter>
        <Global />
        <Pages />
      </BrowserRouter>
    </contentfulContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
