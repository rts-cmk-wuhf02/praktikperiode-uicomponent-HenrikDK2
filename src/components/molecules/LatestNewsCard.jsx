/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const LatestNewsCard = ({ data, className, article }) => {
  let desc = data.fields.desc;

  if (article && article === true) {
    desc = desc.substring(0, 128);
    const Article = css`
      background: url(${data.fields.backgroundImage.fields.file.url});
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
      padding: 0 28px;
      & h4 {
        font-size: 0.6875rem;
        margin: 26px 0 28px 0;
        color: ${data.fields.titleColor};
      }
      & p {
        font-size: 1rem;
        color: #7b8591;
        color: #fff;
        font-weight: 600;
        margin: 0;
      }

      ${className}
    `;
    return (
      <article css={Article}>
        <div>
          <h4>{data.fields.title}</h4>
          <p>{desc}</p>
        </div>
      </article>
    );
  } else {
    desc = desc.substring(0, 64);
    const Li = css`
      display: flex;
      background-color: #fff;
      padding: 0 26px 23px 26px;
      & h4 {
        font-size: 0.6875rem;
        margin: 20px 0 13px 0;
        color: ${data.fields.titleColor};
      }
      & p {
        font-size: 1rem;
        color: #7b8591;
        font-weight: 600;
        margin: 0;
      }
      & figure {
        height: 122px;
        flex-shrink: 0;
        margin-right: 23px;
        width: 127px;
      }

      ${className}
    `;
    return (
      <li css={Li}>
        <ImageContainer src={data.fields.image.fields.file.url} />
        <div>
          <h4>{data.fields.title}</h4>
          <p>{desc}</p>
        </div>
      </li>
    );
  }
};

export default LatestNewsCard;
