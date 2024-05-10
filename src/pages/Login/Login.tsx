import * as S from "@pages/Login/Login.style";
import google from "@images/icon_google.svg";
import kakao from "@images/icon_kakao.svg";

function Login() {
  return (
    <S.Login>
      <S.LoginInner>
        <S.Gap gap="7vh" />
        <S.Title>로그인</S.Title>
        <S.Gap gap="7vh" />
        <S.InputForm>
          <S.Input type="text" text="이메일">
            이메일을 입력해주세요
          </S.Input>
          <S.Gap gap="3vh" />
          <S.Input type="password" text="비밀번호">
            비밀번호를 입력해주세요
          </S.Input>
          <S.Gap gap="3vh" />
          <S.SocialContainer>
            <S.GoogleIcon>
              <S.Icons src={google} alt="구글 아이콘" />
            </S.GoogleIcon>
            <S.KakaoIcon>
              <S.Icons src={kakao} alt="구글 아이콘" />
            </S.KakaoIcon>
          </S.SocialContainer>
          <S.Gap gap="7vh" />
          <S.Button type="submit">확인</S.Button>
          <S.Gap gap="1vh" />
          <S.LoginFooter>
            <S.SingUp to="/sing-up">회원가입</S.SingUp> | <S.FindPwd to="">비밀번호 찾기</S.FindPwd>
          </S.LoginFooter>
        </S.InputForm>
      </S.LoginInner>
    </S.Login>
  );
}

export default Login;
