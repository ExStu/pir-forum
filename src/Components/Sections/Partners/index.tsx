import type { FC } from "react";
import { useState } from "react";

import { SwiperSlide } from "swiper/react";

import Carousel from "@Components/Carousel";
import PartnerCard from "@Components/PartnerCard";
import { SectionTitle } from "@Components/SectionTitle";
import TitlePartnerCard from "@Components/TitlePartnerCard";
import Button from "@Components/UI/Button";
import Container from "@Components/UI/Container";

import { carouselPartners, partners, titlePartners } from "@data/home/partners";

import {
  SPartners,
  SPartnersCarouselItem,
  SPartnersCarouselWrap,
  SPartnersList,
  SPartnersShowMoreBtnWrap,
  SPartnersSubtitle,
  SPartnersTitledList,
} from "./styled";

const Partners: FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMoreToggle = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <SPartners>
      <Container>
        <SectionTitle>ПартнЁры 2023</SectionTitle>
        <SPartnersSubtitle variant="h4">ПРИ ПОДДЕРЖКЕ</SPartnersSubtitle>
        <SPartnersCarouselWrap>
          <Carousel slidesPerView={4} space={16} className="partners-carousel">
            {carouselPartners.map((item) => (
              <SwiperSlide key={item.id}>
                <SPartnersCarouselItem>
                  <img src={item.image} alt="Логотип партнёра" />
                </SPartnersCarouselItem>
              </SwiperSlide>
            ))}
          </Carousel>
        </SPartnersCarouselWrap>
        <SPartnersTitledList>
          {titlePartners.map((item) => (
            <TitlePartnerCard key={item.title} title={item.title} image={item.image} />
          ))}
        </SPartnersTitledList>
        <SPartnersList>
          {partners.map(
            (item, index) =>
              (showMore || index < 5) && (
                <PartnerCard key={item.title} title={item.title} image={item.image} />
              ),
          )}
        </SPartnersList>
        <SPartnersShowMoreBtnWrap>
          <Button size="medium" onClick={handleShowMoreToggle}>
            {showMore ? "Скрыть" : "Смотреть всё"}
          </Button>
        </SPartnersShowMoreBtnWrap>
      </Container>
    </SPartners>
  );
};

export default Partners;
