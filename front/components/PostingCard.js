import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { FaTrashAlt, FaRegCommentDots } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Link from "next/link";
import usePost from "../hooks/usePost";
import usePopUp from "../hooks/usePopUp";
import useUser from "../hooks/useUser";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { getFullDay } from "../utils/function";
import { backUrl } from "../config/config";

const Container = styled.div`
  width: 100%;
  max-height: 700px;
  border-bottom: 10px solid #e6ecf0;
  padding: 10px;

  cursor: ${props => (props.isPointerOn ? "pointer" : null)};

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
  max-width: 400px;
  width: 100%;

  height: 500px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 50px;
  margin-top: 10px; */

  justify-content: center;
  align-items: center;
`;

const Description = styled.span`
  width: 85%;
  padding-left: 10px;
  overflow: auto;
  min-height: 20px;
  margin-top: 20px;
  white-space: pre;
  line-height: 18px;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  }
`;

const ALink = styled.a`
  color: #0984e3;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const UnderSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikeAmount = styled.div`
  font-size: 16px;
  opacity: 0.8;
`;

const CommentAmount = styled.div`
  font-size: 16px;
  opacity: 0.8;
`;

const IconsContainer = styled.div`
  color: ${props => props.color};
  opacity: 0.7;
  padding: 7px;
  border-radius: 50%;
  font-size: 16px;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.backgroundColor};
    opacity: 1;
  }
`;

const PostingCard = ({ post }) => {
  const { onLikePost, onUnlikePost } = usePost();
  const { turnOnPopUp } = usePopUp();
  const { user } = useUser();
  const { pathname } = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    lazyLoad: false
  };
  return (
    post && (
      <>
        <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
          <Container isPointerOn={!pathname.includes("post")}>
            <PictureContainer>
              <Link href="/profile/[id]" as={`/profile/${post.User.nickname}`}>
                <a>
                  <ProfilePicture
                    profileSrc={
                      post.User.Avatar &&
                      post.User.Avatar.profile_src &&
                      post.User.Avatar.profile_src
                    }
                  />
                </a>
              </Link>
            </PictureContainer>
            <UpsideContainer>
              <PostingInfomationContainer>
                <div>
                  <Link
                    href="/profile/[id]"
                    as={`/profile/${post.User.nickname}`}
                  >
                    <a>
                      <Nickname>{post.User.nickname}</Nickname>
                    </a>
                  </Link>
                  <Time>{getFullDay(post.createdAt)}</Time>
                </div>
                {user.myInformation.id &&
                  post.UserId &&
                  user.myInformation.id === post.UserId && (
                    <DeleteBtn
                      onClick={e => {
                        e.stopPropagation();
                        turnOnPopUp({ postId: post.id });
                      }}
                    >
                      <FaTrashAlt />
                    </DeleteBtn>
                  )}
              </PostingInfomationContainer>
            </UpsideContainer>
            <ContentContainer>
              {post.Images && post.Images.length > 1 && (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <Slider
                      {...settings}
                      style={{
                        maxWidth: "400px",
                        width: "100%"
                      }}
                    >
                      {post.Images.map(image => (
                        <div key={image.src}>
                          <Image
                            imageUrl={`${backUrl}${image.src}`}
                            alt="image"
                            key={image.src}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </>
              )}
              {post.Images && post.Images.length === 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <Image
                    imageUrl={`${backUrl}${post.Images[0].src}`}
                    alt="image"
                    key={post.Images[0].src}
                  />
                </div>
              )}

              <Description>
                {post.content.split(/(#[^\s]+)/g).map(v => {
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
              <ItemContainer>
                {user &&
                user.isLoggedin &&
                post.Likers.find(
                  liker => liker.id === user.myInformation.id
                ) ? (
                  <IconsContainer
                    color="red"
                    backgroundColor="pink"
                    onClick={e => {
                      e.stopPropagation();
                      onUnlikePost(post.id);
                    }}
                  >
                    <IoIosHeart />
                  </IconsContainer>
                ) : (
                  <IconsContainer
                    color="red"
                    backgroundColor="pink"
                    onClick={e => {
                      e.stopPropagation();
                      onLikePost(post.id);
                    }}
                  >
                    <IoIosHeartEmpty />
                  </IconsContainer>
                )}
                <LikeAmount>{post.Likers.length}</LikeAmount>
              </ItemContainer>

              {post.Comments && (
                <ItemContainer>
                  <IconsContainer color="#3498db" backgroundColor="#74b9ff">
                    <FaRegCommentDots />
                  </IconsContainer>
                  <CommentAmount>{post.Comments.length}</CommentAmount>
                </ItemContainer>
              )}
            </UnderSideContainer>
          </Container>
        </Link>
      </>
    )
  );
};

export default PostingCard;
