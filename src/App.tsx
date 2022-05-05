import * as React from "react";
import TodoItem from "./components/TodoItem/index";
import Input from "./components/Input/index";
import { Wrapper } from "./components/Wrapper/styled";
import { useLocalStorage } from "./components/Hooks/useLocalStorage";

function App() {
  const tarefas = [
    {
      title: "Caminhar",
    },
  ];
  const [list, setList] = useLocalStorage("list", tarefas);

  return (
    <Wrapper>
      <TodoItem list={list} setList={setList} />
      <Input id="tarefa" label="Tarefa" value={list} setValue={setList} />
    </Wrapper>
  );
}

export default App;
