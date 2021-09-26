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

const Result = (props: ResultProps) => {
  const judge = props.judge;
  const model = props.modelAnswer;
  if (judge) {
    return (
      <>
        <StyledSuccess>成功</StyledSuccess>
        <Link to="/">
          <Button variant="contained">タイトルへ</Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <StyledFailed>失敗</StyledFailed>
        <Grid container justify="center" direction="column" spacing={5}>
          <Grid item>{model[0]}</Grid>
          <Grid item>{model[1]}</Grid>
          <Grid item>{model[2]}</Grid>
          <Grid item>{model[3]}</Grid>
          <Grid item>{model[4]}</Grid>
          <Grid item>
            <Link to="/">
              <Button variant="contained" size="large">
                タイトルへ
              </Button>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default Result;
