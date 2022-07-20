import React, { useState } from "react";
import styled from "styled-components";
import Feed from "../Images/feed-icon.svg";
import Right from "../Images/right-icon.svg";

function RightSide() {
  let [follow,setFollow]=useState("Follow")
  let [followTwo,setFollowTwo]=useState("Follow")
  let [isActive,setIsActive]=useState(false);
  let [isActiveTwo,setIsActiveTwo]=useState(false);
  const followButton=()=>{
    if(follow=="Follow"){
      setFollow("Following")
      setIsActive(true)
    }else{
      setFollow("Follow")
      setIsActive(false)
    }
  }
  const followButtonTwo=()=>{
    if(followTwo=="Follow"){
      setFollowTwo("Following")
      setIsActiveTwo(true)
    }else{
      setFollowTwo("Follow")
      setIsActiveTwo(false)
    }
  }
  return (
    <Container>
      <CardOne>
        <CardTop>
          <TopLeft>
            <Heading>Add to your feed</Heading>
          </TopLeft>
          <TopRight>
            <FeedIcon src={Feed} alt="Feed Icon" />
          </TopRight>
        </CardTop>
        <CardBottom>
          <ContentContainer>
            <ContentLeft>
              <HashTagIcon>#</HashTagIcon>
            </ContentLeft>
            <ContentRight>
              <HashTags>#Cultural Fest</HashTags>
              <FollowButton className={isActive?"active":null} onClick={followButton}>{follow}</FollowButton>
            </ContentRight>
          </ContentContainer>
          <ContentContainer>
            <ContentLeft>
              <HashTagIcon>#</HashTagIcon>
            </ContentLeft>
            <ContentRight>
              <HashTags>#Art & Craft</HashTags>
              <FollowButton className={isActiveTwo?"active":null} onClick={followButtonTwo} >{followTwo}</FollowButton>
            </ContentRight>
          </ContentContainer>
          <RecommendationsContainer>
            View all Recommendations
            <RightIcon src={Right} alt="Right Icon" />
          </RecommendationsContainer>
        </CardBottom>
      </CardOne>
    </Container>
  );
}

const Container = styled.div`
@media all and (max-width: 980px) {
    margin-top: 25px;
  }
  @media all and (max-width: 768px) {
   padding-bottom: 84px;
  }
  @media (max-width: 481px) {
    padding-bottom: 42px;
  }


`;
const CardOne = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background-color: #fff;
  padding: 28px 32px;
`;
const CardTop = styled.div`
	display:flex;
	align-items: center;
	justify-content: space-between;
`;
const TopLeft = styled.div``;
const Heading = styled.h1`
	color:#7a7878;
	font-size: 16px;
	font-weight: 500;
`;
const TopRight = styled.div``;
const FeedIcon = styled.img``;
const CardBottom = styled.div`
	margin-top: 20px;
`;
const ContentContainer = styled.div`
	display:flex;
	align-items:center;
	margin-bottom: 20px;
`;
const ContentLeft = styled.div``;
const HashTagIcon = styled.span`
	font-size: 38px;
	background-color:#fff;
	color:#16a4a5;
	border-radius: 50%;
	padding: 5px 12px 1px;
	border:2px solid #16a4a5;
	display: inline-block;
`;
const ContentRight = styled.div`
	margin-left: 20px;
`;
const HashTags = styled.span`
	display: block;
	font-size: 14px;
	margin-bottom: 6px;
	color: #3c3a3a;
`;
const FollowButton = styled.button`
	padding:10px 20px;
	border-radius:30px;
	border: 1px solid #16a4a5;
	color:#16a4a5;
	font-weight: 600;
	background-color: #fff;
	cursor:pointer;
	display: inline-block;;
	&:hover{
		background-color: #e8ffff;
	}
  &.active{
    background-color: #16a4a5;
    color:#e8ffff;
  }
`;
const RecommendationsContainer = styled.div`
	display:flex;
	align-items: center;
	font-size: 14px;
	color:#0a66c2;
	&:hover{
		text-decoration:underline;
		cursor: pointer;
	}
`;
const RightIcon = styled.img`
	margin-left:6px;
`;
export default RightSide;
