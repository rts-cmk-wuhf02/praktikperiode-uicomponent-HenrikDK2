/** @jsx jsx */
import React, { useContext, Children } from "react";
import { css, jsx } from "@emotion/core";
import contentfulContext from "../../context/contentful.context";
import TravelCard from "../molecules/TravelCard";
import LeisureCard from "../molecules/LeisureCard";
import PerkCard from "../molecules/PerkCard";
import BigNewsCard from "../molecules/BigNewsCard";
import LatestNews from "../molecules/LatestNews";
import LatestNewsCard from "../molecules/LatestNewsCard";
import CollectionCard from "../molecules/CollectionCard";

const Index = () => {
  const [data] = useContext(contentfulContext);
  const travelData =
    data && data.filter((e) => e.sys.contentType.sys.id === "travels");
  const leisureData =
    data && data.filter((e) => e.sys.contentType.sys.id === "leisure");
  const perkData =
    data && data.filter((e) => e.sys.contentType.sys.id === "ads");
  const theNewYorkTimesData =
    data && data.filter((e) => e.sys.contentType.sys.id === "theNewYorkTimes");
  const latestNewsData =
    data && data.filter((e) => e.sys.contentType.sys.id === "latestNews");
  const collectionsData =
    data && data.filter((e) => e.sys.contentType.sys.id === "collections");

  const sectionStyle = css`
    background-color: #eaeaea;
    max-width: 1280px;
    box-sizing: border-box;
    padding: 43px 55px 29px;
    display: flex;
  `;
  const mainStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Gotham";
    font-weight: bold;
  `;

  const perkSection = css`
    padding: 0px 55px;
    & article:last-child {
      margin-right: 0;
    }
  `;

  const gridSection = css`
    display: grid;
    grid-template-columns: repeat(3, 372px);
    grid-column-gap: 27px;
    grid-row-gap: 25px;
    padding: 21px 55px 29px;
    grid-template-rows: 373px 475px repeat(8, 175px);
  `;

  const altNews = css`
    padding: 26px;
    background-color: #fff;
    display: flex;
    margin: 0;
    align-items: center;
    grid-row: 3/4;
    border-radius: 10px;
    grid-column: 1/3;
    & li {
      padding: 0;
    }
  `;

  return (
    <main css={mainStyle}>
      <section css={sectionStyle}>
        <TravelCard data={travelData} />
        {leisureData &&
          leisureData.map((data, i) => (
            <LeisureCard key={data + i} data={data} />
          ))}
      </section>
      <section css={[sectionStyle, perkSection]}>
        {perkData &&
          perkData.map((data, i) => <PerkCard data={data} key={data + i} />)}
      </section>
      <section css={[sectionStyle, gridSection]}>
        {collectionsData &&
          collectionsData.map((data, i) => {
            return <CollectionCard key={data + i} data={data} />;
          })}
        {theNewYorkTimesData &&
          theNewYorkTimesData.map((data, i) => {
            if (data.fields.big === true) {
              return <BigNewsCard data={data} key={data + i} />;
            }
            if (i > 1) return;
          })}
        <LatestNews title="latest news">
          {latestNewsData &&
            [...latestNewsData].slice(6).map((data, i) => {
              if (data.fields.image) {
                return <LatestNewsCard key={data + i} data={data} />;
              }
            })}
        </LatestNews>
        <ul css={altNews}>
          {latestNewsData &&
            [...latestNewsData].splice(0, 6).map((data, i) => {
              if (data.fields.image) {
                return <LatestNewsCard key={data + i} data={data} />;
              }
            })}
        </ul>
        {latestNewsData &&
          [...latestNewsData].map((data, i) => {
            if (data.fields.backgroundImage) {
              return (
                <LatestNewsCard key={data + i} article={true} data={data} />
              );
            }
          })}
      </section>
    </main>
  );
};

export default Index;
