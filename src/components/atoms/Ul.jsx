/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";

const Ul = ({ children, className }) => {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
        background: #fff;
        ${className}
      `}
    >
      {children}
    </ul>
  );
};

export default Ul;
