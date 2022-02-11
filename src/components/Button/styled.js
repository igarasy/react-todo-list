import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  width: 100px;
  display: flex;
  border-radius: 8px;
  border: none;
  margin: ${(props) => props.margin};
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
