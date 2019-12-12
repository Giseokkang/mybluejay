import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { FaSearch, FaHome, FaUser } from "react-icons/fa";
import useUser from "../hooks/useUser";
import usePopUp from "../hooks/usePopUp";
import router from "next/router";
import device from "../utils/device";

const Container = styled.div`
  width: 100%;
  height: 55px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  transition: height 0.2s ease-in-out;
  opacity: ${props => (props.isOnPopUp || props.isSettingOn ? 0.2 : 1)};
  pointer-events: ${props =>
    props.isOnPopUp || props.isSettingOn ? "none" : null};
  background-color: white;
  z-index: 5;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinkContainer = styled.div`
  width: 80px;
  height: 70%;
  font-size: 30px;
  margin-left: 10px;
  color: #70a1ff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 40px;
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

  @media ${device.mobileL} {
    display: ${props => props.signup && "none"};
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
  /* margin-right: 140px; */
  &:hover {
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 250px;
  }

  @media ${device.mobileL} {
    display: none;
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

const AppLayout = ({ children }) => {
  const { user, onLogOutRequest, onLoadUserRequest } = useUser();
  const { isOnPopUp } = usePopUp();

  const [term, setTerm] = useState("");

  const searchOnSubmit = useCallback(e => {
    e.preventDefault();
    router.push(`/hashtag/${term.trim()}`);
  });

  const searchOnChange = useCallback(e => {
    const {
      target: { value }
    } = e;
    setTerm(value);
  });

  return (
    <>
      <Container isOnPopUp={isOnPopUp} isSettingOn={user.isSettingOn}>
        <ItemsContainer>
          <Link href="/">
            <LinkContainer>
              <a>
                <FaHome />
              </a>
            </LinkContainer>
          </Link>
          <Link href="/profile">
            <LinkContainer>
              <FaUser></FaUser>
            </LinkContainer>
          </Link>
        </ItemsContainer>
        <SearchForm onSubmit={searchOnSubmit}>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={searchOnChange}
          />

          <SearchIconContainer>
            <FaSearch></FaSearch>
          </SearchIconContainer>
        </SearchForm>

        <BtnContainer>
          {user && user.isLoggedin ? (
            <Link href="/">
              <Btn backgroundColor="#70a1ff" onClick={() => onLogOutRequest()}>
                <a>Log out</a>
              </Btn>
            </Link>
          ) : (
            <>
              <Link href="/signup">
                <Btn backgroundColor="#70a1ff" signup={true}>
                  <a>Sign Up</a>
                </Btn>
              </Link>

              <Link href="/login">
                <Btn backgroundColor="#2ed573">
                  <a>Login</a>
                </Btn>
              </Link>
            </>
          )}
        </BtnContainer>
      </Container>
      {children}
    </>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
