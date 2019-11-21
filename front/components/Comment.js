import React from "react";
import styled, { keyframes } from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";

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
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;

  transition: all 0.2s linear;
  &:hover {
    background-color: #e0effa;
  }
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
  const { User, content, createdAt, id } = info;
  return (
    <>
      <Container>
        <PictureContainer>
          <Link href="/profile/[id]" as={`/profile/${User.nickname}`}>
            <a>
              <ProfilePicture />
            </a>
          </Link>
        </PictureContainer>
        <UpsideContainer>
          <PostingInfomationContainer>
            <div>
              <Link href="/profile/[id]" as={`/profile/${User.nickname}`}>
                <a>
                  <Nickname>{User.nickname}</Nickname>
                </a>
              </Link>
              <Time>{createdAt}</Time>
            </div>
            {/* {user.myInformation.id &&
              userId &&
              user.myInformation.id === userId && (
                <DeleteBtn
                  onClick={e => {
                    e.stopPropagation();
                    turnOnPopUp(id);
                  }}
                >
                  <FaTrashAlt />
                </DeleteBtn>
              )} */}
          </PostingInfomationContainer>
        </UpsideContainer>
        <ContentContainer>
          <Description>
            {content.split(/(#[^\s]+)/g).map(v => {
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
          <IconsContainer>
            <FaRegHeart />
          </IconsContainer>
        </UnderSideContainer>
      </Container>
    </>
  );
};

export default Comment;
