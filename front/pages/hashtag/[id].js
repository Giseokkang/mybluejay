import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const hashtag = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default hashtag;
