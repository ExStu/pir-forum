import type { FC } from "react";

import NewsCard from "@Components/NewsCard";
import { SectionTitle } from "@Components/SectionTitle";
import Container from "@Components/UI/Container";

import newsData from "@data/home/news";

import { SNews, SNewsList } from "./styled";

const News: FC = () => {
  const temp = 1;

  return (
    <SNews>
      <Container>
        <SectionTitle>НОВОСТИ</SectionTitle>
        <SNewsList>
          {newsData.map((item) => (
            <NewsCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </SNewsList>
      </Container>
    </SNews>
  );
};

export default News;
