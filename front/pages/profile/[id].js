import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Profile from "../profile";

const ProfileDetail = () => {
  const router = useRouter();

  return <Profile></Profile>;
};

export default ProfileDetail;
