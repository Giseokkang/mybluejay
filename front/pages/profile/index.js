import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileCard from "../../components/ProfileCard";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import Setting from "../../components/Setting";
import usePopUp from "../../hooks/usePopUp";
import PopUp from "../../components/PopUp";
import FollowList from "../../components/FollowList";
import device from "../../utils/device";
import { fadeIn } from "../../utils/animations";
import UnLoggedIn from "../../components/unLoggedIn";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: ${props =>
    props.isOnPopUp || props.isSettingOn || props.isFollowListOn ? 0.2 : 1};
`;

const GridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-gap: 0;
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 0;
    width: 100%;
  }

  @media ${device.mobileL} {
    grid-template-columns: 0 1fr 0;
    width: 100%;
    display: flex;
  }
`;

const MenuBox = styled.div``;

const ContentBox = styled.div`
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  background-color: white;

  @media ${device.mobileL} {
    width: 100%;
  }

  /* height: calc(100vh - 77px);
  overflow: scroll;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  } */
`;

const FollowBox = styled.div``;

const Profile = () => {
  const {
    pathname,
    query: { id }
  } = useRouter();
  const { user, onLoadOtherRequest } = useUser();
  const { isOnPopUp } = usePopUp();

  const {
    user: { isSettingOn }
  } = useUser();

  const isMine = pathname === "/profile";

  useEffect(() => {
    if (id) {
      onLoadOtherRequest(encodeURIComponent(id));
    }
  }, []);

  return (
    <>
      {isSettingOn && <Setting></Setting>}
      {isOnPopUp && <PopUp></PopUp>}
      {user.isFollowListOn && <FollowList></FollowList>}
      <Container
        isOnPopUp={isOnPopUp}
        isSettingOn={isSettingOn}
        isFollowListOn={user.isFollowListOn}
      >
        <GridContainer>
          <MenuBox />
          <ContentBox>
            {!id ? (
              user.isLoggedin ? (
                <ProfileCard info={user.myInformation} />
              ) : (
                <UnLoggedIn></UnLoggedIn>
              )
            ) : (
              <ProfileCard info={user.peopleInformation} />
            )}
          </ContentBox>
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

export default Profile;
