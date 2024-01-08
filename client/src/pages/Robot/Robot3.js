import React from "react";
import { Link } from 'react-router-dom'

import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')

  return (
    <Layout>
      <div class='horizontal-center general-body'>
        <div class='robot-parent'>
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
        </div>

        <div class='main-text'>
          <br />
          안녕하세요! 혹시 도움이 필요하시다면 제가 도와드릴게요!
         </div>
      </div>

      <div className='footer'>
        <div />
        <Link to='../4'><img src='/media/images/forward.svg' class='icon-button' alt='next'/></Link>
    </div>  
    </Layout>
  )
}

export default Robot