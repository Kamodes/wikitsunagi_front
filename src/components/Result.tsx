import React from "react";
import { Link } from "react-router-dom";

type ResultProps = {
  judge: boolean;
};

const Result = (props: ResultProps) => {
  const judge = props.judge;
  if (judge) {
    return (
      <>
        成功
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
