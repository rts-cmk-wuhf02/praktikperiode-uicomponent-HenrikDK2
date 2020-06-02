/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const LatestNewsCard = ({ data, className, article, digest, i }) => {
  let desc = data.fields.desc;
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

  const Article = css`
    ${data.fields.backgroundImage &&
    css`
      background: url(${data.fields.backgroundImage.fields.file.url});
    `}
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
      color: #fff;
      font-weight: 600;
      margin: 0;
    }

    ${className}
  `;

  const digestStyle = css`
    border-radius: 10px;
    padding: 0 28px;
    text-align: center;
    & h4 {
      text-transform: capitalize;
      font-size: 1.125rem;
      margin: 11px 0;
      color: #303336;
      font-weight: 600;
    }
    & h5 {
      width: 50px;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: #fff;
      height: 50px;
      border-radius: 50%;
      display: flex;
      margin: 10px auto;
      background: ${data.fields.titleColor};
    }
    & div::after {
      content: "";
      width: 100%;
      height: 1px;
      background: #7b8591;
      opacity: 0.4;
      margin: 30px 0;
      display: block;
    }
    & p {
      font-size: 1rem;
      line-height: 20px;
      color: #7b8591;
      font-weight: 600;
      margin: 0;
    }

    ${className}
  `;
  if (article && article === true) {
    desc = desc.substring(0, 128);

    return (
      <article css={Article}>
        <div>
          <h4>{data.fields.title}</h4>
          <p>{desc}</p>
        </div>
      </article>
    );
  } else if (digest === true) {
    desc = desc.substring(0, 90);
    return (
      <li css={digestStyle}>
        <div>
          <h5>{i}</h5>
          <h4>{data.fields.title}</h4>
          <p>{desc}</p>
        </div>
      </li>
    );
  } else {
    desc = desc.substring(0, 64);
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
