import styled from "styled-components";
import InputTag from "@components/Input/Input";
import { Link } from "react-router-dom";
import loginImg from "@images/lol.jpg";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${loginImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginInner = styled.div`
  width: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 100px;
  background-color: var(--gray100);
  padding: 30px;
  border-radius: 15px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
`;

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(InputTag)`
  height: 50px;
  border-radius: 10px;
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const SocialLogin = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleIcon = styled(SocialLogin)`
  border: 1px solid var(--gray300);
`;

export const KakaoIcon = styled(SocialLogin)`
  background-color: #fee500;
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #d13639;
  font-size: 16px;
  border-radius: 10px;
  font-weight: bold;
`;

export const LoginFooter = styled.div`
  display: flex;
  gap: 5px;
  justify-content: right;
  align-items: center;
  padding-right: 10px;
`;

export const LinkTag = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const SingUp = styled(LinkTag)``;

export const FindPwd = styled(LinkTag)``;

interface GapProps {
  gap: string;
}

export const Gap = styled.div<GapProps>`
  width: 100%;
  height: ${(props) => props.gap};
`;
