import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./IntroLayout";

const Intro3 = () => {
  return (
    <Layout>
      <div class='horizontal-center general-body'>
        <img src={'/media/images/Intro/intro3.jpg'} alt='마트 이미지' class='intro-img' />
        <div class='main-text'>
            <br/>마트의 내부 구조는 위의 그림과 같습니다.<br/>
            현재 공사 중인 섹션을 제외하고, 과일, 야채 및 가공 야채류, 통조림/조미료, 디저트, 과자/라면의 5개 섹션이 있습니다.<br/><br/>

            우측 하단의 화살표 버튼을 이용하여 다섯 개의 섹션을 둘러보시기 바랍니다.<br/>
            이전 섹션으로 돌아가고 싶으신 경우, 좌측 하단의 화살표 버튼을 눌러주세요.

        </div>
      </div>

      <div className='footer'>
        <Link to='../2'><img src='/media/images/back.svg' class='icon-button' alt='back'/></ Link>
        <Link to='../4'><img src='/media/images/forward.svg' class='icon-button' alt='forward'/></Link>
      </div>
    </Layout>
  )
}

export default Intro3