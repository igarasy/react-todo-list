import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  padding: 16px;
  border-radius: 8px;
  border: none;
  margin: 0px 8px;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
