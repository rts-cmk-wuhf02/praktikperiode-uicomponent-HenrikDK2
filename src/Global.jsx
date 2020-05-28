/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx, Global as GlobalElm } from "@emotion/core";
import GothamBold from "./fonts/GothamBold.woff";
import GothamBook from "./fonts/GothamBook.woff";
import GothamMedium from "./fonts/GothamMedium.woff";
import GothamLight from "./fonts/GothamThin.woff";

const Global = ({}) => {
  //GlobalStyle
  const globalStyle = css`
    * {
      user-select: none;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamMedium}) format("woff");
      font-weight: medium;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamBook}) format("woff");
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamBold}) format("woff");
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "Gotham";
      src: url(${GothamLight}) format("woff");
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
