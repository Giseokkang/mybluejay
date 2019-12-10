import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  margin-top: 100px;
  font-size: 20px;
  font-weight: 700;
`;

const EmptyPosts = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

EmptyPosts.propTypes = {
  children: PropTypes.node
};

export default EmptyPosts;
