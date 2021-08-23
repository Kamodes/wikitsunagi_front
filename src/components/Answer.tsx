import React, {useState} from "react";

type AnswerProps = {
    index: number
}
const Answer = (prop: AnswerProps) =>{
    const [answerWord, setAnswerWords] = useState("");
    const handleAnswerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerWords(e.target.value)
    }

    return(
        <input type="text" onChange={handleAnswerInputChange} placeholder={`${prop.index + 1}番目の単語を入力してください`}/>
    )
}

export default Answer;