import React from "react";
import Form from "../Form/index";
import TodoItem from "../TodoItem/index";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoPage = () => {
  const [list, setList] = useLocalStorage("list", [{ title: "Olá" }]);

  const addTask = (userInput: string) => {
    if (userInput.length === 0) {
      alert("Digite um valor válido");
    } else {
      let copy = [...list];
      copy = [...copy, { title: userInput }];
      setList(copy);
    }
  };

  function handleRemove(index: number) {
    setList(
      list.filter((item, i) => {
        return i !== index;
      })
    );
  }

  return (
    <>
      <TodoItem list={list} handleRemove={handleRemove} />
      <Form addTask={addTask} />
    </>
  );
};

export default TodoPage;
