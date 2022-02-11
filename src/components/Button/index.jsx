import * as S from "./styled";
import React from "react";

const Button = (props) => {
  return (
    <S.Button
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      margin={props.margin}
    >
      {props.text}
    </S.Button>
  );
};

export default Button;
