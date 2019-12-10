import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/signUpForm";
import useUser from "../hooks/useUser";
import Router from "next/router";
import { fadeIn } from "../utils/animations";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  background: #74ebd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #acb6e5,
    #74ebd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #acb6e5,
    #74ebd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  animation: ${fadeIn} 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const signup = () => {
  const {
    user: { isLoggedin }
  } = useUser();

  useEffect(() => {
    if (isLoggedin) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      {isLoggedin ? null : (
        <Container>
          <SignUpForm></SignUpForm>
        </Container>
      )}
    </>
  );
};

export default signup;
