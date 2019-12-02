import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import UploadForm from "../components/UploadForm";
import PostingCard from "../components/PostingCard";
import { BORDER_COLOR } from "../utils/colors";
import usePost from "../hooks/usePost";
import usePopUp from "../hooks/usePopUp";
import PopUp from "../components/PopUp";
import { useRouter } from "next/router";
import Link from "next/link";
import { loadMainPostsRequest } from "../reducers/post";
import ContentBox from "../components/ContentBox";

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
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: ${props => (props.isOnPopUp ? 0.2 : 1)};
`;

const GridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
`;

const MenuBox = styled.div``;

const FollowBox = styled.div``;

const Home = () => {
  const {
    onLoadPosts,
    post: { mainPosts }
  } = usePost();

  const { isOnPopUp } = usePopUp();
  const router = useRouter();

  return (
    <>
      {isOnPopUp && <PopUp></PopUp>}

      <Container isOnPopUp={isOnPopUp}>
        <GridContainer>
          <MenuBox></MenuBox>
          <ContentBox />
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

Home.getInitialProps = async context => {
  context.store.dispatch({
    type: loadMainPostsRequest().type
  });
};

export default Home;
