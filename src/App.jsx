import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Pages from "./Pages.jsx";
import { BrowserRouter } from "react-router-dom";
import contentfulContext from "./context/contentful.context.jsx";
import preloadContext from "./context/preload.context.jsx";
import Global from "./Global.jsx";
require("./images/loader.svg");
const contentful = require("contentful");
const client = contentful.createClient({
  space: "px4ekxgk60u8",
  accessToken: "CHr2wOJan5ubejwq9cpH9bGZslWkoo9_2lJ-LB2uyvc",
});

const App = () => {
  const contentfulHook = useState(null);
  const preloadHook = useState(true);

  //Remove preloader when content is loaded
  useEffect(
    (e) => {
      (async () => {
        const data = await client.getEntries().then((res) => res.items);
        const cM = {};
        data &&
          ["travels", "leisure", "ads", "theNewYorkTimes", "latestNews", "collections", "bookmark"].forEach(
            (e) => (cM[e] = data.filter((e2) => e2.sys.contentType.sys.id === e))
          );
        const digestData = data && cM["latestNews"].filter((e) => e.fields.digest === true);
        const bigPerkdata = data && cM["ads"].filter((e) => e.fields.small === undefined);
        const smallPerkData = data && cM["ads"].filter((e) => e.fields.small === true);
        contentfulHook[1]({ ...cM, digest: digestData, bigPerk: bigPerkdata, smallPerk: smallPerkData });
      })();
      if (preloadHook[0] == false) {
        setTimeout(() => {
          const preloader = document.getElementById("preloader");
          preloader.style.opacity = 0;
          preloader.addEventListener("transitionend", (e) => {
            preloader.remove();
          });
        }, 0);
      }
    },
    [preloadHook[0]]
  );

  return (
    <preloadContext.Provider value={preloadHook}>
      <contentfulContext.Provider value={contentfulHook}>
        <BrowserRouter>
          <Global />
          <Pages />
        </BrowserRouter>
      </contentfulContext.Provider>
    </preloadContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
