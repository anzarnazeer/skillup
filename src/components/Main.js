import React from "react";
import styled from "styled-components";
import User from "../Images/user.svg";
import Photo from "../Images/photo.png";
import Video from "../Images/video.png";
import Event from "../Images/Event.png";
import Article from "../Images/article.png";
import PublicIcon from "@material-ui/icons/Public";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Post from "../Images/post-Image.jpeg";
import Like from "../Images/like.svg";
import Comment from "../Images/comment.svg";
import Share from "../Images/share.svg";
import TelegramIcon from "@material-ui/icons/Telegram";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import PostModel from "./PostModel";
import LoadingIcon from "../Images/loading.svg";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

function Main(props) {
  const [liked, setLiked] = useState(false);
  console.log("hi",liked)
  const [showModel, setShowModel] = useState("close");
  let count;
  const likeButtonclicked = (key) => {
    setLiked(!liked);
  };

  useEffect(() => {
    props.getArticles();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    switch (showModel) {
      case "close":
        setShowModel("open");
        break;
      case "open":
        setShowModel("close");
        break;
      default:
        setShowModel("close");
        break;
    }
  };Array(100).fill(false)
  return (
    <>
     
        <Container>
          <ShareContainer>
            <TopSection>
              {props.user && props.user.photoURL ? (
                <UserImage src={props.user.photoURL} alt="User" />
              ) : (
                <UserImage src={User} alt="User" />
              )}
              <SharePostField onClick={handleClick}>
                Start a Post
              </SharePostField>
            </TopSection>
            <BottomSection>
              <Ul>
                <ListItems>
                  <Image src={Photo} alt="Photo" />
                  <Text>Photo</Text>
                </ListItems>
                <ListItems>
                  <Image src={Video} alt="Video" />
                  <Text>Video</Text>
                </ListItems>
                <ListItems>
                  <Image src={Event} alt="Event" />
                  <Text>Event</Text>
                </ListItems>
                <ListItems>
                  <Image src={Article} alt="Article" />
                  <Text>Write article</Text>
                </ListItems>
              </Ul>
            </BottomSection>
          </ShareContainer>
          <Content>
            {props.loading && <img src={LoadingIcon} alt="Loading-icon" />}
          </Content>
          <>
          {props.articles.length === 0 ? (
        <p style={{textAlign:"center"}}>There are no articles</p>
      ) : (
        <>
            {props.articles.map((article, key) => (
              <PostContainer key={key}>
                <TopContainer>
                  <Top>
                    <LeftSection>
                      <AvatarImageContainer>
                        <AvatarImage src={article.actor.image} alt="UserIcon" />
                      </AvatarImageContainer>
                      <UserDetailsContainer>
                        <UserName>{article.actor.title}</UserName>
                        <Designation>{article.actor.description}</Designation>
                        <DateContainer>
                          <Date>
                            {article.actor.date.toDate().toLocaleDateString()}
                          </Date>
                          <PublicIcon style={{ fontSize: "14px" }} />
                        </DateContainer>
                      </UserDetailsContainer>
                    </LeftSection>
                    <RightSection>
                      <MoreVertIcon />
                    </RightSection>
                  </Top>
                  <Bottom>
                    <Description>{article.description}</Description>
                  </Bottom>
                </TopContainer>
                <MiddleContainer>
                  <PostImageContainer>
                    {!article.sharedImg && article.video ? (
                      <ReactPlayer width={"100%"} url={article.video} />
                    ) : (
                      article.sharedImg && <PostImage src={article.sharedImg} alt="Post" />
                    )}
                  </PostImageContainer>
                </MiddleContainer>
                <BottomContainer>
                  <TopSectionBottom>
                    <BottomLeft>
                      <EmojisContainer>
                        <LikeIcon
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt="Like Icon"
                        />
                        <HeartIcon
                          src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                          alt="Heart Icon"
                        />
                        <ClappingIcon
                          src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                          alt="Clapping Icon"
                        />
                      </EmojisContainer>
                      <LikedUsers>Steve jobs and 1k others</LikedUsers>
                    </BottomLeft>
                    <BottomRight>
                      <CommentsCount>1k comments</CommentsCount>
                    </BottomRight>
                  </TopSectionBottom>
                  <BottomSectionBottom>
                    <UnOrderedList>
                      <Li onClick={()=>likeButtonclicked(key)}>
                        {liked? (
                          <Icon src={Like} alt="Like" />
                        ) : (
                          <Icon
                            src="https://static-exp1.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
                            alt="Like"
                          />
                        )}

                        <IconText className={!liked ? "active" : null}>
                          Like
                        </IconText>
                      </Li>
                      <Li>
                        <Icon src={Comment} alt="Comment" />
                        <IconText>Comment</IconText>
                      </Li>
                      <Li>
                        <Icon src={Share} alt="Share" />
                        <IconText>Share</IconText>
                      </Li>
                      <Li>
                        <TelegramIcon />
                        <IconText>Send</IconText>
                      </Li>
                    </UnOrderedList>
                  </BottomSectionBottom>
                </BottomContainer>
              </PostContainer>
            ))}
            </>
            )}
          </>
          <PostModel showModel={showModel} handleClick={handleClick} />
        </Container>
      
    </>
  );
}

const Container = styled.div`
  width: 45%;
  @media all and (max-width: 1980px) {
    width: 48%;
  }
  @media all and (max-width: 1280px) {
    width: 50%;
  }
  @media all and (max-width: 1050px) {
    width: 47%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    margin-top: 25px;
  }
`;
const ShareContainer = styled.div`
  padding: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background-color: #fff;
  @media all and (max-width: 480px) {
    padding: 15px;
  }
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const UserImage = styled.img`
  width: 55px;
  border-radius: 50%;
  margin-right: 20px;
`;
const SharePostField = styled.button`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  color: #5f6163;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ededed;
  }
`;
const BottomSection = styled.div``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListItems = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  transition: 0.2s;
  &:hover {
    background-color: #ededed;
    border-radius: 6px;
    cursor: pointer;
  }
  @media all and (max-width: 1980px) {
    padding: 10px;
  }
  @media all and (max-width: 1050px) {
    padding: 7px;
  }
  @media all and (max-width: 480px) {
    padding: 2px;
  }
  
  
`;
const Image = styled.img`
  width: 22px;
  margin-right: 15px;
  @media all and (max-width: 480px) {
    width: 20px;
  margin-right: 4px;
  }
  @media all and (max-width: 360px) {
    width: 19px;
  }
`;
const Text = styled.span`
  font-size: 14px;
  color: #3c3a3a;
`;

const PostContainer = styled.div`
  margin-top: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;
const TopContainer = styled.div`
  padding: 16px;
  background-color: #fff;
  font-family: "Lato", sans-serif;
  border-radius: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  color: #1e1c1c;
  margin-bottom: 10px;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;
const RightSection = styled.div``;
const AvatarImageContainer = styled.div`
  width: 50px;
  margin-right: 10px;
`;
const AvatarImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`;
const UserDetailsContainer = styled.div``;
const UserName = styled.h1`
  font-size: 13px;
  color: #1e1c1c;
  font-weight: 700;
`;
const Designation = styled.p`
  font-size: 12px;
  color: #959595;
  font-weight: 400;
`;
const Date = styled.span`
  font-weight: 100;
  margin-right: 3px;
  font-weight: 400;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #959595;
`;
const Bottom = styled.div``;
const Description = styled.p`
  font-size: 14px;
`;
const MiddleContainer = styled.div`
  width: 100%;
`;
const PostImageContainer = styled.div`
  display: block;
  width: 100%;
`;
const PostImage = styled.img`
  display: block;
  width: 100%;
`;

const BottomContainer = styled.div`
  background-color: #fff;
  font-family: "Lato", sans-serif;
  padding: 5px 19px 6px;
  border-radius: 10px;
 
`;
const TopSectionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 5px;
`;
const BottomLeft = styled.div`
  display: flex;
  align-items: center;
`;
const EmojisContainer = styled.div`
  margin-right: 5px;
  display: flex;
`;
const LikeIcon = styled.img`
  width: 16px;
`;
const HeartIcon = styled.img`
  width: 16px;
`;
const ClappingIcon = styled.img`
  width: 16px;
`;
const LikedUsers = styled.span`
  font-size: 13px;
  color: #959595;
  font-weight: 400;
`;
const BottomRight = styled.div``;
const CommentsCount = styled.span`
  font-size: 13px;
  color: #959595;
  font-weight: 400;
`;
const BottomSectionBottom = styled.div`
  color: #3c3a3a;
  padding-top: 6px;
`;
const UnOrderedList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  transition: 0.3s;
  &:hover {
    background-color: #ededed;
    border-radius: 6px;
    cursor: pointer;
  }
  @media all and (max-width: 480px) {
    padding: 12px 0px;
  }
`;
const Icon = styled.img`
  width: 20px;
`;
const IconText = styled.span`
  margin-left: 6px;
  &.active {
    color: #378fe9;
  }
`;
const Content = styled.div`
  margin-top: 30px;
  text-align: center;
  & > img {
    width: 50px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
