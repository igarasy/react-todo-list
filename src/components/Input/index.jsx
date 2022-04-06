import * as S from './styled';
import React from 'react';
import Button from '../Button';

const Input = ({ label, setValue, value, ...props }) => {
  const [userInput, setUserInput] = React.useState('');

  const addTask = (userInput) => {
    let copy = [...value];
    copy = [...copy, { title: userInput }];
    setValue(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <label style={{ display: 'flex' }} htmlFor="tarefa">
        Digite uma tarefa
      </label>
      <S.Input type="text" value={userInput} onChange={handleChange} />
      <Button text="Adicionar" backgroundColor="#04aa6d" margin="auto" />
    </S.Form>
  );
};

export default Input;
