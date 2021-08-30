
import React , { useState } from 'react';
import styled, { css } from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import EmailIcon from './img/ic_mail@3x.png';
import DiscordIcon from './img/ic_discord@3x.png';
import ReviewImg from './img/recommendation@3x.png';
import SlideLeftIcon from './img/left-slide-btn@3x.png';
import SlideRightIcon from './img/right-slide-btn@3x.png';
import Demo_1_Img from './img/demo_1@3x.png';
import Demo_2_Img from './img/demo_2@3x.png';
import Demo_3_Img from './img/demo_3@3x.png';
import Demo_4_Img from './img/demo_4@3x.png';

import MenuIcon from './img/ic_menu@3x.png';
import SearchIcon from './img/ic_search@3x.png';
import FilterIcon from './img/ic_filter@3x.png';

const SIZE = {
  tablet: 1024,
  mobile: 768,
};

const media = Object.keys(SIZE).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (...args) => css`
      @media (max-width: ${SIZE[key]}px) {
        ${css(...args)}
      }
    `,
  };
}, {});


const slideRenderer = (params) => {
  const { index, key } = params;
  const realIndex = mod(index, 3);
  switch (realIndex) {
    case 0:
      return (
        <Case key={key}>
          <CaseContainer>
            <CaseContent>
              <CaseTitle>
                <CaseIcon src={MenuIcon}/>
                菜單電子化 
              </CaseTitle>
              <CaseDesc>
                <span>餐廳數量齊全</span><br/>
                網紅名店到巷口小吃，不分種類全部網羅。<br/><br/>
                <span>菜單列表呈現</span><br/>
                餐點資訊一目暸然，快速瀏覽無障礙！<br/><br/>
                <span>價格資訊透明 </span><br/>
                餐點價格即時更新，掌握預算不苦惱。<br/><br/>
              </CaseDesc>
            </CaseContent>
            <CaseDemoImg src={Demo_2_Img}/>
          </CaseContainer>
        </Case>
      );
    case 1:
      return (
        <Case key={key}>
          <CaseContainer>
            <CaseDemoImg src={Demo_3_Img}/>
            <CaseContent>
              <CaseTitle>
                <CaseIcon src={SearchIcon}/>
                快速搜尋 
              </CaseTitle>
              <CaseDesc>
                <span>關鍵字搜尋比對</span><br/>
                輸入關鍵字就能快速搜尋特定餐點，價格排序、條件篩選也沒問題！<br/><br/>
                <span>標籤式引導搜尋</span><br/>
                吃飯時間沒想法？跟隨＃標籤引導，快速找到下一餐！<br/><br/>
                <span>主題式菜色分類 </span><br/>
                今晚想來點異國料理？主題式分類輕鬆網羅各式風格的餐點！<br/><br/>
              </CaseDesc>
            </CaseContent>
          </CaseContainer>
        </Case>
      );
    case 2:
      return (
        <Case key={key}>
          <CaseContainer>
            <CaseContent>
              <CaseTitle>
                <CaseIcon src={FilterIcon}/>
                食材過濾 
              </CaseTitle>
              <CaseDesc>
                <span>宗教信仰食材過濾</span><br/>
                因宗教信仰而不吃的特定食材過濾，用餐不煩惱！<br/><br/>
                <span>過敏源過濾</span><br/>
                海鮮、牛奶等過敏源過濾，享用美食更安心！<br/><br/>
                <span>喜好過濾 </span><br/>
                調味料篩選，不用再為了香菜和老闆過不去！<br/><br/>
              </CaseDesc>
            </CaseContent>
            <CaseDemoImg src={Demo_4_Img}/>
          </CaseContainer>
        </Case>
      );
    default: return null;
  }
}
const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
const App = () => {
  const [index, setIndex] = useState(0);
  const realIndex = mod(index, 3);
  return (
    <StyledApp>
      {/* <Nav>
        <Brand>
          WonderFood
        </Brand>
        <ContactUsButton as="a" href="mailto:solargang@gmail.com" target="_blank" rel="noreferrer" >
          聯絡我們
        </ContactUsButton>
      </Nav> */}
      <SectionHeader>
        <HeaderContainer>
          <DemoImg alt="demo_1" src={Demo_1_Img}/>
          <HeaderBox>
            <h1>WonderFood</h1>
            <h3>找到你的理想天菜</h3>
            <span>菜單搜尋小幫手</span>
            <Buttons>
              <a href="https://app.wonderfood.menu" target="_blank" rel="noreferrer" >試用DEMO</a>
              <a href="mailto:solargang@gmail.com" target="_blank" rel="noreferrer" >聯絡我們</a>
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
        <ShowcaseContainer
          index={index} 
          enableMouseEvents 
          onChangeIndex={(_index, last)=>setIndex(_index)}
          slideRenderer={slideRenderer}
        />
        <ShowcaseController>
          <ShowcaseButtons>
            <PrevBtn onClick={()=>setIndex(index - 1)}>
              <img alt="PrevBtn" src={SlideLeftIcon}/>
            </PrevBtn>
            <NextBtn onClick={()=>setIndex(index + 1)}>
              <img alt="NextBtn" src={SlideRightIcon}/>
            </NextBtn>
          </ShowcaseButtons>
          <ShowcaseIndicator>
            <IndicatorDot isActive={realIndex === 0} onClick={()=>{setIndex(0)}}/>
            <IndicatorDot isActive={realIndex === 1} onClick={()=>setIndex(1)}/>
            <IndicatorDot isActive={realIndex === 2} onClick={()=>setIndex(2)}/>
          </ShowcaseIndicator>
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
            <img alt="email" src={EmailIcon}/>
            <a href="mailto:solargang@gmail.com" target="_blank" rel="noreferrer" >聯絡我們</a>
          </li>
          <li>
            <img alt="discord" src={DiscordIcon}/>
            Discord
          </li>
        </ContactUs>
        <Copyright>© 2021 WonderFood.</Copyright>
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
  ${media.tablet`
    justify-content: center;
  `}
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
  ${media.tablet`
    display: none;    
  `}
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
  padding-top: 120px;
  min-height: auto;
  max-height: 616px;
  overflow: hidden;
  ${media.tablet`
    max-height: 100%;
    padding-top: 40px;
  `}
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
  ${media.tablet`
    margin: 0 0 35px;
  `}
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
  ${media.tablet`
    transform: translateY(0);
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  `}
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
    ${media.tablet`
      padding: 60px 40px;
      font-size: 24px;
    `}
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
  ${media.tablet`
    font-size: 24px;
  `}
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
  ${media.tablet`
    font-size: 16px;
  `}
`;

const SectionShowcase = styled.div`
  position: relative;
  width: 100%;
`;

const ShowcaseContainer = styled(VirtualizeSwipeableViews)`
  position: relative;
  min-height: 610px;
  ${media.tablet`
    min-height: auto;
  `}
`;

const ShowcaseController = styled.div`
  top: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background: #fff; */
`;

const ShowcaseButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowcaseIndicator = styled.ul`
  position: absolute;
  display: flex;
  width: 44px;
  flex: none;
  bottom: 0px;
  height: auto;
  justify-content: space-around;
  align-items: center;
  list-style-type: none; 
  padding: 0;
  margin: 0 0 25px;
  
`;

const IndicatorDot = styled.li`
  pointer-events: auto;
  display: block;
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  opacity: ${({isActive})=> isActive ? 1 : 0.5};
  border-radius: 8px;
`;

const ControlBtn = styled.button`
  pointer-events: auto;
  display: block;
  width: 27px;
  padding: 0;
  margin: 0 40px;  
  outline: none;
  background: none;
  border: none;
  img{
    width: 100%;
  }
 ${media.tablet`
    display: none;
  `}
`;

const PrevBtn = styled(ControlBtn)``;
const NextBtn = styled(ControlBtn)``;

const Case = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 610px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #369675;
  ${media.tablet`
    align-items: flex-start;
  `}
`;


const CaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    flex-direction: column;
  `}
`;

const CaseDemoImg = styled.img`
  height: 420px;
  ${media.tablet`
      display: none;
  `}
`;

const CaseContent = styled.div`
  margin: 135px;
  ${media.tablet`
    margin: 50px;
  `}
`;

const CaseTitle = styled.h1`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 30px;
  ${media.tablet`
    font-size: 24px;
  `}
`;

const CaseIcon = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const CaseDesc = styled.p`
  font-size: 20px;
  max-width: 353px;
  line-height: 122%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  span{
    font-weight: bold;
  }
  ${media.tablet`
    font-size: 14px;
  `}
`;

const SectionReviews = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 95px 80px;
  min-height: auto;
  background: #fff;
  ${media.tablet`
    padding: 60px 40px;
  `}
`;

const ReviewSnapshopImg = styled.img`
  height: 314px;
  ${media.tablet`
    width: 100%;
    height: auto;
    /* display: none; */
  `}
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
  margin-bottom: 25px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 122%;
    margin: 0 20px;
    ${media.tablet`
      margin: 10px 0;
    `}
    img{
      margin-right: 5px;
      width: 16px;
    }
  }
  ${media.tablet`
    flex-direction: column;
  `}
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
