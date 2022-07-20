import styled from "styled-components";
import React, { useState } from "react";
import Cross from "../Images/cross.png";
import user from "../Images/user.svg";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import firebase from "firebase";
import {postArticleAPI} from "../actions"
function PostModel(props) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [assetArea, setAssetArea] = useState("");

  

  

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image ==="" || image === undefined) {
      alert(`Not an image the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const reset = (e) => {
    props.handleClick(e);
    setEditorText("");
    setShareImage("")
    setAssetArea("")
    setVideoURL("")
  };

  const switchAssetArea = (area) => {
    setAssetArea(area);
    console.log("clicked")
  };

  const postArticle =(e)=>{
    console.log("post alone")
    e.preventDefault();
    if(e.target !== e.currentTarget){
      return;
    }
    const payload={
      image:shareImage,
      video:videoURL,
      user:props.user,
      description:editorText,
      timestamp:firebase.firestore.Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);

  }
  return (
    <>
      {props.showModel === "open" && (
        <Container>
          <div className="overlay" onClick={reset}></div>
          <CreatePostContainer>
            <Header>
              <div className="left">
                <h1>Create a Post</h1>
              </div>
              <div className="right">
                <img src={Cross} onClick={reset} alt="cross-icon" />
              </div>
            </Header>
            <PostArea>
              <div className="top">
                <img src={props.user.photoURL} alt="user" />
                <h1>{props.user.displayName}</h1>
              </div>
              <div className="middle">
                <textarea
                  placeholder="What do you want to talk about?"
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                ></textarea>
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                      accept="image/png,image/jpeg,image/gif"
                      name="image"
                      id="file"
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="PostedImage" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "video" && (
                    <>
                      <input
                        type="text"
                        placeholder="Enter Video URL"
                        value={videoURL}
                        onChange={(e) => setVideoURL(e.target.value)}
                      />
                      {videoURL && (
                        <ReactPlayer url={videoURL} width={{ width: "100%" }} />
                      )}
                    </>
                  )
                )}
              </div>
              <div className="bottom">
                <div className="leftsection">
                  <button onClick={() => switchAssetArea("image")}>
                    <img
                      src={require("../Images/photo.svg").default}
                      alt="icon"
                    />
                  </button>
                  <button onClick={() => switchAssetArea("video")}>
                    <img
                      src={require("../Images/video.svg").default}
                      alt="Video icon"
                    />
                  </button>
                  <button>
                    <img
                      src={require("../Images/document.svg").default}
                      alt="Document icon"
                    />
                  </button>
                  <button>
                    <img
                      src={require("../Images/comment.svg").default}
                      alt="Comment icon"
                    />
                    <span>Any one</span>
                  </button>
                </div>
                <div className="rightsection">
                  <button onClick={(e)=>postArticle(e)} disabled={!editorText ? true : false}>Post</button>
                </div>
              </div>
            </PostArea>
          </CreatePostContainer>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  div.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
const CreatePostContainer = styled.div`
  background-color: #fff;
  width: 35%;
  margin: 0 auto;
  position: absolute;
  top: 30px;
  right: 0;
  left: 0;
  border-radius: 10px;
  z-index: 6;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #d3d3d3;
  div.left {
    h1 {
      font-size: 18px;
      font-weight: 400;
      color: #3c3a3a;
    }
  }
  div.right {
    img {
      font-family: "Hammersmith One", sans-serif;
      width: 35px;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      transition: 0.3s;
      &:hover {
        background-color: #ededed;
      }
    }
  }
`;
const PostArea = styled.div`
  padding: 12px 20px;

  div.top {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    img {
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    h1 {
      font-size: 15px;
      font-weight: 500;
      color: #3c3a3a;
    }
  }
  div.middle {
    textarea {
      resize: none;
      min-height: 150px;
      width: 100%;
      font-family: "Hammersmith One", sans-serif;
      font-size: 17px;
    }
  }
  div.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.leftsection {
      display: flex;
      align-items: center;
      button {
        background-color: transparent;
        margin-right: 20px;
        cursor: pointer;
        padding: 10px 10px 8px;
        border-radius: 50%;
        outline: none;
        transition: 0.3s;
        &:hover {
          background-color: #ededed;
        }
        img {
          width: 20px;
        }
      }
      button:nth-child(3) {
      }
      button:last-child {
        display: flex;
        align-items: center;
        border-left: 1px solid #d3d3d3;
        padding: 0 0 0 10px;
        border-radius: unset;
        &:hover {
          background-color: unset;
        }
        img {
          margin-right: 6px;
        }
        span {
          color: #3c3a3a;
          font-weight: 800;
        }
      }
    }
    div.rightsection {
      button {
        padding: 12px 20px;
        background: ${(props) => (props.disabled ? "#000" : "#16a4a5")};
        color: ${(props) => (props.disabled ? "white" : "palevioletred")};
        border-radius: 30px;
        cursor: pointer;
      }
    }
  }
`;
const UploadImage = styled.div`
  img {
    width: 100%;
    display: block;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps=(dispatch)=>({
  postArticle:(payload)=>dispatch(postArticleAPI(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(PostModel);
