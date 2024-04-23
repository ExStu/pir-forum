import { LinkTypeEnum } from "@shared/Types/link";

import newsTempImg from "@assets/images/news-temp.webp";

export default [
  {
    image: newsTempImg,
    title: "Заголовок",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    link: {
      value: "/",
      type: LinkTypeEnum.INTERNAL,
    },
  },
  {
    image: newsTempImg,
    title: "Заголовок1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    link: {
      value: "/",
      type: LinkTypeEnum.INTERNAL,
    },
  },
  {
    image: newsTempImg,
    title: "Заголовок2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    link: {
      value: "/",
      type: LinkTypeEnum.INTERNAL,
    },
  },
];
