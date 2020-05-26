/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "../molecules/ImageContainer";

const travelCard = ({ data, className }) => {
  const travelCard = css`
    border-radius: 10px;
    width: 372px;
    height: 471px;
    background: #fff;

    & h5 {
      font-size: 11px;
      font-weight: bold;
      color: #33439b;
      margin-top: 30px;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
    & > figure {
      width: 100%;
      height: 236px;
    }
    & > div {
      padding: 0 30px;
    }
    & p {
      font-weight: 600;
      line-height: 22px;
      color: #7b8591;
    }
    ${className}
  `;

  return (
    <article css={travelCard}>
      <ImageContainer src={data && data[0].fields.image.fields.file.url} />
      <div>
        <h5>{data && data[0].sys.contentType.sys.id}</h5>
        <h2>{data && data[0].fields.title}</h2>
        <p>{data && data[0].fields.desc} </p>
      </div>
    </article>
  );
};

export default travelCard;
