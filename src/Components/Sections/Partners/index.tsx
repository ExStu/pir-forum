import type { FC } from "react";

import { SwiperSlide } from "swiper/react";

import Carousel from "@Components/Carousel";
import Container from "@Components/UI/Container";

import { carouselPartners } from "@data/home/partners";

import {
  SPartners,
  SPartnersCarouselItem,
  SPartnersSectionTitle,
  SPartnersSubtitle,
} from "./styled";

const Partners: FC = () => {
  const temp = 1;

  return (
    <SPartners>
      <Container>
        <SPartnersSectionTitle variant="extraH2">
          ПартнЁры 2023
        </SPartnersSectionTitle>
        <SPartnersSubtitle variant="h4">ПРИ ПОДДЕРЖКЕ</SPartnersSubtitle>
        <Carousel slidesPerView={4} space={16} className="partners-carousel">
          {carouselPartners.map((item) => (
            <SwiperSlide key={item.id}>
              <SPartnersCarouselItem>
                <img src={item.image} alt="Логотип партнёра" />
              </SPartnersCarouselItem>
            </SwiperSlide>
          ))}
        </Carousel>
      </Container>
    </SPartners>
  );
};

export default Partners;
