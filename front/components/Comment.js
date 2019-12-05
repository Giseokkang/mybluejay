import React from "react";
import styled, { keyframes } from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";
import { FaTimes, FaRegHeart } from "react-icons/fa";
import { getFullDay } from "../utils/function";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import usePopUp from "../hooks/usePopUp";

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
  max-height: 700px;
  border-bottom: 5px solid #e6ecf0;
  padding: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
  cursor: ${props => (props.isCursorOn ? "pointer" : null)};
  &:hover {
    background-color: #f4f8fa;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 100%;
  float: left;
`;

const UpsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
`;

const PostingInfomationContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 3px;
`;

const Nickname = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Time = styled.span`
  color: #657785;
  font-size: 16px;
  margin-left: 10px;
`;

const DeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e8537c;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
`;

const Image = styled.div`
  width: 85%;
  height: 500px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Description = styled.span`
  width: 85%;
  padding-left: 10px;
  margin-top: 10px;
  overflow: auto;
  min-height: 20px;
`;

const ALink = styled.a`
  color: #0984e3;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const UnderSideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconsContainer = styled.div`
  color: red;
  opacity: 0.7;
  padding: 10px;
  border-radius: 50%;
  font-size: 16px;
  transition: all 0.1s linear;
  &:hover {
    background-color: pink;
    opacity: 1;
  }
`;
const Comment = ({ info }) => {
  const { user } = useUser();
  const { turnOnPopUp } = usePopUp();
  // const { User, content, createdAt, id } = info;
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Container isCursorOn={pathname.includes("/profile")}>
        <PictureContainer>
          <Link href="/profile/[id]" as={`/profile/${info.User.nickname}`}>
            <a>
              <ProfilePicture
                profileSrc={
                  info.User.Avatar &&
                  info.User.Avatar.profile_src &&
                  info.User.Avatar.profile_src
                }
              />
            </a>
          </Link>
        </PictureContainer>
        <UpsideContainer>
          <PostingInfomationContainer>
            <div>
              <Link href="/profile/[id]" as={`/profile/${info.User.nickname}`}>
                <a>
                  <Nickname>{info.User.nickname}</Nickname>
                </a>
              </Link>
              <Time>{getFullDay(info.createdAt)}</Time>
            </div>
            {user.myInformation.id &&
              info.UserId &&
              user.myInformation.id === info.UserId && (
                <DeleteBtn
                  onClick={e => {
                    e.stopPropagation();
                    turnOnPopUp({ commentId: info.id });
                  }}
                >
                  <FaTimes />
                </DeleteBtn>
              )}
          </PostingInfomationContainer>
        </UpsideContainer>
        <ContentContainer>
          <Description>
            {info.content.split(/(#[^\s]+)/g).map(v => {
              if (v.match(/(#[^\s]+)/g)) {
                return (
                  <Link
                    href="/hashtag/[id]"
                    as={`/hashtag/${v.slice(1)}`}
                    key={v}
                  >
                    <ALink>{v}</ALink>
                  </Link>
                );
              } else {
                return v;
              }
            })}
          </Description>
        </ContentContainer>

        <UnderSideContainer>
          {/* <IconsContainer>
            <FaRegHeart />
          </IconsContainer> */}
        </UnderSideContainer>
      </Container>
    </>
  );
};

export default Comment;
