import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";

const dummy = {
  user: {
    id: 1,
    name: "강기석"
  },
  post: {
    description:
      "ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이ㅁㄴㅇㄹㄴㅁ어ㅗ류ㅏㅁㄴ어ㅗㅠㄹ머나오ㅠ리ㅓㅁ노율미ㅓ노ㅠㅇ리머ㅗㄴ유리ㅗㅓㅁㄴㅇ륨ㄴ이",
    createAt: "2018.06.07"
  }
};

const Container = styled.div`
  width: 100%;
  height: 150px;
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
  height: 80px;
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

const Description = styled.span`
  width: 85%;
  padding-left: 10px;
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

const PostingCard = () => {
  return (
    <Container>
      <PictureContainer>
        <ProfilePicture />
      </PictureContainer>
      <UpsideContainer>
        <PostingInfomationContainer>
          <div>
            <Nickname>{dummy.user.name}</Nickname>
            <Time>{dummy.post.createAt}</Time>
          </div>
          <DeleteBtn>
            <FaTrashAlt />
          </DeleteBtn>
        </PostingInfomationContainer>
        <Description>
          {dummy.post.description.length > 100
            ? `${dummy.post.description.substring(0, 100)}...`
            : dummy.post.description}
        </Description>
      </UpsideContainer>
      <UnderSideContainer>
        <IconsContainer>
          <FaRegHeart />
        </IconsContainer>
      </UnderSideContainer>
    </Container>
  );
};

export default PostingCard;
