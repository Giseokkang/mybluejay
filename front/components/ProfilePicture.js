import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-image: url(${props => props.profileSrc});
  background-color: gray;
  background-size: cover;
  background-position: center center;
`;

const ProfilePicture = ({ profileSrc }) => {
  return (
    <Container profileSrc={profileSrc ? `${profileSrc}` : null}></Container>
  );
};

ProfilePicture.propTypes = {
  profileSrc: PropTypes.string
};

export default ProfilePicture;
