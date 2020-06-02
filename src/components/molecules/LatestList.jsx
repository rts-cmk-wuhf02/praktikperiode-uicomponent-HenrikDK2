/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Ul from "../atoms/Ul";

const LatestList = ({ children, title, hideMore, className }) => {
  const ulStyle = css`
    box-sizing: border-box;
    padding: 28px 0 0 0;

    & h2 {
      margin: 0;
    }

    & img {
      border-radius: 10px;
    }
  `;

  const listHeading = css`
    font-size: 1.125rem;
    color: #fff;
    background-color: #3f51b5;
    padding: 20px 0 !important;
    font-weight: bold;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    border-radius: 10px 10px 0 0;
  `;

  const moreNews = css`
    text-decoration: none;
    color: #7b8591;
    display: block;
    text-align: center;
    padding: 21px 0;
    border-top: solid 1px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 10px 10px;
  `;

  const container = css`
    background-color: #fff;
    grid-column: 3/4;
    grid-row: 2/5;
    border-radius: 10px;
    ${className}
  `;

  return (
    <div css={container}>
      <h2 css={listHeading}>{title}</h2>
      <Ul className={ulStyle}>{children}</Ul>
      {hideMore ? null : (
        <a css={moreNews} href="/">
          More News
        </a>
      )}
    </div>
  );
};

export default LatestList;
