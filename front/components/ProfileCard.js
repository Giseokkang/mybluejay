import React, { useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { CHARACTER_COLOR, SKYBLUE, BORDER_COLOR } from "../utils/colors";
import useUser from "../hooks/useUser";
import useOthers from "../hooks/useOthers";
import { useRouter } from "next/router";
import PostingCard from "./PostingCard";
import Tabs from "./Tabs";
import usePost from "../hooks/usePost";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StickyContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 9;
  background-color: white;
  border-bottom: 2px solid ${BORDER_COLOR};
`;

const BackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #1ea1f1;
  padding: 5px;
  border-radius: 50%;
  font-size: 18px;
  margin-right: 20px;

  &:hover {
    background-color: #eaf5fe;
  }
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ProfileBackground = styled.div`
  position: relative;
  height: 200px;
  background-color: gray;
`;

const ProfileImage = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  border: 5px solid white;
  border-radius: 50%;
  background-color: skyblue;
  bottom: -70px;
  left: 20px;

  cursor: pointer;
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  margin-right: 20px;
  color: white;
`;

const EditBtn = styled.div`
  width: 120px;
  height: 30px;
  padding: 10px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
`;

const SignUpDate = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${CHARACTER_COLOR};
`;

const FollowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${CHARACTER_COLOR};
`;

const Follow = styled.span`
  margin-right: 10px;
`;

const UserPostsContainer = styled.div``;

const ProfileCard = ({ info }) => {
  const { pathname } = useRouter();
  const {
    post: { userPosts }
  } = usePost();

  const isMine = pathname === "/profile";

  return (
    info && (
      <Container>
        <StickyContainer>
          <Link href="/">
            <a>
              <BackIconContainer>
                <FaArrowLeft />
              </BackIconContainer>
            </a>
          </Link>
          <Name>{info.nickname}</Name>
        </StickyContainer>
        <ProfileBackground>
          <ProfileImage></ProfileImage>
        </ProfileBackground>
        <EditContainer>{isMine && <EditBtn>프로필수정</EditBtn>}</EditContainer>
        <InformationContainer>
          <Name>{info.nickname}</Name>
          <SignUpDate>가입일 :{info.createdAt}</SignUpDate>
          <FollowContainer>
            <Follow>
              {info.following}
              팔로잉
            </Follow>
            <Follow>
              {info.follower}
              팔로워
            </Follow>
          </FollowContainer>
        </InformationContainer>
        <Tabs></Tabs>
        <UserPostsContainer>
          {userPosts &&
            userPosts.map(post => (
              <PostingCard
                id={post.id}
                userId={post.userId}
                nickname={post.User.nickname}
                createdAt={post.createdAt}
                images={post.Images}
                content={post.content}
                Likers={post.Likers}
              ></PostingCard>
            ))}
        </UserPostsContainer>
      </Container>
    )
  );
};

export default ProfileCard;
