/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const LinkRouter = ({ to, className, children }) => {
  const linkStyle = css`
    text-decoration: none;
    color: #000;
    ${className}
  `;
  return (
    <Link css={linkStyle} to={to}>
      {children}
    </Link>
  );
};

export default LinkRouter;
