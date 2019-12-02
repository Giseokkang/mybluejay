import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Router from "next/router";
import Profile from "../profile";
import useUser from "../../hooks/useUser";

const ProfileDetail = () => {
  return <Profile></Profile>;
};

ProfileDetail.getInitialProps = async context => {
  const state = context.store.getState();
  if (context.query.id === state.user.myInformation.nickname) {
    Router.push("/profile");
  }
};

export default ProfileDetail;
