import React, { useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import UploadForm from "./UploadForm";
import usePost from "../hooks/usePost";
import { BORDER_COLOR } from "../utils/colors";
import PostingCard from "./PostingCard";
import Loader from "react-loader-spinner";

const Container = styled.div`
  border-right: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};
  background-color: white;
`;

const PostingBox = styled.div`
  overflow: scroll;
  /* height: calc(100vh - 247px);
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  } */
`;

const ContentBox = () => {
  const {
    post: { mainPosts, hasMorePosts, isLoading },
    onLoadPosts
  } = usePost();
  const countRef = useRef([]);

  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (mainPosts.length > 0 && hasMorePosts) {
        const lastId = mainPosts[mainPosts.length - 1].id;

        if (!countRef.current.includes(lastId)) {
          onLoadPosts(lastId);
        }
        countRef.current.push(lastId);
      }
    }
  }, [mainPosts.length, hasMorePosts]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePosts]);
  return (
    <Container>
      <UploadForm></UploadForm>
      <PostingBox>
        {mainPosts &&
          mainPosts.length > 0 &&
          mainPosts.map(post => (
            <PostingCard key={post.id} post={post}></PostingCard>
          ))}
      </PostingBox>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader type="ThreeDots" color="#008001" height={80} width={80} />
        </div>
      )}
    </Container>
  );
};

export default ContentBox;
