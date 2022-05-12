import React from "react";
import * as S from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  type?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NewInput = ({
  id,
  type = "text",
  onChange,
  value,
  ...props
}: InputProps) => {
  return (
    <S.Input id={id} type={type} value={value} onChange={onChange} {...props} />
  );
};

export default NewInput;
