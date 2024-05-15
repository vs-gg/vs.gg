import * as S from "@pages/Login/Login.style";
import google from "@images/icon_google.svg";
import kakao from "@images/icon_kakao.svg";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/index";
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheckOK, setIsCheckOk] = useState(false);

  // 이메일 로그인
  const handleLoginClick = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const accessToken = await result.user.getIdToken();
      localStorage.setItem("accessToken", accessToken);
      alert("로그인 성공");
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  };

  // 구글 로그인
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // 이메일 검증식
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

    // 비밀번호 검증식
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

    // 이메일 검증
    const emailCheck = (email: string) => {
      return emailRegEx.test(email);
    };

    // 비밀번호 검증
    const passwordCheck = (password: string) => {
      return passwordRegEx.test(password);
    };

    // 이메일, 비밀번호 동시 검증
    const checkEmailPassword = () => {
      return emailCheck(email) && passwordCheck(password);
    };

    setIsCheckOk(checkEmailPassword());
  }, [email, password, isCheckOK]);

  return (
    <S.Login>
      <S.LoginInner>
        <S.Gap gap="7vh" />
        <S.Title>로그인</S.Title>
        <S.Gap gap="7vh" />
        <S.InputForm>
          <S.Input type="text" text="이메일" onChange={setEmail}>
            이메일을 입력해주세요
          </S.Input>
          <S.Gap gap="3vh" />
          <S.Input type="password" text="비밀번호" onChange={setPassword}>
            비밀번호를 입력해주세요
          </S.Input>
          <S.Gap gap="3vh" />
          <S.SocialContainer>
            <S.GoogleIcon type="button" onClick={handleGoogleClick}>
              <S.Icons src={google} alt="구글 아이콘" />
            </S.GoogleIcon>
            <S.KakaoIcon>
              <S.Icons src={kakao} alt="구글 아이콘" />
            </S.KakaoIcon>
          </S.SocialContainer>
          <S.Gap gap="7vh" />
          <S.Button type="button" onClick={handleLoginClick} disabled={!isCheckOK}>
            확인
          </S.Button>
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
