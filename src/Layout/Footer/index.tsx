import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import Container from "@Components/UI/Container";
import { Link } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

import forumLogo from "@assets/logos/logo.svg";

import { SFooter, SFooterBlock, SFooterBlockList, SFooterMain, SFooterWrap } from "./styled";

const Footer: FC = () => {
  const temp = 1;

  return (
    <SFooter>
      <Container>
        <SFooterWrap>
          <SFooterMain>
            <Link component={RouterLink} to="/">
              <img src={forumLogo} alt="Логотип Форум регионов России" />
            </Link>
            <Typography variant="text1">
              Москва, 3-я ул.Ямского поля, владение 2, к. 26, 2-й этаж, офис 117
            </Typography>
          </SFooterMain>
          <SFooterBlock>
            <Typography variant="body1">ЗАГОЛОВОК</Typography>
            <SFooterBlockList>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
            </SFooterBlockList>
          </SFooterBlock>
          <SFooterBlock>
            <Typography variant="body1">ЗАГОЛОВОК</Typography>
            <SFooterBlockList>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
              <li>
                <Typography color="text.secondary">Lorem ipsum</Typography>
              </li>
            </SFooterBlockList>
          </SFooterBlock>
        </SFooterWrap>
      </Container>
    </SFooter>
  );
};

export default Footer;
