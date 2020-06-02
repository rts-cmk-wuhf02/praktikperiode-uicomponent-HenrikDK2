/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import timesLogo from "../../images/timesLogo.svg";
import heart from "../../images/heart.svg";
import ImageContainer from "./ImageContainer";
import SwiperButton from "../atoms/SwiperButton";

const NewYorkTimesCard = ({ className, data }) => {
  const imageExist = Boolean(data.fields.images);
  const [currentImage, setCurrentImage] = useState(imageExist ? data.fields.images[0].fields.file.url : null);
  const isBig = data.fields.big;
  const articleStyle = css`
  background: #fff;
    ${
      imageExist &&
      css`
        background: url(${currentImage});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      `
    }
    color:${isBig ? "#fff" : "#000"};
    padding: ${isBig ? "31px 34px 36px 31px" : "31px 34px 51px 31px"};
    border-radius: 10px;
    display: flex;
    height: 471px;
    box-sizing: border-box;
    ${
      isBig &&
      css`
        grid-column: 1/3;
        grid-row: 2/3;
      `
    }
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
      font-weight:  ${isBig ? 300 : 600};
      margin-top:  ${!isBig && "45px"};
      font-size: 1rem;
      line-height: 25px;
    }

    & h6 {
      letter-spacing: 0.2em;
    }

    & figure {
      width: ${isBig ? "23px" : "44px"};
      margin-right: 11px;
      height: auto;
    }

    & figure:last-child {
      margin-left: auto;
    }
    ${className}
  `;

  const buttonStyle = css`
    width: 141px;
    background: transparent;
    border: ${imageExist ? "1px solid #ebebeb" : "1px solid #000"};
    margin-top: auto;
    color: ${imageExist ? "#358ed7" : "#000"};
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    border-radius: 50px;
    padding: 0.875rem 0;
    &:hover {
      transform: scale(1.1);
    }
  `;

  const minSwiperCss = css`
    margin: 0 auto;
  `;
  return (
    <article css={articleStyle}>
      <div>
        <ImageContainer src={timesLogo} />
        <h6>THE NEW YORK TIMES</h6>
        {isBig && <ImageContainer src={heart} />}
      </div>
      {isBig && <h2>{data && data.fields.title}</h2>}
      <p>{data && data.fields.desc}</p>
      {!isBig && <button css={buttonStyle}>Read more</button>}
      <div css={minSwiperCss}>
        {isBig === true &&
          data.fields.images.map((data, i) => {
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

export default NewYorkTimesCard;
