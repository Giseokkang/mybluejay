import styled, { keyframes } from "styled-components";
import React from "react";
import usePost from "../hooks/usePost";
import usePopUp from "../hooks/usePopUp";
import Router, { useRouter } from "next/router";

const transform = keyframes`
  from{
    transform:scale(0.1)
  }
  to{
    transform:scale(1)
  }
  `;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9;
`;

const PopUpContainer = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  margin-top: 170px;
  animation: ${transform} 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.span`
  margin-top: 10px;
  font-size: 20px;
`;

const Description = styled.span`
  font-size: 15px;
  margin-top: 10px;
`;

const BtnContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
`;

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 30px;
  background-color: ${props => props.backgroundColor};
  color: white;
  -webkit-text-fill-color: white;

  border-radius: 10px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const PopUp = () => {
  const { onDeletePost, onDeleteComment } = usePost();
  const { id, turnOffPopUp } = usePopUp();
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container onClick={turnOffPopUp}>
      <PopUpContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Title>정말로 진행하시겠습니까?</Title>
        <Description>삭제된 데이터는 복구되지 않습니다.</Description>
        <BtnContainer>
          <Button
            backgroundColor="#74b9ff"
            onClick={() => {
              if (id.postId) {
                onDeletePost(id.postId);
                turnOffPopUp();
                if (pathname.includes("post")) {
                  Router.push("/");
                }
              }
              if (id.commentId) {
                onDeleteComment(id.commentId);
                turnOffPopUp();
              }
            }}
          >
            확인
          </Button>
          <Button backgroundColor="#ff7675" onClick={() => turnOffPopUp()}>
            취소
          </Button>
        </BtnContainer>
      </PopUpContainer>
    </Container>
  );
};

export default PopUp;
