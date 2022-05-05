import * as S from "./styled";
import * as React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
  text?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <S.Button
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      {...props}
    >
      {props.text}
    </S.Button>
  );
};

export default Button;
