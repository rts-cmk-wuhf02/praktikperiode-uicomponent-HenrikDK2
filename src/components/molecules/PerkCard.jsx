/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const PerkCard = ({ data, className, small }) => {
  const articleStyle = css`
    width: ${small ? "169px" : "270px"};
    border-radius: 10px;
    padding: 34px;
    box-sizing: border-box;
    height: ${small ? "171px" : "272px"};
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-right: ${small ? 0 : "30px"};
    background-color: ${data && data.fields.backgroundColor};
    & h4 {
      font-size: 1.125rem;
      margin: ${small ? "0 auto" : " auto 0 10px 0"};
    }

    & p {
      display: ${small ? "none" : "block"};
      font-weight: 600;
      margin: 0;

      line-height: 20px;
    }
    ${className};
  `;

  const icon = css`
    width: 62px;
    height: auto;
    margin: ${small ? "0 auto 22px auto" : "0 auto"};
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
