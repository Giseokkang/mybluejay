import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { CHARACTER_COLOR, SKYBLUE, BORDER_COLOR } from "../utils/colors";
import usePost from "../hooks/usePost";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 55px;
  margin-top: 20px;
  position: sticky;
  top: 54px;
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
  border-bottom: 1px solid ${BORDER_COLOR};

  &:hover {
    background-color: ${SKYBLUE};
    color: white;
  }
`;

export default () => {
  const { onLoadUserPosts, post } = usePost();
  const {
    user: {
      myInformation: { nickname }
    }
  } = useUser();
  const router = useRouter();
  const {
    query: { id }
  } = router;

  const getUserPost = useCallback(() => {
    if (id) {
      return onLoadUserPosts(id);
    }
    return onLoadUserPosts(nickname);
  });

  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <TabsContainer>
      <Tab
        onClick={() => {
          getUserPost();
        }}
      >
        트윗
      </Tab>
      <Tab>트윗 및 답글</Tab>
      <Tab>마음에 들어요</Tab>
    </TabsContainer>
  );
};
