import type { FC, MouseEvent } from "react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import forumLogo from "@assets/logos/logo.svg";
import rutube from "@assets/logos/rutube.svg";
import telegram from "@assets/logos/telegram.svg";

import Button from "@Components/UI/Button";
import { SButtonBorder } from "@Components/UI/Button/styled";
import Container from "@Components/UI/Container";
import { Link } from "@Components/UI/Link";
import Popover from "@Components/UI/Popover";

import {
  SHeader,
  SHeaderDropdownItem,
  SHeaderDropdownList,
  SHeaderLinks,
  SHeaderPartnerLinks,
  SHeaderWrap,
} from "./styled";

import type { IHeader } from "./types";

const Header: FC<IHeader> = ({ items }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [dropdownTarget, setDropdownTarget] = useState<string>(items[0].value);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, target: string) => {
    setAnchorEl(event.currentTarget);
    setDropdownTarget(target);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownTarget("");
  };

  const open = Boolean(anchorEl);

  return (
    <SHeader>
      <Container>
        <SHeaderWrap>
          <Link component={RouterLink} to="/">
            <img src={forumLogo} alt="Логотип Форум регионов России" />
          </Link>
          <SHeaderLinks>
            {items.map((item) => (
              <Button
                onClick={(event) => handleClick(event, item.value)}
                variant="text"
              >
                {item.value}
              </Button>
            ))}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <SHeaderDropdownList>
                {items.map(
                  (item) =>
                    item.value === dropdownTarget &&
                    item.subItems.map((subItem) => (
                      <SHeaderDropdownItem>
                        <Link component={RouterLink} to="/" onClick={handleClose}>
                          {subItem.value}
                        </Link>
                      </SHeaderDropdownItem>
                    )),
                )}
              </SHeaderDropdownList>
            </Popover>
          </SHeaderLinks>
          <SHeaderPartnerLinks>
            <Link component={RouterLink} to="/">
              <img src={rutube} alt="Логотип Рутьюб" />
            </Link>
            <Link component={RouterLink} to="/">
              <img src={telegram} alt="Логотип Телеграм" />
            </Link>
          </SHeaderPartnerLinks>

          <SButtonBorder size="medium">
            <Button
              variant="outlined"
              size="medium"
              sx={{ textTransform: "uppercase" }}
            >
              Контакты
            </Button>
          </SButtonBorder>
        </SHeaderWrap>
      </Container>
    </SHeader>
  );
};

export default Header;
