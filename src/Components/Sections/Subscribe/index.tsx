import type { FC, SyntheticEvent } from "react";
import { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";

import IconButton from "@Components/UI/Button/IconButton";
import Checkbox from "@Components/UI/Checkbox";
import Container from "@Components/UI/Container";
import { FormControl } from "@Components/UI/FormControl";
import { FormControlLabel } from "@Components/UI/FormControlLabel";
import Snackbar from "@Components/UI/Snackbar";
import { TextFieldControlled } from "@Components/UI/TextField";

import { emailRegexp } from "@utils/validations/email";

import ArrowRight from "@shared/Icons/arrowRight";

import {
  SSubscribe,
  SSubscribeForm,
  SSubscribeInputWrap,
  SSubscribeTitle,
  SSubscribeWrap,
} from "./styled";

import type { SubmitHandler } from "react-hook-form";

interface ISubscribeFormValues {
  email: string;
  agreement: boolean;
}

const Subscribe: FC = () => {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ISubscribeFormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      agreement: true,
    },
  });

  const handleCloseSnackbar = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackbar(false);
  };

  const handleOnSubmit: SubmitHandler<ISubscribeFormValues> = (data) => {
    setShowSnackbar(true);
    console.log(data);
    reset({ email: "" });
  };

  useEffect(() => {
    setValue("agreement", true);
  }, [setValue]);

  return (
    <>
      <SSubscribe>
        <Container>
          <SSubscribeWrap>
            <SSubscribeTitle variant="h2">
              Подпишитесь на рассылку и&nbsp;получайте&nbsp;только&nbsp;полезные&nbsp;сообщения
            </SSubscribeTitle>
            <SSubscribeForm onSubmit={handleSubmit(handleOnSubmit)}>
              <SSubscribeInputWrap>
                <FormControl fullWidth sx={{ height: "100%" }}>
                  <TextFieldControlled
                    control={control}
                    name="email"
                    label="Ваш Email"
                    autoComplete="off"
                    helperText={errors.email?.message}
                    rules={{
                      required: {
                        value: true,
                        message: "Введите email",
                      },
                      pattern: {
                        value: emailRegexp,
                        message: "Неверно введен email. Пример: example@gmail.com",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальная длина – 100 символов",
                      },
                    }}
                  />
                </FormControl>
                <IconButton variant="contained" type="submit" bgColor="secondary">
                  <ArrowRight />
                </IconButton>
              </SSubscribeInputWrap>
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Controller
                      name="agreement"
                      rules={{
                        required: true,
                      }}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Checkbox
                          checked={!!value}
                          onChange={(e) => {
                            onChange(e);
                          }}
                          error={!!errors.agreement}
                        />
                      )}
                    />
                  }
                  label="Даю согласие на обработку персональных данных"
                />
              </FormControl>
            </SSubscribeForm>
          </SSubscribeWrap>
        </Container>
      </SSubscribe>
      <Snackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        message="Форма успешно отправлена"
      />
    </>
  );
};

export default Subscribe;
