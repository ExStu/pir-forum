import type { FC } from "react";

import { SCheckbox, SCheckboxIcon, SCheckedCheckboxIcon } from "./styled";

import type { ICheckbox } from "./types";

const Checkbox: FC<ICheckbox> = ({ error, ...props }) => (
  <SCheckbox
    icon={<SCheckboxIcon error={error} />}
    checkedIcon={<SCheckedCheckboxIcon error={error} />}
    inputProps={{ "aria-label": "Чекбокс" }}
    {...props}
  />
);

export default Checkbox;
