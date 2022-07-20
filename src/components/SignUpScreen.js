import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import Login from "./Login";
import Google from "../Images/google.svg";
import { signInAPI } from "../actions";
import { connect } from "react-redux";

function SignUpScreen(props) {
  const [joinNow, setJoinNow] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
      {joinNow ? (
        <Form>
          <Heading>Sign In</Heading>
          <Input type="text" ref={emailRef}  placeholder="Email" />
          <Input type="password" ref={passwordRef} placeholder="Password" />
          <GoogleContainer onClick={props.signInGoogle} >
              <GoogleIcon src={Google} alt="GoogleIcon" />
              <SignInWithGoogle>Sign in with google</SignInWithGoogle>
          </GoogleContainer>
          <Span onClick={() => setJoinNow(false)}>Create An Account</Span>
          <Input type="submit" value="Sign In" onClick={signIn} />
        </Form>
      ) : (
        <Form>
          <Heading>Join Now</Heading>
          <Input type="text" ref={emailRef} placeholder="Email" />
          <Input type="password" ref={passwordRef} placeholder="Password" />
          <Span onClick={() => setJoinNow(true)}>Already have an account?</Span>
          <Input type="submit" value="Join Now" onClick={signUp} />
        </Form>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div``;
const Form = styled.form`
  background-image: linear-gradient(
    to right,
    rgba(171, 199, 52, 1) 0%,
    rgb(24, 152, 175) 51%,
    rgba(171, 199, 52, 1) 100%
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
    background-color: #0fa76f;
    cursor: pointer;
    transition: all 0.6s ease 0s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &:hover {
      background-image: linear-gradient(
        to right,
        rgba(171, 199, 52, 1) 0%,
        rgb(24, 152, 175) 51%,
        rgba(171, 199, 52, 1) 100%
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
const GoogleContainer = styled.div`
 background-image: linear-gradient(
    to right,
    rgb(99, 187, 76) 0%,
    rgb(24, 152, 175) 51%,
    rgb(99, 187, 76) 100%
  );
  background-size: 200%;
  transition: all 0.5s ease 0s;
  padding: 20px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:65%;
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
  }
}
const mapDispatchToProps=(dispatch)=>({
  signInGoogle:()=>dispatch(signInAPI())
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen);
