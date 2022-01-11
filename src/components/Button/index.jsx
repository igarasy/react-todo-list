import * as S from "./styled";

const Button = (props) => {
  return (
    <S.Button
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
    >
      {props.text}
    </S.Button>
  );
};

export default Button;
