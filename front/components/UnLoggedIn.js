import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const UnLoggedIn = () => {
  return (
    <Container>
      <Link href="/login">
        <a>
          <Title>로그인 후 이용해주세요.</Title>
        </a>
      </Link>
    </Container>
  );
};

export default UnLoggedIn;
