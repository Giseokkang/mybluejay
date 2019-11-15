import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import usePost from "../hooks/usePost";
import usePopUp from "../hooks/usePopUp";
import PopUp from "../components/PopUp";
import useUser from "../hooks/useUser";

// const dummy = {
//   user: {
//     id: 1,
//     name: "강기석"
//   },
//   post: {
//     description: "첫 개시글 !",
//     imageUrl:
//       "https://image.tmdb.org/t/p/original/btpvGjqLBHgRnobKGlzbBD4jzmf.jpg",
//     createAt: "2018.06.07"
//   }
// };

const Container = styled.div`
  width: 100%;
  max-height: 700px;
  border-bottom: 10px solid #e6ecf0;
  padding: 10px;
  cursor: pointer;
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
  height: 50px;
`;

const PostingInfomationContainer = styled.div`
  width: 100%;
  height: 30px;
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
`;

const ALink = styled.a`
  color: #0984e3;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const UnderSideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
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

const PostingCard = ({
  id,
  userId,
  nickname,
  createdAt,
  imageUrl,
  content
}) => {
  const { onDeletePost } = usePost();
  const { isOnPopUp, turnOnPopUp, turnOffPopUp } = usePopUp();
  const { user } = useUser();

  return (
    <>
      <Link href="/post/[id]" as={`/post/${id}`} key={id}>
        <Container>
          <PictureContainer>
            <Link href="/profile/[id]" as={`/profile/${nickname}`}>
              <a>
                <ProfilePicture />
              </a>
            </Link>
          </PictureContainer>
          <UpsideContainer>
            <PostingInfomationContainer>
              <div>
                <Link href="/profile/[id]" as={`/profile/${nickname}`}>
                  <a>
                    <Nickname>{nickname}</Nickname>
                  </a>
                </Link>
                <Time>{createdAt}</Time>
              </div>
              {user.myInformation.id &&
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
                )}
            </PostingInfomationContainer>
          </UpsideContainer>
          <ContentContainer>
            {imageUrl ? <Image imageUrl={imageUrl} /> : null}
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
      </Link>
    </>
  );
};

export default PostingCard;
