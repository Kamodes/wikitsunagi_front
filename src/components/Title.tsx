import React from "react";
import{ Link } from 'react-router-dom'; 
import styled from 'styled-components';
import Color from "./CSS/Color";
import Size from "./CSS/Size";

const Wrapper = styled.section({
    padding: "4em",
    background: "darkgray"
});

const TitleStyle = styled.h1`
    padding: 1rem 3rem;
    color: #fff;
    border-radius: 100vh;
    background-image: -webkit-gradient(linear, right top, left top, from(#9be15d), to(#00e3ae));
    background-image: -webkit-linear-gradient(right, #9be15d 0%, #00e3ae 100%);
    background-image: linear-gradient(to left, #9be15d 0%, #00e3ae 100%);
`;

const ButtonStyle = styled.button`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
`;

const Title = () => {
    return(
        <>
        <Wrapper>
        <TitleStyle>
        うぃきつなぎ
        </TitleStyle>
        <Link to="/main"><ButtonStyle>次へ</ButtonStyle></Link>
        </Wrapper>
        </>
    )
}

export default Title;

