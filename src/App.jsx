import React from "react";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const list = [
    {
      title: "Caminhar",
      description: "Teste",
    },
    {
      title: "Comer",
      description: "Teste",
    },
    {
      title: "Beber",
      description: "Teste",
    },
  ];
  return (
    <div>
      {list.map(({ title, description }) => (
        <TodoItem title={title} description={description} />
      ))}
      <Button text="Adicionar" backgroundColor="#04aa6d" />
      <Input />
    </div>
  );
}

export default App;
