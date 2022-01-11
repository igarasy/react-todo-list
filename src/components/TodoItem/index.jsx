import * as S from "./styled";
import Button from "../Button";

const TodoItem = (props) => {
  console.log(props);
  return (
    <S.ContainerTodoItem>
      <S.Title>{props.title}</S.Title>
      <S.Description>{props.description}</S.Description>
      <Button text="Apagar" backgroundColor="#dc143c" />
    </S.ContainerTodoItem>
  );
};

export default TodoItem;
