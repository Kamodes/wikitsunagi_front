import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ResultProps = {
  judge: boolean;
};

const StyledSuccess = styled.h1`
  font-size: 50px;
  color: red;
`;

const Result = (props: ResultProps) => {
  const judge = props.judge;
  if (judge) {
    return (
      <>
        <StyledSuccess>成功</StyledSuccess>

        <Link to="/">タイトルへ</Link>
      </>
    );
  } else {
    return (
      <>
        失敗
        <Link to="/">タイトルへ</Link>
      </>
    );
  }
};

export default Result;
