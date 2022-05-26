import React from "react";
import * as S from "./styled";
import Input from "../Input/index";
import Button from "../Button/index";

interface FormProps {
  addTask: (userInput: string) => void;
}

const Form = ({ addTask }: FormProps) => {
  const [userInput, setUserInput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <label style={{ display: "flex" }} htmlFor="tarefa">
        Digite uma tarefa
      </label>
      <Input
        id="todo"
        type="text"
        label="Adicione uma tarefa"
        placeholder="Digite uma tarefa"
        onChange={handleChange}
        value={userInput}
      />

      <Button text="Adicionar" backgroundColor="#04aa6d" margin="auto" />
    </S.Form>
  );
};

export default Form;
