import React, { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type AnswerType = {
  first: string;
  second: string;
  third: string;
  forth: string;
  fifth: string;
};

const StyledButton = styled(Button)`
  border-radius: 30px;
`;

const FormStyle: React.CSSProperties = {
  width: "18em",
};

const ButtonStyle: React.CSSProperties = {
  width: "7em",
  height: "3em",
  backgroundColor: "blue",
  color: "white",
  fontSize: "20px",
  borderRadius: "20px",
};

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
        <Grid container spacing={6} justifyContent="center" direction="column">
          <Grid item>
            <TextField
              label="１つ目の単語"
              placeholder="1番目の解答を入力してください"
              {...register("first")}
              variant="outlined"
              style={FormStyle}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="2つ目の単語"
              placeholder="2番目の解答を入力してください"
              {...register("second")}
              variant="outlined"
              style={FormStyle}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="3つ目の単語"
              placeholder="3番目の解答を入力してください"
              {...register("third")}
              variant="outlined"
              style={FormStyle}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="4つ目の単語"
              placeholder="4番目の解答を入力してください"
              {...register("forth")}
              variant="outlined"
              style={FormStyle}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="5つ目の単語"
              placeholder="5番目の解答を入力してください"
              {...register("fifth")}
              variant="outlined"
              style={FormStyle}
            ></TextField>
          </Grid>
          <Grid item>
            <Link to="/result">
              <StyledButton
                type="submit"
                variant="contained"
                className="AnswerButton"
                size="large"
                style={ButtonStyle}
              >
                解答
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AnswersList;
