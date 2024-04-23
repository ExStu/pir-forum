import type { FC } from "react";

import NewsCard from "@Components/NewsCard";
import Container from "@Components/UI/Container";

import newsData from "@data/home/news";

import { SNews, SNewsList, SNewsTitle } from "./styled";

const News: FC = () => {
  const temp = 1;

  return (
    <SNews>
      <Container>
        <SNewsTitle variant="extraH2">НОВОСТИ</SNewsTitle>
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
