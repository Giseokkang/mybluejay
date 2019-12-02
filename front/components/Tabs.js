import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { CHARACTER_COLOR, SKYBLUE, BORDER_COLOR } from "../utils/colors";
import usePost from "../hooks/usePost";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import PostingCard from "../components/PostingCard";
import Comment from "./Comment";
import Link from "next/link";
import EmptyPosts from "./EmptyPosts";
import Loader from "react-loader-spinner";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 55px;
  margin-top: 20px;
  position: sticky;
  top: 55px;
  z-index: 9;
  background-color: white;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${CHARACTER_COLOR};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: ${props =>
    props.tabState ? `5px solid ${SKYBLUE}` : `1px solid ${BORDER_COLOR}`};

  &:hover {
    background-color: ${SKYBLUE};
    color: white;
  }
`;

const UserPostsContainer = styled.div``;

const Tabs = () => {
  const [tabState, setTabState] = useState("twit");
  const {
    post: { userPosts, userComments }
  } = usePost();

  const {
    onLoadUserPosts,
    onLoadUserComments,
    onLoadUserLikedPosts,
    post: { isLoading }
  } = usePost();
  const {
    user: {
      myInformation: { nickname }
    }
  } = useUser();
  const router = useRouter();
  const {
    query: { id },
    pathname
  } = router;

  const getUserPost = useCallback(() => {
    setTabState("twit");
    if (id) {
      return onLoadUserPosts(id);
    }
    return onLoadUserPosts(nickname);
  });

  const getUserComments = useCallback(() => {
    setTabState("comment");
    if (id) {
      return onLoadUserComments(id);
    }
    return onLoadUserComments(nickname);
  });

  const getUserPostLiked = useCallback(() => {
    setTabState("liked");
    if (id) {
      return onLoadUserLikedPosts(id);
    }
    return onLoadUserLikedPosts(nickname);
  });

  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <>
      <TabsContainer>
        <Tab
          onClick={() => {
            getUserPost();
          }}
          tabState={tabState === "twit"}
        >
          트윗
        </Tab>
        <Tab
          onClick={() => {
            getUserComments();
          }}
          tabState={tabState === "comment"}
        >
          답글
        </Tab>
        <Tab
          onClick={() => {
            getUserPostLiked();
          }}
          tabState={tabState === "liked"}
        >
          마음에 들어요
        </Tab>
      </TabsContainer>
      <UserPostsContainer>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px"
            }}
          >
            <Loader type="Oval" color={SKYBLUE} height={80} width={80} />
          </div>
        ) : userPosts && userPosts.length > 0 ? (
          userPosts.map(post => (
            <PostingCard post={post} key={post.id}></PostingCard>
          ))
        ) : userComments && userComments.length > 0 ? (
          userComments.map(comment => (
            <Link
              href="/post/[id]"
              as={`/post/${comment.PostId}`}
              key={comment.id}
            >
              <div>
                <Comment info={comment} />
              </div>
            </Link>
          ))
        ) : (
          userPosts && <EmptyPosts>게시글이 존재하지 않습니다.</EmptyPosts>
        )}
      </UserPostsContainer>
    </>
  );
};

export default Tabs;
