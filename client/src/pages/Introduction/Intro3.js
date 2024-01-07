import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./IntroLayout";

const Intro3 = () => {
  return (
    <Layout>
      <div class='horizontal-center'>
        <img src={'/media/images/Intro/intro3.jpg'} alt='마트 이미지' class='intro-img' />
        <div class='main-text'>
          {/* <br />
           자주 오는 마트이니만큼 이미 알고 계시겠지만, 마트의 내부 구조는 위와 같습니다. <br />
           실험이 시작되면 당신은 마트를 웹페이지 화면을 넘겨가면서 첫 섹션부터 끝 섹션까지 차례대로 둘러보실 수 있습니다.<br /><br />

           이 마트에는 과일, 채소, 가공식품, 디저트, 과자류 및 라면의 5개의 섹션이 있습니다. */}
           자주 오는 마트이니만큼 이미 알고 계시겠지만, 마트의 내부 구조는 위와 같습니다. <br />
           실험이 시작되면 당신은 마트를 웹페이지 화면을 넘겨가면서 첫 섹션부터 끝 섹션까지 차례대로 둘러보실 수 있습니다.<br /><br />

           이 마트에는 과일, 채소, 가공식품, 디저트, 과자류 및 라면의 5개의 섹션이 있습니다.
        </div>
      </div>

      <div className='footer'>
        <Link to='../2'><img src='/media/images/back.svg' class='icon-button' /></ Link>
        <Link to='../4'><img src='/media/images/forward.svg' class='icon-button' /></Link>
      </div>
    </Layout>
  )
}

export default Intro3