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
  opacity: ${props => (props.isOnPopUp ? 0.2 : 1)};
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

const PostingBox = styled.div`
  overflow: scroll;
  height: calc(100vh - 247px);
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  }
`;

const FollowBox = styled.div``;

const Home = () => {
  const {
    onLoadPosts,
    post: { mainPosts }
  } = usePost();

  const { isOnPopUp } = usePopUp();
  const router = useRouter();

  useEffect(() => {
    onLoadPosts();
  }, []);

  return (
    <>
      {isOnPopUp && <PopUp></PopUp>}
      <Container isOnPopUp={isOnPopUp}>
        <GridContainer>
          <MenuBox />
          <ContentBox>
            <UploadForm></UploadForm>
            <PostingBox>
              {mainPosts &&
                mainPosts.length > 0 &&
                mainPosts.map(post => (
                  <PostingCard key={post.id} post={post}></PostingCard>
                ))}
            </PostingBox>
          </ContentBox>
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

export default Home;
