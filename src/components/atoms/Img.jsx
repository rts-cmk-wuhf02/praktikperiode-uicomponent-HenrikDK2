/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Img = ({ src, alt }) => {
  const imgStyle = css`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  `;

  return (
    <img
      src={src}
      css={imgStyle}
      alt={alt}
      onDragStart={(e) => e.preventDefault()}
    />
  );
};

export default Img;
