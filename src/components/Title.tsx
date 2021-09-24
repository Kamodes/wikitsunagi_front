import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const Wrapper = styled.section`
  padding-top: 4px;
  width: 100vw;
  height: 100vh;
  background: darkgray;
  position: relative;
`;

const TitleStyle = styled.h1`
  color: #fff;
  border-radius: 100vh;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#9be15d),
    to(#00e3ae)
  );
  background-image: -webkit-linear-gradient(right, #9be15d 0%, #00e3ae 100%);
  background-image: linear-gradient(to left, #9be15d 0%, #00e3ae 100%);
  font-size: 100px;
  position: absolute;
  height: 150px;
  width: 800px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 40%;
  margin: auto;
`;

const style: React.CSSProperties = {
  position: "absolute",
  top: "60%",
  bottom: "0",
  right: "0",
  left: "0",
  height: "10em",
  width: "15em",
  margin: "0 auto",
  fontSize: "25px",
  borderRadius: "20px",
};

const Title = () => {
  return (
    <>
      <Wrapper>
        <TitleStyle>うぃきつなぎ</TitleStyle>
        <Link to="/main">
          <Button
            style={style}
            variant="contained"
            size="large"
            color="primary"
          >
            次へ
          </Button>
        </Link>
      </Wrapper>
    </>
  );
};

export default Title;
