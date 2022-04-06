import * as S from './styled';
import Button from '../Button';
import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoItem = ({ list, setList }) => {
  const { storedValue } = useLocalStorage();
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
          {console.log(storedValue)}
        </S.ContainerTodoItem>
      ))}
    </div>
  );
};

export default TodoItem;
