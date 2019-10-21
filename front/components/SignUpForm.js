import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useInput } from "../utils/useInput";

const Container = styled.div`
  width: 30%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 27px;
  color: black;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
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
  &:nth-child(4) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SignUpBtn = styled.button`
  all: unset;
  border-radius: 10px;
  width: 85%;
  height: 30px;
  padding: 8px 15px;
  background-color: #c34c8a;
  color: white;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const CheckBox = styled.input``;

const SocailLoginBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialLoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 45px;
  padding: 8px 15px;
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const RequiredMessage = styled.span`
  margin-left: 20px;
  color: red;
`;

const SignUpForm = () => {
  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [onPasswordErrorMessage, setOnPasswordErrorMessage] = useState(false);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!isSamePassword) {
        alert("패스워드가 다릅니다.");
        return;
      } else if (!isChecked) {
        alert("약관에 동의해 주세요.");
        return;
      } else {
        console.log(nickname, email, password);
      }
    },
    [nickname, email, password, isSamePassword, isChecked]
  );

  const onChangeIsSamePassword = useCallback(
    e => {
      const {
        target: { value }
      } = e;
      if (value === password) {
        setIsSamePassword(true);
        setOnPasswordErrorMessage(false);
      } else {
        setOnPasswordErrorMessage(true);
      }
    },
    [isSamePassword, onPasswordErrorMessage]
  );

  const onChangeChecked = useCallback(
    e => {
      setIsChecked(e.target.checked);
    },
    [isChecked]
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Sign Up</Title>
      </TitleContainer>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Nickname"
          required
          onChange={onChangeNickname}
          value={nickname}
        ></Input>
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={onChangeEmail}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={onChangePassword}
        ></Input>
        <Input
          type="password"
          placeholder="Verify password"
          required
          onChange={onChangeIsSamePassword}
        ></Input>
        {onPasswordErrorMessage && (
          <RequiredMessage>비밀번호가 같지 않습니다.</RequiredMessage>
        )}
        <CheckBoxContainer>
          <CheckBox
            type="checkBox"
            value={isChecked}
            onChange={onChangeChecked}
          />
          <label htmlFor={CheckBox}>약관에 동의</label>
          {!isChecked && (
            <RequiredMessage>약관에 동의해 주세요</RequiredMessage>
          )}
        </CheckBoxContainer>
        <SignUpBtn type="submit">가입 하기</SignUpBtn> 
      </Form>
      <SocailLoginBtnContainer>
        <SocialLoginBtn backgroundColor="#0984e3">
          <FaFacebook style={{ marginRight: 7 }} />
          FaceBook
        </SocialLoginBtn>
        <SocialLoginBtn backgroundColor="#D54733">
          <FaGoogle style={{ marginRight: 7 }} />
          Google
        </SocialLoginBtn>
      </SocailLoginBtnContainer>
    </Container>
  );
};

export default SignUpForm;
