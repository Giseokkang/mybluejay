import React from "react";
import Helmet from "react-helmet";
import styled, { keyframes } from "styled-components";
import usePost from "../../hooks/usePost";
import usePopUp from "../../hooks/usePopUp";
import PopUp from "../../components/PopUp";
import PostingCard from "../../components/PostingCard";
import { BORDER_COLOR } from "../../utils/colors";
import Comment from "../../components/Comment";
import CommentUpload from "../../components/CommentUpload";
import useUser from "../../hooks/useUser";
import { loadPostRequest, loadCommentsRequest } from "../../reducers/post";
import device from "../../utils/device";
import { fadeIn } from "../../utils/animations";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: ${props => (props.isOnPopUp ? 0.2 : 1)};
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

  @media ${device.mobileL} {
    grid-template-columns: 0 1fr 0%;
    width: 100%;
    display: flex;
  }
`;

const MenuBox = styled.div``;

const ContentBox = styled.div`
  border-right: 1px solid ${BORDER_COLOR};
  border-left: 1px solid ${BORDER_COLOR};
  background-color: white;
`;

const CommentBox = styled.div`
  overflow: scroll;
  height: calc(100vh - 247px);
`;

const FollowBox = styled.div``;

const Post = () => {
  const { user } = useUser();

  const {
    post: { post },
    post: { comments }
  } = usePost();

  const { isOnPopUp } = usePopUp();

  return (
    <>
      {post && (
        <Helmet
          title={`${post.User.nickname}님의 글`}
          description={post.content}
          meta={[
            { name: "description", content: post.content },
            {
              name: "og:title",
              content: `${post.User.nickname}님의 글`
            },
            {
              name: "og:description",
              content: post.content
            },
            {
              name: "og:image",
              content:
                post.Images[0] && `http://localhost:8000/${post.Images[0].src}`
            },
            {
              name: "og:url",
              content: `http://localhost:3000/post/${post.id}`
            }
          ]}
        />
      )}

      {isOnPopUp && <PopUp></PopUp>}
      <Container isOnPopUp={isOnPopUp}>
        <GridContainer>
          <MenuBox />
          <ContentBox>
            {post && <PostingCard post={post}></PostingCard>}
            <CommentBox>
              {user && user.isLoggedin && <CommentUpload />}
              {comments &&
                comments.length > 0 &&
                comments.map(comment => (
                  <Comment info={comment} key={comment.id} />
                ))}
            </CommentBox>
          </ContentBox>
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

Post.getInitialProps = async context => {
  const {
    query: { id }
  } = context;
  if (id) {
    context.store.dispatch({
      type: loadPostRequest().type,
      payload: encodeURIComponent(id)
    });
    context.store.dispatch({
      type: loadCommentsRequest().type,
      payload: encodeURIComponent(id)
    });
  }
};

export default Post;
