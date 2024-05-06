import type { FC } from "react";

import { SwiperSlide } from "swiper/react";

import Carousel from "@Components/Carousel";
import { SectionTitle } from "@Components/SectionTitle";
import {
  SPast,
  SPastSLideBigImg,
  SPastSlideImg,
  SPastSlideSideWrap,
  SPastSlidesWrap,
} from "@Components/Sections/Past/styled";
import Container from "@Components/UI/Container";

import { pastData } from "@data/home/past";

const Past: FC = () => {
  const temp = 1;

  return (
    <SPast>
      <Container>
        <SectionTitle>Как это было</SectionTitle>
        <Carousel slidesPerView={1} space={24} className="past-carousel">
          <SwiperSlide>
            <SPastSlidesWrap>
              <SPastSlideSideWrap>
                <SPastSlideImg src={pastData[0].image} alt="Фотография как это было" />
                <SPastSlideImg src={pastData[1].image} alt="Фотография как это было" />
              </SPastSlideSideWrap>
              <SPastSLideBigImg src={pastData[2].image} alt="Фотография как это было" />
              <SPastSlideSideWrap>
                <SPastSlideImg src={pastData[3].image} alt="Фотография как это было" />
                <SPastSlideImg src={pastData[4].image} alt="Фотография как это было" />
              </SPastSlideSideWrap>
            </SPastSlidesWrap>
          </SwiperSlide>
          <SwiperSlide>
            <SPastSlidesWrap>
              <SPastSlideSideWrap>
                <SPastSlideImg src={pastData[5].image} alt="Фотография как это было" />
                <SPastSlideImg src={pastData[6].image} alt="Фотография как это было" />
              </SPastSlideSideWrap>
              <SPastSLideBigImg src={pastData[7].image} alt="Фотография как это было" />
              <SPastSlideSideWrap>
                <SPastSlideImg src={pastData[8].image} alt="Фотография как это было" />
                <SPastSlideImg src={pastData[9].image} alt="Фотография как это было" />
              </SPastSlideSideWrap>
            </SPastSlidesWrap>
          </SwiperSlide>
        </Carousel>
      </Container>
    </SPast>
  );
};

export { Past };
