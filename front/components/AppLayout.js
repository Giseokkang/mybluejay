import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { FaSearch, FaHome } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  transition: height 0.2s ease-in-out;
  position: sticky;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinkContainer = styled.div`
  width: 100px;
  height: 70%;
  margin-left: 20px;
  font-size: 30px;
  color: #70a1ff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.div`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const SearchForm = styled.form`
  position: relative;
  width: 380px;
  height: 35px;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  margin-right: 30px;
  &:hover {
    opacity: 1;
  }
`;

const SearchBar = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  font-size: 13px;
  display: flex;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #70a1ff;
`;

const AppLayout = ({ children }) => (
  <>
    <Container>
      <ItemsContainer>
        <LinkContainer>
          <Link href="/">
            <a>
              <FaHome />
            </a>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </LinkContainer>
      </ItemsContainer>
      <SearchForm>
        <SearchBar tpye="text" placeholder="Search..." />

        <SearchIconContainer>
          <FaSearch></FaSearch>
        </SearchIconContainer>
      </SearchForm>

      <BtnContainer>
        <Btn backgroundColor="#70a1ff">
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </Btn>
        <Btn backgroundColor="#2ed573">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Btn>
      </BtnContainer>
    </Container>
    {children}
  </>
);

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
