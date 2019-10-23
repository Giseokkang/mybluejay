import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { CHARACTER_COLOR, SKYBLUE, BORDER_COLOR } from "../utils/colors";

const dummy = {
  user: {
    name: "강기석",
    createAt: "2018.06.08",
    following: 3,
    follower: 5
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StickyContainer = styled.div`
  width: 100%;
  position: sticky;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 55px;
  margin-top: 20px;
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

const ProfileCard = () => {
  return (
    <Container>
      <StickyContainer>
        <Link href="/">
          <a>
            <BackIconContainer>
              <FaArrowLeft />
            </BackIconContainer>
          </a>
        </Link>
        <Name>{dummy.user.name}</Name>
      </StickyContainer>
      <ProfileBackground>
        <ProfileImage></ProfileImage>
      </ProfileBackground>
      <EditContainer>
        <EditBtn>프로필수정</EditBtn>
      </EditContainer>
      <InformationContainer>
        <Name>{dummy.user.name}</Name>
        <SignUpDate>가입일 : {dummy.user.createAt}</SignUpDate>
        <FollowContainer>
          <Follow>{dummy.user.following} 팔로잉</Follow>
          <Follow>{dummy.user.follower} 팔로워</Follow>
        </FollowContainer>
      </InformationContainer>
      <TabsContainer>
        <Tab>트윗</Tab>
        <Tab>트윗 및 답글</Tab>
        <Tab>마음에 들어요</Tab>
      </TabsContainer>
    </Container>
  );
};

export default ProfileCard;
