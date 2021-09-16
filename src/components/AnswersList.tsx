import React, { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

type AnswerType = {
  first: string;
  second: string;
  third: string;
  forth: string;
  fifth: string;
};

const TextFieldStyle = styled.section`
  width: 300;
`;

const AnswersList = () => {
  const { register, handleSubmit } = useForm<AnswerType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const handleOnSubmit: SubmitHandler<AnswerType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <TextFieldStyle>
          <Grid container direction="column" spacing={4}>
            <TextField
              variant="outlined"
              placeholder="1番目の回答を入力してください"
              {...register("first")}
            ></TextField>
            <TextField
              placeholder="2番目の回答を入力してください"
              {...register("second")}
            ></TextField>
            <TextField
              placeholder="3番目の回答を入力してください"
              {...register("third")}
            ></TextField>
            <TextField
              placeholder="4番目の回答を入力してください"
              {...register("forth")}
            ></TextField>
            <TextField
              placeholder="5番目の回答を入力してください"
              {...register("fifth")}
            ></TextField>
          </Grid>
        </TextFieldStyle>
      </form>
    </>
  );
};

export default AnswersList;
