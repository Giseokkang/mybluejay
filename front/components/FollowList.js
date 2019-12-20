import React, { useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { BORDER_COLOR, SKYBLUE, CHARACTER_COLOR } from "../utils/colors";
import ProfilePicture from "./ProfilePicture";
import useUser from "../hooks/useUser";
import Link from "next/link";
import device from "../utils/device";

const transform = keyframes`
  from{
    transform:scale(0.1)
  }
  to{
    transform:scale(1)
  }
  `;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9;
`;

const FollowListContainer = styled.div`
  min-height: 200px;
  max-height: 400px;
  width: 400px;
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  margin-top: 170px;
  animation: ${transform} 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid ${BORDER_COLOR};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const Tab = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${CHARACTER_COLOR};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-bottom: ${props =>
    props.tabState ? `4px solid ${SKYBLUE}` : `1px solid ${BORDER_COLOR}`};

  &:hover {
    background-color: ${SKYBLUE};
    color: white;
  }
`;

const ItemContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

const UserContainer = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 15px 0 15px 0;
`;

const AvatarContainer = styled.div`
  float: left;
`;

const Nickname = styled.span`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const EmptyFollow = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  margin-top: 30px;
`;

const FollowList = () => {
  const { user, onTurnOffFollowList } = useUser();

  const [tabState, setTabState] = useState("following");

  const onFolloingClick = useCallback(() => {
    setTabState("following");
  }, []);

  const onFollowerClick = useCallback(() => {
    setTabState("follower");
  }, []);

  return (
    <Container onClick={onTurnOffFollowList}>
      <FollowListContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <MenuContainer>
          <Tab
            tabState={tabState === "following"}
            style={{ borderTopLeftRadius: "20px" }}
            onClick={onFolloingClick}
          >
            팔로잉
          </Tab>
          <Tab
            tabState={tabState === "follower"}
            style={{ borderTopRightRadius: "20px" }}
            onClick={onFollowerClick}
          >
            팔로워
          </Tab>
        </MenuContainer>
        <ItemContainer>
          {tabState === "following" &&
            (user.followingList && user.followingList.length > 0 ? (
              user.followingList.map(v => (
                <UserContainer key={v.id}>
                  <Link href="/profile/[id]" as={`/profile/${v.nickname}`}>
                    <a>
                      <AvatarContainer onClick={onTurnOffFollowList}>
                        <ProfilePicture
                          profileSrc={v.Avatar ? v.Avatar.profile_src : null}
                        />
                      </AvatarContainer>
                    </a>
                  </Link>
                  <Link href="/profile/[id]" as={`/profile/${v.nickname}`}>
                    <a>
                      <Nickname onClick={onTurnOffFollowList}>
                        {v.nickname}
                      </Nickname>
                    </a>
                  </Link>
                </UserContainer>
              ))
            ) : (
              <EmptyFollow>없습니다.</EmptyFollow>
            ))}
          {tabState === "follower" &&
            (user.followerList && user.followerList.length > 0 ? (
              user.followerList.map(v => (
                <UserContainer key={v.id}>
                  <Link href="/profile/[id]" as={`/profile/${v.nickname}`}>
                    <a>
                      <AvatarContainer onClick={onTurnOffFollowList}>
                        <ProfilePicture
                          profileSrc={v.Avatar ? v.Avatar.profile_src : null}
                        />
                      </AvatarContainer>
                    </a>
                  </Link>
                  <Link href="/profile/[id]" as={`/profile/${v.nickname}`}>
                    <a>
                      <Nickname onClick={onTurnOffFollowList}>
                        {v.nickname}
                      </Nickname>
                    </a>
                  </Link>{" "}
                </UserContainer>
              ))
            ) : (
              <EmptyFollow>없습니다.</EmptyFollow>
            ))}
        </ItemContainer>
      </FollowListContainer>
    </Container>
  );
};

export default FollowList;
