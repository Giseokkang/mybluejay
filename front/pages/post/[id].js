import React from "react";
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

const PostDetail = () => {
  const { user } = useUser();

  const {
    post: { post },
    post: { comments }
  } = usePost();

  const { isOnPopUp } = usePopUp();

  return (
    <>
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

PostDetail.getInitialProps = async context => {
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

export default PostDetail;
