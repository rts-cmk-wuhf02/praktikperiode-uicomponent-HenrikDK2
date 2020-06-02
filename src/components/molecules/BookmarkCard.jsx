/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";
import bookmarkSvg from "../../images/bookmark.svg";

const BookmarkCard = ({ data }) => {
  const articleStyle = css`
    width: 372px;
    height: 371px;
    background-color: #fff;
    position: relative;
    grid-row: 7 /8;
    border-radius: 10px;
    grid-column: 1;
    & h4 {
      color: ${data.fields.titleColor};
      position: absolute;
      right: 37px;
      font-size: 0.875rem;
      text-transform: uppercase;
      bottom: 0;
    }
  `;

  const bookmark = css`
    width: 10px;
    height: auto;
    right: 11px;
    top: 0;
    position: absolute;
  `;

  const bgImage = css`
    width: 371px;
    height: 372px;
  `;

  const heading = css`
    position: absolute;
    left: 50%;
    margin: 0;
    top: 21px;
    transform: translateX(-50%);
    box-sizing: border-box;
  `;

  return (
    <article css={articleStyle}>
      <h2 css={heading}>{data && data.fields.title}</h2>
      <ImageContainer className={bookmark} src={bookmarkSvg} />
      <ImageContainer
        className={bgImage}
        src={data && data.fields.image.fields.file.url}
      />
      <h4>{data && data.fields.category}</h4>
    </article>
  );
};

export default BookmarkCard;
