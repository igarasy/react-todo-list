import * as S from "./styled";
import Button from "../Button";
import React from "react";

const TodoItem = ({ list }) => {
  return (
    <div>
      {list.map((listItem) => (
        <S.ContainerTodoItem key={listItem.title}>
          <S.Title>{listItem.title}</S.Title>
          <Button text="Apagar" backgroundColor="#dc143c" />
        </S.ContainerTodoItem>
      ))}
    </div>
  );
};

export default TodoItem;
