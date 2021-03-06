import React, { useState, useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useInput } from "../utils/useInput";
import useUser from "../hooks/useUser";
import device from "../utils/device";

const Container = styled.div`
  width: 30%;
  height: 65%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;

  @media ${device.laptop} {
    width: 40%;
    height: 60%;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 60%;
    padding: 0px 55px;
  }

  @media ${device.mobileS} {
    width: 90%;
    padding: 0px 30px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 25px;

  @media ${device.mobileL} {
    margin-bottom: 25px;
  }
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 27px;
  color: black;
`;

const Form = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  border-radius: 10px;
  width: 85%;
  height: 30px;
  padding: 8px 15px;
  background-color: #e6e6e6;
  opacity: 0.8;
  margin-bottom: 35px;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SignUpBtn = styled.button`
  all: unset;
  border-radius: 10px;
  width: 80%;
  height: 35px;
  padding: 8px 20px;
  background-color: #c34c8a;
  color: white;
  -webkit-text-fill-color: white;

  font-weight: 700;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const ErrorMessage = styled.span`
  text-align: center;
  color: red;
  font-size: 15px;
`;

const SignUpMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 30px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const SocailLoginBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 45px;
  padding: 8px 15px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  opacity: 0.9;
  outline: none;
  &:hover {
    opacity: 1;
  }

  @media ${device.laptop} {
    font-size: 20px;
    padding: 0;
  }
`;

const SocialLoginTitle = styled.span`
  margin-left: 7px;
  @media ${device.laptop} {
    display: none;
  }
`;

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const {
    onLogInRequest,
    user: { loginErrorReason }
  } = useUser();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onLogInRequest({ email, password });
    },
    [email, password]
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Log in</Title>
      </TitleContainer>
      <Form onSubmit={onSubmit}>
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeEmail}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangePassword}
        ></Input>
        <SignUpBtn type="submit">로그인</SignUpBtn> 
        {loginErrorReason && <ErrorMessage>{loginErrorReason}</ErrorMessage>}
      </Form>

      <SignUpMessage>
        <Link href="/signup">
          <a>아이디가 없으신가요?</a>
        </Link>
      </SignUpMessage>
      {/* <SocailLoginBtnContainer>
        <SocialLoginBtn
          backgroundColor="#0984e3"
          onClick={() => {
            alert("구현 중 입니다.");
          }}
        >
          <FaFacebook />
          <SocialLoginTitle>FaceBook</SocialLoginTitle>
        </SocialLoginBtn>
        <SocialLoginBtn
          backgroundColor="#D54733"
          onClick={() => {
            alert("구현 중 입니다.");
          }}
        >
          <FaGoogle />
          <SocialLoginTitle>Google</SocialLoginTitle>
        </SocialLoginBtn>
      </SocailLoginBtnContainer> */}
    </Container>
  );
};

export default LoginForm;
