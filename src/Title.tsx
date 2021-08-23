import React from "react";
import{ Link } from 'react-router-dom'; 
import styled from 'styled-components';

const Wrapper = styled.section({
    padding: "4em",
    background: "papayawhip"
  });

const Title = () => {
    return(
        <Wrapper>
        <>
        <h1>うぃきつなぎ</h1>
        <Link to="/main">次へ</Link>
        </>
        </Wrapper>
    )
}

export default Title;

