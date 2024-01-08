import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./IntroLayout";

const Intro2 = () => {
  return (
    <Layout>
      <div class='general-body'>
        <img src={'/media/images/Intro/intro2.png'} alt='마트 이미지' class='intro-img' />
        <div class='main-text'>
          <br />
          당신은 오늘은 식료품을 사러 근처 마트에 들렀습니다. <br />
          이곳은 당신이 자주 방문하는 집 근처의 식료품점이며, 당신은 이 가게의 구조와 주변 환경에 익숙합니다.
        </div>
      </div>

      <div className='footer'>
        <Link to='../'><img src='/media/images/back.svg' class='icon-button' alt='back'/></ Link>
        <Link to='../3'><img src='/media/images/forward.svg' class='icon-button' alt='forward'/></Link>
      </div>
    </Layout>
  )
}

export default Intro2