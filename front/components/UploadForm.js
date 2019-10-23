import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Textarea from "react-textarea-autosize";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: 700;
  margin-left: 20px;
`;

const FormContainer = styled.div`
  width: 100%;
  min-height: 120px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FormUpSideContainer = styled.div`
  display: flex;
`;

const UploadInput = styled(Textarea)`
  margin-left: 10px;
  width: 90%;
  border: none;
  font-size: 16px;
  min-height: 50px;
  max-height: 300px;
  margin-bottom: 50px;

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
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 85px;
  color: #6fa1ff;
  font-size: 14px;
  border: 3px solid #6fa1ff;
  border-radius: 50%;
  padding: 3px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
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
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  opacity: ${props => (props.isAvailableUpload ? 1 : 0.6)};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
  }
`;

const UploadForm = () => {
  const [description, setDescription] = useState("");
  const [isAvailableUpload, setIsAvailableUpload] = useState(false);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (description.length > 500) {
        alert("글자수가 너무 많아요.");
      }
      console.log(description);
    },
    [description]
  );

  const onChangeDescription = useCallback(
    e => {
      const {
        target: { value }
      } = e;
      console.log(value.length);
      setDescription(value);
      if (value.length > 0) {
        setIsAvailableUpload(true);
      } else if (value.length === 0 || value.length > 500) {
        setIsAvailableUpload(false);
      }
    },
    [description]
  );

  return (
    <Container>
      <TitleContainer>
        <Title>Home</Title>
      </TitleContainer>
      <FormContainer onSubmit={onSubmit}>
        <FormUpSideContainer>
          <ProfilePicture />
          <UploadInput
            placeholder="오늘은 어떤 멋진일이 있었나요?"
            onChange={onChangeDescription}
            value={description}
          />
          <LimitCharacters color={description.length > 500 ? "red" : "black"}>
            {description.length} / 500
          </LimitCharacters>
          <IconContainer>
            <FaPlus />
          </IconContainer>

          <SubmitButton isAvailableUpload={isAvailableUpload}>
            업로드
          </SubmitButton>
        </FormUpSideContainer>
      </FormContainer>
    </Container>
  );
};

export default UploadForm;
