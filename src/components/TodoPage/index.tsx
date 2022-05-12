import React from "react";
import * as S from "./styled";
import Input from "../Input/index";
import Button from "../Button/index";
import TodoItem from "../TodoItem/index";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoForm = () => {
  const [list, setList] = useLocalStorage("list", [{ title: "Olá" }]);
  const [userInput, setUserInput] = React.useState("");

  const addTask = (userInput: string) => {
    if (userInput.length === 0) {
      alert("Digite um valor válido");
    } else {
      let copy = [...list];
      copy = [...copy, { title: userInput }];
      setList(copy);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <>
      <TodoItem list={list} setList={setList} />
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
    </>
  );
};

export default TodoForm;
