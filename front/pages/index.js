import React from "react";
import styled, { keyframes } from "styled-components";
import UploadForm from "../components/UploadForm";
import PostingCard from "../components/PostingCard";
import { BORDER_COLOR } from "../utils/colors";

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to {
    opacity:1;
  }
  `;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 77px);
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const GridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
`;

const MenuBox = styled.div``;

const ContentBox = styled.div`
  border-right: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};
`;

const FollowBox = styled.div``;

const home = () => {
  return (
    <>
      <Container>
        <GridContainer>
          <MenuBox />
          <ContentBox>
            <UploadForm></UploadForm>
            <PostingCard />
            <PostingCard />
          </ContentBox>
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

export default home;
