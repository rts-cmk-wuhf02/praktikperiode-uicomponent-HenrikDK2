/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const collectionCard = ({ data, className }) => {
  const articleStyle = css`
    grid-row: 1/1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    align-items: center;
    font-size: 1.125rem;
    & h2 {
      text-transform: uppercase;
      position: absolute;
      top: 10px;
      color: #fff;
      font-size: 1.125rem;

      left: 28px;
    }
    & h4 {
      margin: 0 0 10px 0;
    }
    & p {
      margin: 0;
      color: #7b8591;
      font-size: 0.875rem;
      font-weight: 600;
      text-align: center;
    }
    & div {
      margin: auto 0 37px;
    }

    ${className}
  `;
  const imgBackground = css`
    height: 242px;
    width: 100%;
    & img {
      border-radius: 10px 10px 0 0;
    }
  `;
  const authorImg = css`
    height: 60px;
    width: 60px;
    position: absolute;
    top: 212px;
    left: 30px;
  `;

  return (
    <article css={articleStyle}>
      <h2>Collection: #{data.fields.collectionId}</h2>
      <ImageContainer
        className={imgBackground}
        src={data.fields.image.fields.file.url}
      >
        <ImageContainer
          className={authorImg}
          src={data.fields.userImage.fields.file.url}
        />
      </ImageContainer>
      <div>
        <h4>{data.fields.title}</h4>
        <p>By: {data.fields.author}</p>
      </div>
    </article>
  );
};

export default collectionCard;
