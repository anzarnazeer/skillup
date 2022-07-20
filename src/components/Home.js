import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';

function Home(props) {
  return (
    <MainContainer>
      {!props.user && <Redirect to="/" />}
        <Header/>
        <Layout>
           <LeftSide />
           <Main />
           <RightSide/>
        </Layout>
    </MainContainer>
  )
}
const MainContainer = styled.div`
    background-color:#f9f9f9;
`;
const Layout = styled.div`
padding: 100px 240px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1440px){
      padding: 100px 60px;
      }
      @media all and (max-width: 1280px){
      padding: 100px 26px;
      }
    @media (max-width:980px){
      padding: 50px 26px;
        flex-direction: column;
    }
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
    @media (max-width: 481px) {
      padding: 28px 5px;
    }
`;

const mapStateToProps=(state)=>{
  return{
    user:state.userState.user,
  }
}

export default connect(mapStateToProps)(Home);