import React from "react";

import Router from "next/router";
import Profile from "../profile";

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
