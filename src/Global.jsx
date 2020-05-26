/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx, Global as GlobalElm } from "@emotion/core";
import GothamBold from "./fonts/GothamBold.otf";
import GothamBook from "./fonts/GothamBook.otf";
import GothamMedium from "./fonts/GothamMedium.ttf";
import GothamLight from "./fonts/GothamThin.ttf";

const Global = ({}) => {
  //GlobalStyle
  const globalStyle = css`
    * {
      user-select: none;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamMedium});
      font-weight: medium;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamBook});
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamBold});
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamLight});
      font-weight: lighter;
      font-style: normal;
    }

    html {
      scroll-behavior: smooth;
      overflow-y: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    html::-webkit-scrollbar,
    body::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
      width: 0;
      height: 0;
      background: transparent;
    }

    body {
      margin: 0;
      overflow: hidden;
      padding: 0;
      font-family: "Roboto", sans-serif;
    }
  `;
  return <GlobalElm styles={globalStyle} />;
};

export default Global;
