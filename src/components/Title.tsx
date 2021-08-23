import React from "react";
import{ Link } from 'react-router-dom'; 
import styled from 'styled-components';
import Color from "./CSS/Color";
import Size from "./CSS/Size";

const Wrapper = styled.section({
    padding: "4em",
    background: "darkgray"
});

const TitleStyle = styled.section({
    fontSize: `${Size.FONT.TITLE}px`,
    color: `${Color.PRIMARY}`
}
)
const Title = () => {
    return(
        <>
        <Wrapper>
        <TitleStyle>
        <h1>うぃきつなぎ</h1>
        </TitleStyle>
        <Link to="/main">次へ</Link>
        </Wrapper>
        </>
    )
}

export default Title;

