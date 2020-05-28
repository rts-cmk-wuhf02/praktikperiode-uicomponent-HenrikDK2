/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import timesLogo from "../../images/timesLogo.svg";
import heart from "../../images/heart.svg";
import ImageContainer from "./ImageContainer";
import SwiperButton from "../atoms/SwiperButton";

const BigNewsCard = ({ className, data }) => {
  const [currentImage, setCurrentImage] = useState(
    data.fields.backgroundImages[0].fields.file.url
  );

  const articleStyle = css`
    background: url(${currentImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 31px 34px 36px 31px;
    color: #fff;
    border-radius: 10px;
    display: flex;
    grid-column: 1/3;
    grid-row: 2/3;
    flex-direction: column;
    & div {
      display: flex;
      align-items: center;
    }

    & h2 {
      font-size: 3rem;
      max-width: 450px;
      margin: auto 0 0 0;
    }

    p {
      max-width: 450px;
      font-weight: 300;
      font-size: 1rem;
      line-height: 25px;
    }

    & h6 {
      letter-spacing: 0.2em;
    }

    & figure {
      width: 23px;
      margin-right: 11px;
      height: auto;
    }

    & figure:last-child {
      margin-left: auto;
    }
    ${className}
  `;

  const minSwiperCss = css`
    margin: 0 auto;
  `;

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <article css={articleStyle}>
      <div>
        <ImageContainer src={timesLogo} />
        <h6>THE NEW YORK TIMES</h6>
        <ImageContainer src={heart} />
      </div>
      <h2>{data && data.fields.title}</h2>
      <p>{data && data.fields.desc}</p>
      <div css={minSwiperCss}>
        {data.fields.backgroundImages.map((data, i) => {
          if (currentImage === data.fields.file.url) {
            return <SwiperButton key={data + i} active={true} />;
          } else {
            return <SwiperButton active={false} key={data + i} />;
          }
        })}
      </div>
    </article>
  );
};

export default BigNewsCard;
