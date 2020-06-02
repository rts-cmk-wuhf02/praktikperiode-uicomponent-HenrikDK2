/** @jsx jsx */
import React, { useContext, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import contentfulContext from "../../context/contentful.context";
import preloadContext from "../../context/preload.context";
import TravelCard from "../molecules/TravelCard";
import LeisureCard from "../molecules/LeisureCard";
import PerkCard from "../molecules/PerkCard";
import NewYorkTimesCard from "../molecules/NewYorkTimesCard";
import LatestList from "../molecules/LatestList";
import LatestNewsCard from "../molecules/LatestNewsCard";
import BookmarkCard from "../molecules/BookmarkCard";
import CollectionCard from "../molecules/CollectionCard";

const Index = () => {
  const [data] = useContext(contentfulContext);
  const [preload, setPreload] = useContext(preloadContext);
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
    grid-auto-flow: dense;
    padding: 21px 55px 29px;
    grid-template-rows: 373px 475px repeat(7, 175px);
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

  useEffect(() => {
    data && setPreload(false);
  }, [data]);

  return (
    <main css={mainStyle}>
      <section css={sectionStyle}>
        <TravelCard data={data && data["travels"]} />
        {data && data["leisure"].map((data, i) => <LeisureCard key={data + i} data={data} />)}
      </section>
      <section css={[sectionStyle, perkSection]}>
        {data && data["bigPerk"].map((data, i) => <PerkCard data={data} key={data + i} />)}
      </section>
      <section css={[sectionStyle, gridSection]}>
        {data &&
          data["collections"].map((data, i) => {
            return <CollectionCard key={data + i} data={data} />;
          })}
        {data &&
          data["theNewYorkTimes"].map((data, i) => {
            if (data.fields.big === true) {
              return <NewYorkTimesCard data={data} key={data + i} />;
            }
          })}
        <section
          css={css`
            display: flex;
            flex-direction: column;
            grid-row: 5/10;
            justify-content: space-between;
          `}
        >
          {data &&
            data["theNewYorkTimes"].map((data, i) => {
              if (data.fields.big === false) {
                return <NewYorkTimesCard data={data} key={data + i} />;
              }
            })}
        </section>
        <LatestList title="latest news">
          {data &&
            [...data["latestNews"]].slice(6).map((data, i) => {
              if (data.fields.image) {
                return <LatestNewsCard key={data + i} data={data} />;
              }
            })}
        </LatestList>
        <ul css={altNews}>
          {data &&
            [...data["latestNews"]].splice(0, 6).map((data, i) => {
              if (data.fields.image) {
                return <LatestNewsCard key={data + i} data={data} />;
              }
            })}
        </ul>
        {data &&
          [...data["latestNews"]].map((data, i) => {
            if (data.fields.backgroundImage) {
              return <LatestNewsCard key={data + i} article={true} data={data} />;
            }
          })}

        {data &&
          data["bookmark"].map((data, i) => {
            return <BookmarkCard key={data + i} data={data} />;
          })}
        <section
          css={css`
            grid-row: 9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            grid-column: 1;
          `}
        >
          {data && data["smallPerk"].map((data, i) => <PerkCard data={data} small={true} key={data + i} />)}
        </section>
        <LatestList
          title="NEWS DIGEST"
          className={css`
            grid-column: 2;
            grid-row: 5/10;

            & h2 {
              background-color: #3ca773;
            }
          `}
          hideMore={true}
        >
          {data &&
            data["digest"].map((data, i) => {
              return <LatestNewsCard key={data + i} digest={true} data={data} i={i} />;
            })}
        </LatestList>
      </section>
    </main>
  );
};

export default Index;
