/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const LeisureCard = ({ data }) => {
  const bigImage = css`
    width: 293px;
    height: 375px;
  `;

  const container = css`
    width: 52%;
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 0 0 0 38px;
    & p {
      font-weight: 600;
      color: #7b8591;
    }
    & h2 {
      font-size: 45px;
      margin: 0;
    }
    & button {
      background: #005aee;
      color: #fff;
      border: none;
      letter-spacing: 0.2em;
      cursor: pointer;
      font-size: 11px;
      font-weight: bold;
      padding: 10px 0;
      border-radius: 20px;
      margin-left: auto;
      width: 99px;
    }
  `;

  const leisureContainer = css`
    background: #fff;
    width: 771px;
    border-radius: 10px;
    margin-left: 33px;
    align-items: center;
    box-sizing: border-box;
    padding: 49px 37px;
    height: 471px;
    display: flex;
  `;

  const smallImageContainer = css`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    & figure {
      width: 99px;
      height: 104px;
    }
  `;

  console.log(data);

  return (
    <article css={leisureContainer}>
      <ImageContainer
        className={bigImage}
        src={data && data[0].fields.bigImage.fields.file.url}
      />
      <div css={container}>
        <button>Leisure</button>
        <h2>{data && data[0].fields.title}</h2>
        <p>{data && data[0].fields.desc}</p>
        <div css={smallImageContainer}>
          {data &&
            data[0].fields.images.map((image, i) => (
              <ImageContainer key={image + i} src={image.fields.file.url} />
            ))}
        </div>
      </div>
    </article>
  );
};

export default LeisureCard;
