import React, { useRef, useState } from "react";
import styled from "styled-components";
import SignUpScreen from "./SignUpScreen";
import Google from "../Images/google.svg";
import {signInAPI} from "../actions";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {auth} from "../firebase";
function Login(props) {
  const [joinNow,setJoinNow]=useState(false);
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
  }
  
  return (
    <MainContainer>
      {props.user && <Redirect to="/home" />}
      <div className="wrapper">
        <Header>
          <LeftContainer>
            <H1>
              <LogoImage src="https://www.skillup.org/wp-content/uploads/2021/02/SkillUp_Logo.svg" alt="Logo" />
            </H1>
          </LeftContainer>
          <RightContainer>
            <JoinNowButton onClick={()=>setJoinNow(true)} >Join Now</JoinNowButton>
          </RightContainer>
        </Header>
        <Spotlight>
          <LeftContainerSpotlight>
              <P>Focusing Is About Saying No</P>
              <ButtonContainer>
                  <JoinButton onClick={()=>setJoinNow(true)}>Join Now</JoinButton>
              </ButtonContainer>
          </LeftContainerSpotlight>
          <RightContainerSpotlight>
            {joinNow?(<SignUpScreen/>):(
              <Form>
              <Heading>Sign In</Heading>
              <Input type="text" ref={emailRef} placeholder="Email" />
              <Input type="password" ref={passwordRef} placeholder="Password" />
              <GoogleContainer onClick={props.signIn}>
                  <GoogleIcon src={Google} alt="GoogleIcon" />
                  <SignInWithGoogle>Sign in with google</SignInWithGoogle>
              </GoogleContainer>
              <Span onClick={()=>setJoinNow(true)}>Create An Account</Span>
              <Input type="submit" value="Sign In" onClick={signIn} />
            </Form>
            )}
            
          </RightContainerSpotlight>
        </Spotlight>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div``;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const LeftContainer = styled.div`
`;
const H1 = styled.h1`
  width: 162px;
  @media all and (max-width: 480px) {
    width: 120px;
  }
`;
const RightContainer = styled.div``;
const JoinNowButton = styled.button`
   background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  background-size: 200%;
  transition: all 0.5s ease 0s;
  padding: 15px 25px;
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
  @media all and (max-width: 1280px) {
    padding: 15px 33px;
  }
  @media all and (max-width: 480px) {
    padding: 10px 20px;
  }
 
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;

const Spotlight = styled.div`
  padding: 100px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f9eb;
  border-radius: 30px;
  margin-top: 80px;
  background-image: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg);
  background-position: left 10% top 0px;
  background-repeat: no-repeat;
  background-size: 870px;
  @media all and (max-width: 980px) {
    justify-content: center;
  }
  @media all and (max-width: 640px) {
    padding: 37px 15px;
  }
  @media all and (max-width: 480px) {
    padding: 37px 0px;
    margin-top: 50px;
  }
`;
const LeftContainerSpotlight = styled.div`
  width: 45%;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const RightContainerSpotlight = styled.div`
  width: 45%;
  @media all and (max-width: 980px) {
    width: 75%;
  }
  @media all and (max-width: 768px) {
    width: 91%;
  }
`;
const Form = styled.form`
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  transition: all 1s ease 0s;
  border-radius: 10px;
  padding: 60px 40px;
  text-align: center;
  width: 85%;
  &:hover {
    background-position: right center;
  }
  background-size: 200%;
  @media all and (max-width: 1280px) {
   width: 100%;
   padding: 34px 23px;
  }
  @media all and (max-width: 480px) {
    padding: 27px 22px;
  }
`;
const Input = styled.input`
  &[type="text"] {
    width: 100%;
    padding: 20px 20px;
    border-radius: 5px;
    margin-bottom: 25px;
    @media all and (max-width:1280px){
      padding: 18px 16px;
    }
    @media all and (max-width:1051px){
      padding: 15px 16px;
    }
    @media all and (max-width: 640px) {
    padding: 14px 16px;
  }
  @media all and (max-width: 640px) {
    padding: 14px 16px;
  }
  @media all and (max-width: 480px) {
    padding: 12px 16px;
  }
  }
  &[type="password"] {
    width: 100%;
    padding: 20px 20px;
    border-radius: 5px;
    margin-bottom: 25px;
    @media all and (max-width:1280px){
      padding: 18px 16px;
    }
    @media all and (max-width:1051px){
      padding: 15px 16px;
    }
    @media all and (max-width: 640px) {
    padding: 14px 16px;
  }
  @media all and (max-width: 480px) {
    padding: 12px 16px;
  }
  }
  &[type="submit"] {
    padding: 15px 35px;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    background-color: #357d89;
    cursor: pointer;
    transition: all 0.6s ease 0s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &:hover {
      background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
      background-position: right center;
      background-size: 200%;
    }
    @media all and (max-width: 640px) {
      padding: 14px 35px;
  }   
 
}
`;
const Span = styled.span`
  display: block;
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const Heading = styled.h1`
  font-size: 35px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: 600;
  @media all and (max-width: 1280px) {
    font-size: 32px;
  }
`;
const P = styled.p`
  margin: 0 auto;
  max-width: 500px;
  color: #a6c636;
  font-size: 58px;
  font-family: "Hammersmith One", sans-serif;
  font-weight: 600;
  transition: all 3s ease 0s;
  background: -webkit-linear-gradient(
    60deg,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  background-position: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background-position: right center;
    background-size: 200%;
  }
  @media all and (max-width: 1440px) {
    font-size: 52px;
  }
  @media all and (max-width: 1280px) {
    font-size: 42px;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 50px;
`;
const JoinButton = styled.button`
  background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  background-size: 200%;
  transition: all 0.5s ease 0s;
  padding: 20px 35px;
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
  @media all and (max-width: 1440px) {
    padding: 17px 35px;
  }
  @media all and (max-width: 1280px) {
    padding: 15px 33px;
  }
`;
const GoogleContainer = styled.div`
 background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-size: 200%;
  transition: all 0.5s ease 0s;
  padding: 15px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  margin: 0 auto 20px;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
  @media all and (max-width: 1440px) {
    width: 75%;
  }
  @media all and (max-width: 1051px) {
    width: 78%;
  }
  @media all and (max-width: 640px) {
    width: 89%;
  }
  @media all and (max-width: 480px) {
    padding: 11px 16px;
    width: 80%;
  }
`;
const GoogleIcon = styled.img`
  margin-right: 6px;
`;
const SignInWithGoogle = styled.span`
  font-size: 15px;
  font-weight: 400;
  @media all and (max-width:1280px){
      font-size: 14px;
    }
`;

const mapStateToProps=(state)=>{
  return{
    user:state.userState.user,
  };
}
const mapDispatchToProps=(dispatch)=>({
  signIn:()=>dispatch(signInAPI())
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);
