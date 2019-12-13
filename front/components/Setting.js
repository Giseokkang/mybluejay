import React, { useState, useCallback, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { BORDER_COLOR, SKYBLUE } from "../utils/colors";
import { IoMdArrowRoundBack } from "react-icons/io";
import useUser from "../hooks/useUser";
import { MdClear } from "react-icons/md";
import img from "react-image";
import Loader from "react-loader-spinner";

const fadeIn = keyframes`
  0%{
    opacity:0;
    
    transform:translateY(500px) scale(0.1)
  }
  100% {
    opacity:1;
    transform:translateY(0)
  }
  `;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: fixed;
`;

const EditorContainer = styled.form`
  width: 600px;
  height: 650px;
  /* border: 1px solid black; */
  border-radius: 15px;
  background-color: white;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const TitleContainer = styled.div`
  width: 95%;
  height: 60px;
  border-bottom: 1px solid ${BORDER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackIcon = styled.div`
  font-size: 25px;
  color: ${SKYBLUE};
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const SaveBtn = styled.button`
  all: unset;
  width: 45px;
  height: 25px;
  padding: 4px 5px;
  background-color: ${props => (props.isAvailableSet ? SKYBLUE : "gray")};
  pointer-events: ${props => (props.isAvailableSet ? null : "none")};
  border-radius: 5px;
  color: white;
  -webkit-text-fill-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const ProfileBackground = styled(img)`
  width: 100%;
  height: 200px;
  background-color: gray;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const BackgrounImageDeleteIconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 25px;
  padding: 1px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const ProfileImage = styled(img)`
  width: 130px;
  height: 130px;
  position: absolute;
  border: 5px solid white;
  border-radius: 50%;
  background-color: skyblue;
  top: 195px;
  left: 20px;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;

  cursor: pointer;
`;

const ProfileImageDeleteIconContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: -10px;
  font-size: 23px;
  padding: 1px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const NicknameContainer = styled.div`
  width: 90%;
  height: 50px;
  background-color: #f5f8fa;
  margin-top: 100px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const NicknameTitle = styled.span`
  position: absolute;
  top: 3px;
  left: 5px;
  font-weight: 600;
  font-size: 16px;
`;

const NicknameInput = styled.input`
  all: unset;
  width: 100%;
  height: 30px;
  padding: 0 15px 0 15px;
  margin-top: 20px;
  border-bottom: 3px solid gray;
  font-size: 16px;
  &:focus,
  &:hover {
    border-bottom: 3px solid ${SKYBLUE};
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
  bottom: 2px;
  right: 2px;
`;

const Setting = () => {
  const {
    user: { myInformation },
    onUploadBackgroundImageRequest,
    onUploadProfileImageRequest,
    onEditUserRequest,
    onDeleteBackgroundImageRequest,
    onDeleteProfileImageRequest,
    turnOffSetting
  } = useUser();

  const backgroundImageInput = useRef();
  const profileImageInput = useRef();

  const [nickname, setNickname] = useState(myInformation.nickname);
  const [isAvailableSet, setIsAvailableSet] = useState(true);

  const onSumbit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("nickname", nickname);
      if (myInformation.backgroundImage) {
        formData.append("background", myInformation.backgroundImage);
      }
      if (myInformation.profileImage) {
        formData.append("profileImage", myInformation.profileImage);
      }

      onEditUserRequest(formData);
    },
    [nickname, myInformation.backgroundImage, myInformation.profileImage]
  );

  const onClickBackgroundImageUpload = useCallback(() => {
    backgroundImageInput.current.click();
  }, [backgroundImageInput.current]);

  const onClickProfileImageUpload = useCallback(() => {
    profileImageInput.current.click();
  }, [profileImageInput.current]);

  const onChangeBackgroundImage = useCallback(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("background", f);
    });

    onUploadBackgroundImageRequest(imageFormData);
  }, []);

  const onChangeProfileImage = useCallback(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("avatar", f);
    });

    onUploadProfileImageRequest(imageFormData);
  }, []);

  const onChangeNickname = useCallback(
    e => {
      const {
        target: { value }
      } = e;
      setNickname(value.trim());
      if (value && value.trim().length <= 12) {
        setIsAvailableSet(true);
      } else if (
        (value && value.trim().length === 0) ||
        value.trim().length > 12
      ) {
        setIsAvailableSet(false);
      }
    },
    [nickname]
  );

  const onClickDeleteBackgroundImage = useCallback(e => {
    e.stopPropagation();
    onDeleteBackgroundImageRequest();
  }, []);

  const onClickDeleteProfileImage = useCallback(e => {
    e.stopPropagation();
    onDeleteProfileImageRequest();
  });

  const onClickOffSetting = useCallback(() => {
    turnOffSetting();
  }, []);

  return (
    <Container onClick={turnOffSetting}>
      <EditorContainer
        encType="multipart/form-data"
        onSubmit={onSumbit}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <TitleContainer>
          <BackIcon onClick={onClickOffSetting}>
            <IoMdArrowRoundBack />
          </BackIcon>
          <Title>프로필 수정</Title>
          <SaveBtn isAvailableSet={isAvailableSet} type="sumbit">
            SAVE
          </SaveBtn>
        </TitleContainer>
        <ProfileBackground
          onClick={onClickBackgroundImageUpload}
          src={
            myInformation.backgroundImage && myInformation.backgroundImage
              ? `${myInformation.backgroundImage}`
              : null
          }
        >
          <input
            type="file"
            multiple
            hidden
            ref={backgroundImageInput}
            onChange={onChangeBackgroundImage}
            accept="image/*"
            loader={
              <Loader
                type="Oval"
                color="white"
                height={25}
                width={25}
                fontWeight={700}
              ></Loader>
            }
          ></input>
          <BackgrounImageDeleteIconContainer
            onClick={onClickDeleteBackgroundImage}
          >
            <MdClear />
          </BackgrounImageDeleteIconContainer>
        </ProfileBackground>
        <ProfileImage
          onClick={onClickProfileImageUpload}
          src={
            myInformation.profileImage && myInformation.profileImage
              ? `${myInformation.profileImage}`
              : null
          }
          loader={
            <Loader
              type="Oval"
              color="white"
              height={25}
              width={25}
              fontWeight={700}
            ></Loader>
          }
        >
          <input
            type="file"
            multiple
            hidden
            ref={profileImageInput}
            onChange={onChangeProfileImage}
            accept="image/*"
          ></input>
          <ProfileImageDeleteIconContainer onClick={onClickDeleteProfileImage}>
            <MdClear />
          </ProfileImageDeleteIconContainer>
        </ProfileImage>
        <NicknameContainer>
          <NicknameTitle>닉네임</NicknameTitle>
          <NicknameInput value={nickname} onChange={onChangeNickname} />
          <LimitCharacters
            color={nickname && nickname.length > 12 ? "red" : "black"}
          >
            {nickname ? nickname.length : 0} / 12
          </LimitCharacters>
        </NicknameContainer>
      </EditorContainer>
    </Container>
  );
};

export default Setting;
