import React from "react";
import styled from "styled-components";
import usePost from "../hooks/usePost";
import usePopUp from "../hooks/usePopUp";
import PopUp from "../components/PopUp";
import { useRouter } from "next/router";
import { loadMainPostsRequest } from "../reducers/post";
import ContentBox from "../components/ContentBox";
import device from "../utils/device";
import { fadeIn } from "../utils/animations";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: ${props => (props.isOnPopUp ? 0.2 : 1)};
  overflow: ${props => (props.isOnPopUp ? "hidden" : "scroll")};
`;

const GridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-gap: 0;
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 0;
    width: 100%;
  }

  @media ${device.mobileL} {
    grid-template-columns: 0 1fr 0%;
    width: 100%;
    display: flex;
  }
`;

const MenuBox = styled.div``;

const FollowBox = styled.div``;

const Home = () => {
  const { isOnPopUp } = usePopUp();

  return (
    <>
      {isOnPopUp && <PopUp></PopUp>}
      <Container isOnPopUp={isOnPopUp}>
        <GridContainer>
          <MenuBox></MenuBox>
          <ContentBox />
          <FollowBox />
        </GridContainer>
      </Container>
    </>
  );
};

Home.getInitialProps = async context => {
  context.store.dispatch({
    type: loadMainPostsRequest().type
  });
};

export default Home;
