import React from "react";

type ResultProps = {
    judge: boolean
};

const Result = () =>{
    const judge = false;
    if(judge){
        return(
            <>
            成功
            </>
        );
    }else{
        return(
            <>
            失敗
            </>
        );
    }
}

export default Result;