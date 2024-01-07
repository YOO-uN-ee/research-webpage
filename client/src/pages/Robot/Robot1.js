import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')

  return (
    <Layout>
      <div class='horizontal-center'>
        <div class='robot-parent'>
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
        </div>

        <div class='main-text'>
          <br />
           당신이 쇼핑을 하고 있는 도중, 매장 보조용 로봇 직원이 당신에게 다가옵니다.<br /><br />
           이 로봇 점원은 당신이 도움이 필요하다고 생각하는 것 같습니다.
         </div>
      </div>

      <div className='footer'>
        <div />
        <Link to='../2'><img src='/media/images/forward.svg' class='icon-button' alt='next'/></Link>
    </div>  
    </Layout>
  )
}

export default Robot