import React, { useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

type AnswerType = {
  first: string;
  fifth: string;
};

type AnswerListProps = {
  handleJudgeChange: (data: boolean) => void;
  questWords: string[];
};

const StyledButton = styled(Button)`
  border-radius: 30px;
`;

const FormStyle: React.CSSProperties = {
  width: "18em",
};

const ButtonStyle: React.CSSProperties = {
  width: "7em",
  height: "3em",
  backgroundColor: "blue",
  color: "white",
  fontSize: "20px",
  borderRadius: "20px",
  marginBottom: "20px",
};

const AnswersList = (Prop: AnswerListProps) => {
  const firstWord = Prop.questWords[0];
  const lastWord = Prop.questWords[1];
  console.log("answer開始");
  const [numOfForm, setNumOfForm] = useState(1);
  const inputs = Array(numOfForm).fill(null);
  const history = useHistory();
  const { register, handleSubmit } = useForm<AnswerType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const addAnswer = () => {
    setNumOfForm(numOfForm + 1);
  };
  const deleteAnswer = () => {
    if (numOfForm === 1) {
      console.log("これ以上回答は削除できません");
    } else {
      setNumOfForm(numOfForm - 1);
    }
  };

  const handleOnSubmit: SubmitHandler<AnswerType> = async (data) => {
    inputs.unshift(firstWord);
    inputs.push(lastWord);
    console.log("inputsは", inputs);
    async function getAnswer() {
      history.push("/Loading");
      await axios
        .post("http://localhost:3000/questions/verify_answer", {
          answer: inputs,
        })
        .then(function (response) {
          console.log(response);
          console.log(Boolean(response["data"]));
          Prop.handleJudgeChange(Boolean(response["data"]));
        })
        .catch(function (error) {
          console.log("エラーだよ");
          console.log(error);
        });
      history.push("/Result");
    }
    getAnswer();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Grid container spacing={1} justifyContent="center" direction="column">
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  variant="outlined"
                  style={FormStyle}
                  value={Prop.questWords[0]}
                  InputProps={{
                    readOnly: true,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <i className="fas fa-arrow-down fa-2x"></i>
              </Grid>
            </Grid>
          </Grid>
          {Array(numOfForm)
            .fill(null)
            .map((_, i) => (
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      style={FormStyle}
                      key={i}
                      value={inputs[i]}
                      required={true}
                      onChange={(e) => inputs.splice(i, 1, e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <i className="fas fa-arrow-down fa-2x"></i>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  variant="outlined"
                  style={FormStyle}
                  InputProps={{
                    readOnly: true,
                  }}
                  value={Prop.questWords[1]}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={addAnswer}>回答を追加</Button>
          </Grid>
          <Grid item>
            <Button onClick={deleteAnswer}>回答を削除</Button>
          </Grid>
          <Grid item>
            <StyledButton
              type="submit"
              variant="contained"
              className="AnswerButton"
              size="large"
              style={ButtonStyle}
            >
              解答
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AnswersList;
