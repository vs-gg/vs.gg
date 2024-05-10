import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: var(--gray200);
  outline: var(--black400);
  font-size: 12px;
`;
