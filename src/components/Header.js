import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WorkIcon from "@material-ui/icons/Work";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

function Header(props) {
  const [profileButton, setProfileButton] = useState(false);
  const profileClick = () => {
    setProfileButton(!profileButton);
  };
  return (
    <MainContainer>
      <LeftContainer>
        <H1>
          <Link>
            <LogoImage
              src="https://www.skillup.org/wp-content/uploads/2021/02/SkillUp_Logo.svg"
              alt="Logo"
            />
          </Link>
        </H1>
      </LeftContainer>
      <CenterContainer>
        <Form>
          <SearchIcon className="search-icon" />
          <Input type="text" placeholder="Search" />
        </Form>
      </CenterContainer>
      <RightContainer>
        <Nav>
          <IconsContainer>
            <a href="#" className="home">
              <HomeIcon className="home-icon" />
            </a>
          </IconsContainer>
          <IconsContainer>
            <a href="#" className="group">
              <GroupAddIcon className="group-add-icon" />
            </a>
          </IconsContainer>
          <IconsContainer>
            <a href="#" className="work">
              <WorkIcon className="work-icon" />
            </a>
          </IconsContainer>
          <IconsContainer>
            <a href="#" className="telegram">
              <TelegramIcon className="telegram-icon" />
            </a>
          </IconsContainer>
          <IconsContainer>
            <a href="#" className="notification">
              <NotificationsActiveIcon className="notifications-icon" />
            </a>
          </IconsContainer>
          <IconsContainer onClick={profileClick} className="profile-container">
            <a href="#" className="avatar">
              {props.user && props.user.photoURL ? (
                <ProfileImage src={props.user.photoURL} />
              ) : (
                <AccountCircleIcon className="account-circle-icon" />
              )}
            </a>
            {profileButton ? (
              <SignOut onClick={props.signOut}>Sign Out</SignOut>
            ) : null}
          </IconsContainer>
        </Nav>
      </RightContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  height: 77px;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 9;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  @media all and (max-width: 1280px) {
    padding: 0 45px;
  }
  @media all and (max-width: 1050px) {
    padding: 0 10px;
  }
  @media all and (max-width: 980px) {
    justify-content: center;
    bottom: 0;
  }
  @media all and (max-width: 980px) {
    justify-content: center;
    bottom: 0;
  }
  @media (max-width: 481px) {
    height: 40px;
  }

`;
const LeftContainer = styled.div`
  width: 24%;
  @media all and (max-width: 980px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const H1 = styled.h1`
  width: 120px;
`;
const Link = styled.a`
  display: inline-block;
`;
const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
const CenterContainer = styled.div`
  width: 40%;
  @media all and (max-width: 980px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  ${SearchIcon} {
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 35px;
  border-radius: 6px;
  background-color: #eef3f8;
  &:focus {
    outline: none !important;
    border-color: #1898af;
    box-shadow: 0 0 3px #1898af;
  }
`;
const RightContainer = styled.div`
  margin-left: auto;
  display: block;
  @media all and (max-width: 1980px) {
    width: 43%;
    margin-left: 17px;
  }
  @media all and (max-width: 1440px) {
    width: 56%;
    margin-left: 20px;
  }
  @media all and (max-width: 1280px) {
    width: 64%;
  }
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  @media all and (max-width: 980px) {
    justify-content: center;
    margin: 0 auto;
  }
  @media all and (max-width: 768px) {
    margin: 0 auto0;
  }
  
`;
const SignOut = styled.div`
  position: absolute;
  top: 55px;
  left: -26px;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: block;
  box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  @media all and (max-width:980px){
    top: -64px;
    left: -35px;
  }
`;
const IconsContainer = styled.div`
  text-align: center;
  margin-right: 28px;
  &:last-child {
    margin-right: 0;
  }
  & > a {
    color: #16a4a5;
    display: inline-block;
    transition: all 0.3s ease 0s;

    &:hover {
      color: #036262;
      border-bottom: 1px solid #036262;
    }
  }
  &.profile-container {
    position: relative;
  }
  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  @media all and (max-width: 768px) {
    justify-content: center;
  }
`;
const Span = styled.span`
  display: block;
  font-size: 14px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 30px;
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
