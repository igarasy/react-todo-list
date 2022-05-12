import * as S from "./styled";
import Button from "../Button/index";
import * as React from "react";

interface ListItem {
  title: string;
}

interface TodoItemProps {
  list: { title: string }[];
  setList: (newList: ListItem[]) => void;
}

const TodoItem = ({ list, setList }: TodoItemProps) => {
  function handleRemove(index: number) {
    setList(
      list.filter((item, i) => {
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
