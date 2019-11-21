import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import useUser from "../hooks/useUser";
import usePost from "../hooks/usePost";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  /* pointer-events: ${props => (props.isLoggedin ? null : "none")}; */
  display:flex;
  justify-content:center;
  align-items:center;
`;

const FormContainer = styled.form`
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const UploadInput = styled(Textarea)`
  margin-left: 10px;
  width: 85%;
  border: none;
  font-size: 16px;
  min-height: 30px;
  max-height: 300px;

  &:focus {
    outline: none;
  }
`;

const LimitCharacters = styled.span`
  font-size: 10px;
  opacity: 0.5;
  position: absolute;
  bottom: 45px;
  right: 15px;
  color: ${props => props.color};
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const SubmitButton = styled.button`
  position: absolute;
  background-color: #6fa1ff;
  color: white;
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border-radius: 8px;
  bottom: 10px;
  right: 5px;
  cursor: pointer;
  opacity: ${props => (props.isAvailableUpload ? 1 : 0.6)};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }
`;

const CommentUpload = () => {
  const [description, setDescription] = useState("");
  const [isAvailableUpload, setIsAvailableUpload] = useState(false);
  const { user } = useUser();
  const { onAddComment } = usePost();
  const router = useRouter();
  const {
    query: { id: postId }
  } = router;

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (description.length > 500) {
        alert("글자수가 너무 많아요.");
        return;
      }
      if (!description || !description.trim()) {
        return alert("댓글을 작성해주세요.");
      }
      onAddComment(parseInt(postId), description);
      setDescription("");
    },
    [description]
  );

  const onChangeDescription = useCallback(
    e => {
      const {
        target: { value }
      } = e;
      setDescription(value);
      if (value.trim()) {
        setIsAvailableUpload(true);
      } else if (value.length === 0 || value.length > 500) {
        setIsAvailableUpload(false);
      }
    },
    [description]
  );

  return (
    <Container>
      <FormContainer onSubmit={onSubmit}>
        <UploadInput
          placeholder={`${
            user.isLoggedin ? "댓글을 남겨주세요." : "로그인 후 사용해주세요."
          }`}
          disabled={user.isLoggedin ? false : true}
          onChange={onChangeDescription}
          value={description}
        ></UploadInput>

        <SubmitButton isAvailableUpload={isAvailableUpload} type="submit">
          제출
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default CommentUpload;
