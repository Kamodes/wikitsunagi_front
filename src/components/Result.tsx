import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

type ResultProps = {
  judge: boolean;
  modelAnswer: string[];
};

const StyledSuccess = styled.h1`
  font-size: 100px;
  color: red;
`;

const StyledFailed = styled.h1`
  font-size: 100px;
  color: blue;
`;

const StyledModel = styled.p`
  font-size: 30px;
`;

const ButtonStyle = styled.section`
  margin-bottom: 20px;
`;

const Result = (props: ResultProps) => {
  const judge = props.judge;
  const model = props.modelAnswer;
  if (judge) {
    return (
      <>
        <StyledSuccess>成功</StyledSuccess>
        <StyledModel>解答例</StyledModel>
        <Grid container justify="center" direction="column" spacing={5}>
          <Grid item>{model[0]}</Grid>
          <Grid item>{model[1]}</Grid>
          <Grid item>{model[2]}</Grid>
          <Grid item>{model[3]}</Grid>
          <Grid item>{model[4]}</Grid>
          <Grid item>
            <Link to="/">
              <ButtonStyle>
                <Button variant="contained" size="large">
                  タイトルへ
                </Button>
              </ButtonStyle>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <StyledFailed>失敗</StyledFailed>
        <StyledModel>解答例</StyledModel>
        <Grid container justify="center" direction="column" spacing={5}>
          <Grid item>{model[0]}</Grid>
          <Grid item>{model[1]}</Grid>
          <Grid item>{model[2]}</Grid>
          <Grid item>{model[3]}</Grid>
          <Grid item>{model[4]}</Grid>
          <Grid item>
            <Link to="/">
              <ButtonStyle>
                <Button variant="contained" size="large">
                  タイトルへ
                </Button>
              </ButtonStyle>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default Result;
