import React, {useState} from "react";
import Answer from "./Answer";

const array = Array.from({length: 5}, (v, k) => k);
const AnswersList = () =>{
    const answerRows = array.map((i) => {
        return(
            <Answer index = {i} key={i}/>
        )
    });

    return(
        <div>
            {answerRows}
        </div>
    );
}

export default AnswersList;