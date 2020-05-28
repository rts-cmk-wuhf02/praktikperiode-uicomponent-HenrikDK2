/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const PerkCard = ({ data, className }) => {
  const articleStyle = css`
    width: 270px;
    border-radius: 10px;
    padding: 34px;
    box-sizing: border-box;
    height: 272px;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    background-color: ${data && data.fields.backgroundColor};
    & h4 {
      font-size: 1.125rem;
      margin: auto 0 10px 0;
    }

    & p {
      font-weight: 600;
      margin: 0;

      line-height: 20px;
    }
    ${className};
  `;

  const icon = css`
    width: 62px;
    height: auto;
    margin-left: auto;
  `;

  return (
    <article css={articleStyle}>
      <ImageContainer
        className={icon}
        src={data && data.fields.image.fields.file.url}
      />
      <h4>{data && data.fields.title}</h4>
      <p>{data && data.fields.desc}</p>
    </article>
  );
};

export default PerkCard;
