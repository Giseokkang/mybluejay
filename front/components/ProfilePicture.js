import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-image: ${props =>
    props.ProfileImageUrl ? url(props.ProfileImageUrl) : null};
  background-color: gray;
`;

const ProfilePicture = ({ ProfileImageUrl }) => {
  return <Container ProfileImageUrl={ProfileImageUrl}></Container>;
};

ProfilePicture.propTypes = {
  BgUrl: PropTypes.string
};

export default ProfilePicture;
