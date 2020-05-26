/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import contentfulContext from "../../context/contentful.context";
import TravelCard from "../molecules/TravelCard";
import LeisureCard from "../molecules/LeisureCard";

const Index = () => {
  const [data] = useContext(contentfulContext);
  const travelData =
    data && data.filter((e) => e.sys.contentType.sys.id === "travels");
  const leisureData =
    data && data.filter((e) => e.sys.contentType.sys.id === "leisure");

  const sectionStyle = css`
    background-color: #eaeaea;
    max-width: 1280px;
    box-sizing: border-box;
    padding: 43px 55px;
    display: flex;
    font-family: "Gotham";
    font-weight: bold;
    place-content: center;
  `;
  const mainStyle = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <main css={mainStyle}>
      <section css={sectionStyle}>
        <TravelCard data={travelData} />
        <LeisureCard data={leisureData} />
      </section>
    </main>
  );
};

export default Index;
