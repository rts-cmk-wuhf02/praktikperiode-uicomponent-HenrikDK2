/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "../atoms/Img";

const ImageContainer = ({ src, alt, className }) => {
  const figureStyle = css`
    width: 50px;
    height: auto;
    margin: 0;
    ${className}
  `;

  return (
    <figure css={figureStyle}>
      <Img src={src} alt={alt} />
    </figure>
  );
};

export default ImageContainer;
