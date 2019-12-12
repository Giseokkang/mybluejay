import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { CHARACTER_COLOR, SKYBLUE, BORDER_COLOR } from "../utils/colors";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import Tabs from "./Tabs";
import usePost from "../hooks/usePost";
import { getFullDay } from "../utils/function";
import ImageZoom from "./ImageZoom";
import { backUrl } from "../config/config";

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
  /* border-bottom: 2px solid ${BORDER_COLOR}; */
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

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

  background-image: url(${props => props.backgroundSrc});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
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
  background-image: url(${props => props.profileSrc});
  background-size: cover;
  background-position: center center;

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

const Btn = styled.div`
  width: 120px;
  height: 30px;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.8;
  cursor: pointer;

  transition: all 0.1s linear;

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
  cursor: pointer;
`;

const ProfileCard = ({ info }) => {
  const [isZoom, setIsZoom] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const {
    pathname,
    query: { id }
  } = useRouter();
  const {
    user,
    onFollowUserRequest,
    onUnfollowUserRequest,
    turnOnSetting,
    user: { peopleInformation },
    onLoadFollowRequest
  } = useUser();

  const onClickOnSetting = useCallback(() => {
    turnOnSetting();
  }, []);

  const onClickFollowList = useCallback(() => {
    if (id) {
      onLoadFollowRequest(encodeURIComponent(id));
    } else {
      onLoadFollowRequest(encodeURIComponent(user.myInformation.nickname));
    }
  }, []);

  const isMine = pathname === "/profile" || id === user.myInformation.nickname;

  return (
    info && (
      <>
        {isZoom && (
          <ImageZoom imageUrl={imageUrl} setIsZoom={setIsZoom}></ImageZoom>
        )}
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
          <ProfileBackground
            backgroundSrc={
              info.Avatar &&
              info.Avatar.background_src &&
              info.Avatar.background_src
                ? `${backUrl}${info.Avatar.background_src}`
                : null
            }
            onClick={() => {
              if (info.Avatar.background_src) {
                setImageUrl(info.Avatar.background_src);
                setIsZoom(true);
              }
            }}
          >
            <ProfileImage
              profileSrc={
                info.Avatar &&
                info.Avatar.profile_src &&
                info.Avatar.profile_src
                  ? `${backUrl}${info.Avatar.profile_src}`
                  : null
              }
              onClick={e => {
                e.stopPropagation();
                if (info.Avatar.profile_src) {
                  setImageUrl(info.Avatar.profile_src);
                  setIsZoom(true);
                }
              }}
            ></ProfileImage>
          </ProfileBackground>
          <EditContainer>
            {user.isLoggedin ? (
              isMine ? (
                <Btn backgroundColor={SKYBLUE} onClick={onClickOnSetting}>
                  프로필수정
                </Btn>
              ) : user.myInformation.Followings &&
                user.myInformation.Followings.find(
                  v => v.id === peopleInformation.id
                ) ? (
                <Btn
                  backgroundColor="#ff4757"
                  onClick={() => {
                    onUnfollowUserRequest(decodeURIComponent(id));
                  }}
                >
                  언팔로우
                </Btn>
              ) : (
                <Btn
                  backgroundColor={SKYBLUE}
                  onClick={() => {
                    onFollowUserRequest(decodeURIComponent(id));
                  }}
                >
                  팔로우
                </Btn>
              )
            ) : null}
          </EditContainer>
          <InformationContainer>
            <Name>{info.nickname}</Name>
            <SignUpDate>가입일 :{getFullDay(info.createdAt)}</SignUpDate>
            <FollowContainer>
              <Follow onClick={onClickFollowList}>
                팔로잉 {info.Followings ? info.Followings.length : 0}
              </Follow>
              <Follow onClick={onClickFollowList}>
                팔로워 {info.Followers ? info.Followers.length : 0}
              </Follow>
            </FollowContainer>
          </InformationContainer>
          <Tabs></Tabs>
        </Container>
      </>
    )
  );
};

export default ProfileCard;
