import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./RobotLayout";

const Robot = () => {

  return (
    <Layout>
      <div class='horizontal-center'>
        <video id="pepper-intro" autoPlay="true" controls="controls" className='intro-img' src={'/media/videos/pepper1.mp4'} />

        <div class='main-text'>
          <br />
          이 로봇은 비디오에서 보여진 것처럼 고객과 대화를 나누도록 훈련되었으며, 고객을 돕기 위해 여기 있습니다.
         </div>
      </div>

      <div className='footer'>
        <div />
        <Link to='../3'><img src='/media/images/forward.svg' class='icon-button' /></Link>
    </div>  
    </Layout>
  )
}

export default Robot