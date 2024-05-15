import * as S from "@components/Input/Input.style";
import { InputProps } from "./Input.type";

function Input({ text, type, onChange, children, className }: InputProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <S.InputContainer>
      {text ? <S.Label>{text}</S.Label> : null}
      <S.TextInput
        type={type}
        placeholder={children}
        onChange={handleChangeInput}
        className={className}
      />
    </S.InputContainer>
  );
}

export default Input;
