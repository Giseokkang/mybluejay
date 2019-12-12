import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import Textarea from "react-textarea-autosize";
import { FaPlus } from "react-icons/fa";
import usePost from "../hooks/usePost";
import useUser from "../hooks/useUser";
import { IoMdRemove } from "react-icons/io";
import Loader from "react-loader-spinner";
import { backUrl } from "../config/config";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  pointer-events: ${props => (props.isLoggedin ? null : "none")};
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

const FormContainer = styled.form`
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

  :disabled {
    background-color: white;
  }

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

const UploadImageContainer = styled.div`
  display: flex;
  overflow: scroll;
  width: 50%;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 150px;
  margin-left: 5px;
`;

const ImageDeleteIconContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  color: red;
  font-size: 2px;
  border: 1px solid red;
  border-radius: 50%;
  padding: 1px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const SubmitButton = styled.button`
  all: unset;
  position: absolute;
  background-color: #6fa1ff;
  color: white;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border-radius: 8px;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  opacity: ${props => (props.isAvailableUpload ? 1 : 0.8)};
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const UploadForm = () => {
  const [description, setDescription] = useState("");
  const [isAvailableUpload, setIsAvailableUpload] = useState(false);
  const {
    onAddPost,
    onUploadImage,
    onDeleteImage,
    post: { imagePaths },
    post
  } = usePost();
  const { user } = useUser();
  const imageInput = useRef();

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (description.length > 500) {
        alert("글자수가 너무 많아요.");
        return;
      }
      if (!description || !description.trim()) {
        return alert("글을 작성해주세요.");
      }
      const formData = new FormData();
      imagePaths.forEach(i => formData.append("image", i));
      formData.append("description", description);
      onAddPost(formData);
      setDescription("");
    },
    [description, imagePaths]
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

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    });

    onUploadImage(imageFormData);
  }, []);

  const onClickDeleteImage = useCallback(
    index => () => {
      onDeleteImage(index);
    },
    []
  );

  return (
    <Container isLoggedin={user.isLoggedin}>
      <TitleContainer>
        <Title>Home</Title>
      </TitleContainer>
      <FormContainer onSubmit={onSubmit} encType="multipart/form-data">
        <FormUpSideContainer>
          <ProfilePicture
            profileSrc={
              user.isLoggedin &&
              user.myInformation.Avatar &&
              user.myInformation.Avatar.profile_src
                ? user.myInformation.Avatar.profile_src
                : null
            }
          />
          <UploadInput
            placeholder={`${
              user.isLoggedin
                ? "오늘은 어떤 멋진일이 있었나요?"
                : "로그인 후 사용해주세요."
            }`}
            disabled={user.isLoggedin ? false : true}
            onChange={onChangeDescription}
            value={description}
          />
          <LimitCharacters color={description.length > 500 ? "red" : "black"}>
            {description.length} / 500
          </LimitCharacters>
          <input
            type="file"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          ></input>
          <IconContainer onClick={onClickImageUpload}>
            <FaPlus />
          </IconContainer>
          <SubmitButton isAvailableUpload={isAvailableUpload} type="submit">
            {post.isUploading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Loader
                  type="Oval"
                  color="#00BFFF"
                  height={18}
                  width={18}
                ></Loader>
              </div>
            ) : (
              "업로드"
            )}
          </SubmitButton>
        </FormUpSideContainer>
        {imagePaths && imagePaths.length > 0 && (
          <UploadImageContainer>
            {imagePaths.map((path, i) => (
              <ImgContainer key={path}>
                <Img
                  src={`${backUrl}${path}`}
                  style={{ width: "50px" }}
                  alt={path}
                />
                <ImageDeleteIconContainer onClick={onClickDeleteImage(i)}>
                  <IoMdRemove />
                </ImageDeleteIconContainer>
              </ImgContainer>
            ))}
          </UploadImageContainer>
        )}
      </FormContainer>
    </Container>
  );
};

export default UploadForm;
