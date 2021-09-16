import React, {useState} from "react";
import styled from "styled-components";

type AnswerProps = {
    index: number
}

const Wrapper = styled.section`
    font-size: 50px;
`;

const Answer = (prop: AnswerProps) =>{
    const [answerWord, setAnswerWords] = useState("");
    const handleAnswerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerWords(e.target.value)
    }

    return(
        <>
        <Wrapper>
            
            <input type="text" onChange={handleAnswerInputChange} placeholder={`${prop.index + 1}番目の単語を入力してください`}/>
        </Wrapper>
        </>
    )
}

export default Answer;