
import React , { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import EmailIcon from './img/ic_mail@3x.png';
import DiscordIcon from './img/ic_discord@3x.png';
import Demo_1_Img from './img/demo_1@3x.png';
import ReviewImg from './img/recommendation@3x.png';
import SlideLeftIcon from './img/left-slide-btn@3x.png';
import SlideRightIcon from './img/right-slide-btn@3x.png';

const slideRenderer = (params) => {
  const { index, key } = params;
  switch (mod(index, 3)) {
    case 0:
      return <Case1 key={key}>slide n°1</Case1>;
    case 1:
      return <Case2 key={key}>slide n°2</Case2>;
    case 2:
      return <Case3 key={key}>slide n°3</Case3>;
    default: return null;
  }
}
const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
const App = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <StyledApp>
      <Nav>
        <Brand>
          WonderFood
        </Brand>
        <ContactUsButton>
          聯絡我們
        </ContactUsButton>
      </Nav>
      <SectionHeader>
        <HeaderContainer>
          <DemoImg alt="demo_1" src={Demo_1_Img}/>
          <HeaderBox>
            <h1>WonderFood</h1>
            <h3>找到你的理想天菜</h3>
            <span>菜單搜尋小幫手</span>
            <Buttons>
              <a>試用DEMO</a>
              <a>聯絡我們</a>
            </Buttons>
          </HeaderBox>
        </HeaderContainer>
      </SectionHeader>
      <SectionDescript>
        <Title>
          我們發現市場上現有工具大多以  “餐廳”  作為單位
          搜尋功能也都圍繞在  “餐廳”  上而不是  “餐點”  上
        </Title>
        <Desc>
          餐廳的菜單資訊大多不齊全，找尋餐點跟價格都得浪費很多時間，結果也常差強人意，
          更別提要能對應到自己的飲食習慣幾乎是不可能。
          身為各種挑嘴的我們決定要改變現況，開發一個能夠在短時間找到適合自己條件的菜單搜尋服務！
        </Desc>
      </SectionDescript>
      <SectionShowcase>
        <VirtualizeSwipeableViews
          index={index} 
          enableMouseEvents 
          onChangeIndex={(_index)=>setIndex(_index)}
          slideRenderer={slideRenderer}
        />
        <ShowcaseController>
        </ShowcaseController>
      </SectionShowcase>
      <SectionReviews>
        <Title>
          我們發現市場上現有工具大多以  “餐廳”  作為單位
          搜尋功能也都圍繞在  “餐廳”  上而不是  “餐點”  上
        </Title>
        <ReviewSnapshopImg alt="review_demo"src={ReviewImg}/>
      </SectionReviews>
      <Footer>
        <ContactUs>
          <li>
            聯絡我們
          </li>
          <li>
            <img alt="discord" src={DiscordIcon}/>
            Discord
          </li>
          <li>
            <img alt='email' src={EmailIcon}/>
            wonderfood@gmail.com
          </li>
        </ContactUs>
        <Copyright>© 2020 WonderFood.</Copyright>
      </Footer>
    </StyledApp>
  );
}

const StyledApp = styled.div``;

const Nav = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FF805C;
  padding: 0 165px;
  border-bottom: 1px solid #fff;
`;

const Brand = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.08em;
  color: #FFFFFF;
`;

const ContactUsButton = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 122%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const SectionContainer = styled.section`
  width: 100%;
  /* height: 100vh; */
`;


const SectionHeader = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF805C;
  padding-top: 78px;
  min-height: auto;
  max-height: 616px;
  overflow: hidden;
`;

const DemoImg = styled.img`
  width: 280px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 15px;
  margin-left: 211px;
  h1 {
    font-weight: bold;
    font-size: 44px;
    text-align: center;
    color: #FFFFFF;
    padding: 0;
    margin: 0 0 30px;
  }
  h3{
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    padding: 0;
    margin: 0 0 15px;
  }
  span{
    font-weight: bold;
    font-size: 28px;
    line-height: 122%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0 0 30px;
  }
`;

const HeaderContainer = styled.div`
  transform: translateY(35px);
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: #369675;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 122%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0 7.5px;
  }
`;

const SectionDescript = styled(SectionContainer)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 95px 80px;
    min-height: auto;
    max-height: 616px;
    background: #fff;
`;

const Title = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  font-weight: bold;
  font-size: 32px;
  line-height: 173%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #369675;
  max-width: 781px;

`;

const Desc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 138%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #383838;
  max-width: 781px;
`;

const SectionShowcase = styled.div``;

const ShowcaseController = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: inherit;
  background: #fff;
`;

const Case = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #369675;
`;
const CaseDemoImg = styled.img`
  width: 208px;
`;

const Case1 = styled(Case)`
  border: 1px solid #fff;
  background: #FEA900,
`;

const Case2 = styled(Case)`
  border: 1px solid #fff;
  background: #B3DC4A,
`;

const Case3 = styled(Case)`
  border: 1px solid #fff;
  background: #6AC0FF,
`;

const SectionReviews = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 751px;
  background: #fff;
`;

const ReviewSnapshopImg = styled.img`
  height: 314px;
`;


const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 55px 0;
  background-color: #383838;
`;

const ContactUs = styled.ul`
  list-style-type: none; 
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 122%;
    margin: 0 20px;
    img{
      margin-right: 5px;
      width: 16px;
    }
  }
`;

const Copyright = styled.span`
  display: block;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.08em;
  color: #B7B7B7;
`;
export default App;
