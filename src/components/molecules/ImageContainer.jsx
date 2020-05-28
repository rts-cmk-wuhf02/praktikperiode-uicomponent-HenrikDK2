/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "../atoms/Img";

const ImageContainer = ({ src, alt, className, children, onClick }) => {
  const figureStyle = css`
    width: 50px;
    height: auto;
    margin: 0;
    ${className}
  `;

  return (
    <>
      <figure css={figureStyle} onClick={onClick}>
        <Img src={src} alt={alt} />
      </figure>
      {children}
    </>
  );
};

export default ImageContainer;
