/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import ImageContainer from "./ImageContainer";

const LeisureCard = ({ data }) => {
  const [largeImage, setLargeImage] = useState(
    data.fields.bigImage.fields.file.url
  );
  const bigImage = css`
    width: 293px;
    flex-shrink: 0;
    height: 375px;
  `;

  const container = css`
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
      transition: all 0.2s;
      padding: 10px 0;
      border-radius: 20px;
      margin-left: auto;
      width: 99px;
    }

    & button:hover {
      transform: scale(1.2);
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
      transition: all 0.15s;
      width: 99px;
      cursor: pointer;
      height: 104px;
    }

    & figure:hover {
      transform: scale(1.05);
    }

    & img {
      border-radius: 10px;
    }
  `;

  return (
    <article css={leisureContainer}>
      <ImageContainer className={bigImage} src={largeImage} />
      <div css={container}>
        <button>Leisure</button>
        <h2>{data && data.fields.title}</h2>
        <p>{data && data.fields.desc}</p>
        <div css={smallImageContainer}>
          {data &&
            data.fields.images.map((image, i) => (
              <ImageContainer
                key={image + i}
                onClick={(e) => {
                  let oldSrc = largeImage;
                  setLargeImage(e.target.src);
                  e.target.src = oldSrc;
                }}
                src={image.fields.file.url}
              />
            ))}
        </div>
      </div>
    </article>
  );
};

export default LeisureCard;
