import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 100%;
  float: left;
`;

const CommentContainer = styled.div`
  width: 95%;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserNickname = styled.span``;

const Content = styled.span`
  margin-top: 10px;
  overflow: scroll;
`;

const Comment = ({ nickname }) => {
  return (
    <Container>
      <CommentContainer>
        <PictureContainer>
          <Link href="/profile/[id]" as={`/profile/${nickname}`}>
            <a>
              <ProfilePicture />
            </a>
          </Link>
        </PictureContainer>
        <ContentContainer>
          <UserNickname>닉네임</UserNickname>
          <Content>asdsad</Content>
        </ContentContainer>
      </CommentContainer>
    </Container>
  );
};

export default Comment;
