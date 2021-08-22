import React from "react";
import{ Link } from 'react-router-dom'; 
import styled from 'styled-components';

const Title = () => {
    return(
        <>
        <h1>うぃきつなぎ</h1>
        <Link to="/main">次へ</Link>
        </>
    )
}

export default Title;

