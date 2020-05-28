/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";

const swiperButton = ({ active, onClick }) => {
  const buttonStyle = css`
    background-color: ${active == true ? "#fff" : "#95989a"};
    border-radius: 50px;
    border: none;
    height: 2px;
    cursor: pointer;
    margin: 0 2px;
    width: 15px;
  `;

  return <button onClick={onClick} css={buttonStyle}></button>;
};

export default swiperButton;
