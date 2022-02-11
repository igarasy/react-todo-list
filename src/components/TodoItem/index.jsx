import * as S from "./styled";
import Button from "../Button";
import React from "react";

const TodoItem = ({ list, setList }) => {
  function handleRemove(title) {
    const newList = list.filter((item) => item.title !== title);

    setList(newList);
  }
  return (
    <div>
      {list.map((listItem) => (
        <S.ContainerTodoItem key={listItem.title}>
          <S.Title>{listItem.title}</S.Title>
          <Button
            text="Apagar"
            backgroundColor="#dc143c"
            id={listItem.title}
            onClick={() => handleRemove(listItem.title)}
          />
        </S.ContainerTodoItem>
      ))}
    </div>
  );
};

export default TodoItem;
