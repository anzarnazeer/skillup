import React from "react";
import styled from "styled-components";
import Camera from "../Images/camera.svg";
import Widget from "../Images/widget-icon.svg";
import Item from "../Images/item-icon.svg";
import BgHome from "../Images/bg-home.jpg";
import Singing from "../Images/karaoke.png";
import Dance from "../Images/dancing.png";
import Drawing from "../Images/paint-palette.png";
import PeopleIcon from "@material-ui/icons/People";
import { connect } from "react-redux";
function LeftSide(props) {
  return (
    <Container>
      <CardOne>
        <CardTop>
          <Head>
            <CameraImageContainer>
              {props.user?.photoURL && props.user?.photoURL ? (
                <img src={props.user?.photoURL} alt="user Image" />
              ) : (
                <CameraIcon src={Camera} alt="Camera Icon" />
              )}
            </CameraImageContainer>
          </Head>
          <TopContainer>
            <Heading>
              Welcome,{props.user ? props.user.displayName : "there"}
            </Heading>
            <AddPhoto>
              {props.user?.photoURL
                ? "Change Profile Photo"
                : "Add a photo"}
            </AddPhoto>
          </TopContainer>
        </CardTop>
        <CardMiddle>
          <Connection>Connections</Connection>
          <ContentsContainer>
            <LeftContainer>
              <GrowUrNetwork>Grow Your Network</GrowUrNetwork>
            </LeftContainer>
            <RightContainer>
              <WidgetIcon src={Widget} />
            </RightContainer>
          </ContentsContainer>
        </CardMiddle>
        <CardBottom>
          <ItemIcon src={Item} />
          <MyItems>My Items</MyItems>
        </CardBottom>
      </CardOne>
      <CardTwo>
        <Recent>Recent</Recent>
        <Top>
          <SkillsContainer>
            <Image src={Singing} alt="Karaoke mic" />
            <Text>Singing</Text>
          </SkillsContainer>
          <SkillsContainer>
            <Image src={Dance} alt="Dancing icon" />
            <Text>Dance</Text>
          </SkillsContainer>
          <SkillsContainer>
            <Image src={Drawing} alt="Drawing icon" />
            <Text>Drawing</Text>
          </SkillsContainer>
        </Top>
        <Middle>
          <Groups>Groups</Groups>
          <GroupContainer>
            <PeopleIcon style={{ color: "#16a4a5" }} />
            <Text>All Kerala Arts</Text>
          </GroupContainer>
          <GroupContainer>
            <PeopleIcon style={{ color: "#16a4a5" }} />
            <Text>Project Ideas</Text>
          </GroupContainer>
          <SeeAll>See All</SeeAll>
        </Middle>
      </CardTwo>
    </Container>
  );
}
const Container = styled.div``;
const CardOne = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background-color: #fff;
`;
const CardTop = styled.div`
  border-bottom: 1px solid #d3d3d3;
`;
const Head = styled.div`
  height: 62px;
  background-image: url(${BgHome});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const CameraImageContainer = styled.div`
  img {
    width: 88px;
    padding: 4px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
const CameraIcon = styled.img`
  width: 88px;
  padding: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  padding: 50px 40px;
  text-align: center;
  @media all and (max-width:1080px){
    padding: 46px 19px;
  }
`;
const Heading = styled.h1`
  font-weight: 500;
  font-size: 18px;
`;
const AddPhoto = styled.span`
  color: #16a4a5;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
  &:hover {
    color: #0c92de;
  }
`;
const CardMiddle = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #d3d3d3;
`;
const Connection = styled.span`
  color: #7c7878;
  font-size: 14px;
  padding: 0 20px;
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 18px;
  &:hover {
    color: #16a4a5;
    background-color: #ededed;
  }
  cursor: pointer;
`;
const LeftContainer = styled.div``;
const GrowUrNetwork = styled.span`
  font-size: 14px;
  color: #3c3a3a;
`;
const RightContainer = styled.div``;
const WidgetIcon = styled.img`
  width: 18px;
`;
const CardBottom = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #16a4a5;
    cursor: pointer;
    background-color: #ededed;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const ItemIcon = styled.img`
  margin-right: 6px;
`;
const MyItems = styled.span`
  font-size: 14px;
  color: #3c3a3a;
`;
const CardTwo = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 20px;
  background-color: #fff;
`;
const Recent = styled.span`
  color: #5e5e5e;
  font-size: 15px;
  padding: 12px 20px 0px;
  display: inline-block;
`;
const Top = styled.div`
  padding: 15px 0 20px;
`;
const SkillsContainer = styled.div`
  display: flex;
  padding: 6px 18px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ededed;
    color: #139fdc;
  }
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-left: 6px;
  font-size: 14px;
  color: #3c3a3a;
`;
const Middle = styled.div``;
const Groups = styled.span`
  padding: 0 20px 0px;
  display: inline-block;
  color: #0c92de;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const GroupContainer = styled.div`
  display: flex;
  padding: 6px 18px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ededed;
    color: #16a4a5;
  }
`;
const SeeAll = styled.span`
  padding-left: 18px;
  color: #0c92de;
  display: inline-block;
  margin-top: 15px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(LeftSide);
