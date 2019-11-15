import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Profile from "../profile";
import useOthers from "../../hooks/useOthers";

const ProfileDetail = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  const { others, onLoadOtherRequest } = useOthers();

  useEffect(() => {
    onLoadOtherRequest(decodeURIComponent(id));
  }, []);

  console.log(others);

  return <Profile></Profile>;
};

export default ProfileDetail;
