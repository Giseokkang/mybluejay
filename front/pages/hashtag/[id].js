import React, { useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import usePost from "../../hooks/usePost";
import usePopUp from "../../hooks/usePopUp";
import PopUp from "../../components/PopUp";
import PostingCard from "../../components/PostingCard";
import { BORDER_COLOR } from "../../utils/colors";
import { loadHashtagPostsRequest } from "../../reducers/post";
import EmptyPosts from "../../components/EmptyPosts";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";

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

const ContentBox = styled.div`
  border-right: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};
  background-color: white;
`;

const PostingBox = styled.div`
  /* overflow: scroll;
  height: calc(100vh - 247px); */
`;

const FollowBox = styled.div``;

const Hashtag = () => {
  const {
    post: { mainPosts, hasMorePosts, isLoading },
    onLoadHashtagPosts
  } = usePost();
  const router = useRouter();
  const {
    query: { id }
  } = router;

  const { isOnPopUp } = usePopUp();

  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (hasMorePosts) {
        onLoadHashtagPosts(id, mainPosts[mainPosts.length - 1].id);
      }
    }
  }, [mainPosts.length, hasMorePosts]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mainPosts.length, hasMorePosts]);

  return (
    <>
      {isOnPopUp && <PopUp></PopUp>}
      <Container isOnPopUp={isOnPopUp}>
        <GridContainer>
          <MenuBox />
          <ContentBox>
            <PostingBox>
              {mainPosts && mainPosts.length > 0 ? (
                mainPosts.map(post => (
                  <PostingCard key={post.id} post={post}></PostingCard>
                ))
              ) : (
                <EmptyPosts>게시글이 존재하지 않습니다.</EmptyPosts>
              )}
              {isLoading && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Loader
                    type="ThreeDots"
                    color="#008001"
                    height={80}
                    width={80}
                  />
                </div>
              )}
            </PostingBox>
          </ContentBox>
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

Hashtag.getInitialProps = async context => {
  const {
    query: { id }
  } = context;
  if (id) {
    context.store.dispatch({
      type: loadHashtagPostsRequest().type,
      payload: { tag: encodeURIComponent(id) }
    });
  }
};

export default Hashtag;
