import React, { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Box } from "@material-ui/core";

type AnswerType = {
  first: string;
  second: string;
  third: string;
  forth: string;
  fifth: string;
};

const StyledTextField = styled(TextField)`
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  width: 50%;
  margin 0 auto;
`;

// const BoxStyle = styled(Box)``;

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
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <TextField
              label="１つ目の単語"
              placeholder="1番目の回答を入力してください"
              {...register("first")}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="2つ目の単語"
              placeholder="2番目の回答を入力してください"
              {...register("second")}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="3つ目の単語"
              placeholder="3番目の回答を入力してください"
              {...register("third")}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="4つ目の単語"
              placeholder="4番目の回答を入力してください"
              {...register("forth")}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="5つ目の単語"
              placeholder="5番目の回答を入力してください"
              {...register("fifth")}
              variant="outlined"
            ></TextField>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AnswersList;
