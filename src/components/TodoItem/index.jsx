import * as S from './styled';
import Button from '../Button';
import React from 'react';

const TodoItem = ({ list, setList }) => {
  function handleRemove(index) {
    setList(
      list.filter((item, i) => {
        return i !== index;
      }),
    );
  }
  return (
    <div>
      {list.map((listItem, index) => (
        <S.ContainerTodoItem key={index}>
          <S.Title>{listItem.title}</S.Title>
          <Button
            text="Apagar"
            backgroundColor="#dc143c"
            id={listItem.title}
            onClick={() => handleRemove(index)}
          />
        </S.ContainerTodoItem>
      ))}
    </div>
  );
};

export default TodoItem;
