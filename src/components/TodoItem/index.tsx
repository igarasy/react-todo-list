import * as S from "./styled";
import Button from "../Button/index";
import * as React from "react";

const TodoItem = ({ list, setList }) => {
  function handleRemove(index) {
    setList(
      list.filter((item: string, i: number) => {
        return i !== index;
      })
    );
  }
  return (
    <div>
      {list.map(({ title }, index: number) => (
        <S.ContainerTodoItem key={index}>
          <S.Title>{title}</S.Title>
          <Button
            text="Apagar"
            backgroundColor="#dc143c"
            id={title}
            onClick={() => handleRemove(index)}
          />
        </S.ContainerTodoItem>
      ))}
    </div>
  );
};

export default TodoItem;
