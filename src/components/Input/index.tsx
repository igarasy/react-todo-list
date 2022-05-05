import * as S from "./styled";
import * as React from "react";
import Button from "../Button/index";

const Input = ({ label, setValue, value, ...props }) => {
  const [userInput, setUserInput] = React.useState("");

  const addTask = (userInput: string) => {
    if (userInput.length === 0) {
      alert("Digite um valor válido");
    } else {
      let copy = [...value];
      copy = [...copy, { title: userInput }];
      setValue(copy);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <label style={{ display: "flex" }} htmlFor="tarefa">
        Digite uma tarefa
      </label>
      <S.Input type="text" value={userInput} onChange={handleChange} />
      <Button text="Adicionar" backgroundColor="#04aa6d" margin="auto" />
    </S.Form>
  );
};

export default Input;