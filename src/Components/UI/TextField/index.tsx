// @ts-nocheck

import type { FC } from "react";
import React from "react";

import { useMaskito } from "@maskito/react";
import { Controller } from "react-hook-form";
import { mergeRefs } from "react-merge-refs";

import InputAdornment from "@mui/material/InputAdornment";
import type { TextFieldProps } from "@mui/material/TextField";

import IconButton from "@Components/UI/Button/IconButton";

import CrossDelete from "@shared/Icons/crossDelete";

import { STextField, TextFieldBase } from "./styled";

import type { MaskitoOptions } from "@maskito/core";

const TextField: FC<TextFieldProps> = React.forwardRef(
  ({ onInput, disabled, value, size, ...props }, ref) => (
    <STextField
      InputProps={{
        disableUnderline: true,
        endAdornment: value && !disabled && (
          <InputAdornment position="end">
            <IconButton
              variant="text"
              aria-label="Очистить"
              onClick={onInput}
              title="Очистить"
              size="small"
              tabIndex={-1}
            >
              <CrossDelete />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="filled"
      value={value}
      onInput={onInput}
      size={size}
      disabled={disabled}
      {...props}
      ref={ref}
    />
  ),
);

export default TextField;

TextField.displayName = "TextField";

interface ITextFieldControlled {
  name?: string;
  control?: any;
  autoComplete?: string;
  rules?: any;
  fullWidth?: boolean;
  mask?: MaskitoOptions;
  helperText?: string;
  onChange?: (e: unknown) => void;
  label?: string;
  size?: string;
}

const TextFieldControlled = React.forwardRef(
  (
    {
      name,
      control,
      mask,
      rules = {},
      helperText = "",
      onChange: handleOnChange = () => {},
      ...restProps
    }: ITextFieldControlled,
    ref,
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const localRef = mask ? useMaskito({ options: mask }) : React.useRef(null);

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({
          field: { onChange, value, ref: fieldRef, ...rest },
          fieldState: { error },
          formState,
        }) => (
          <TextField
            inputProps={{
              ref: mergeRefs([ref, localRef, fieldRef]),
            }}
            helperText={error ? error.message : helperText}
            error={!!error}
            onInput={(e) => {
              onChange(e);
              handleOnChange(e);
            }}
            value={value || ""}
            {...restProps}
          />
        )}
      />
    );
  },
);
TextFieldControlled.displayName = "TextFieldControlled";

export { TextFieldBase, TextFieldControlled };
