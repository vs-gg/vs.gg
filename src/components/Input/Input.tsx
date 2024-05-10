import * as S from "@components/Input/Input.style";
import { InputProps } from "./Input.type";

function Input({ text, type, children, className }: InputProps) {
  return (
    <S.InputContainer>
      {text ? <S.Label>{text}</S.Label> : null}
      <S.TextInput type={type} placeholder={children} className={className} />
    </S.InputContainer>
  );
}

export default Input;
