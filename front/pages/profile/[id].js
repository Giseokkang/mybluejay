import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Router from "next/router";
import Profile from "../profile";
import useUser from "../../hooks/useUser";

const ProfileDetail = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  const {
    user: {
      myInformation: { nickname }
    }
  } = useUser();

  useEffect(() => {
    if (id === nickname) {
      Router.push("/profile");
    }
  }, []);

  return <Profile></Profile>;
};

export default ProfileDetail;
