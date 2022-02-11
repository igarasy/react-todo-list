import React from "react";
import TodoItem from "./components/TodoItem";
import Input from "./components/Input";
import { Wrapper } from "./components/Wrapper/styled";

function App() {
  const tarefas = [
    {
      title: "Caminhar",
    },
  ];
  const [list, setList] = React.useState(tarefas);

  return (
    <Wrapper>
      <TodoItem list={list} setList={setList} />
      <Input id="tarefa" label="Tarefa" value={list} setValue={setList} />
    </Wrapper>
  );
}

export default App;
