import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')
  const [name, setName] = useState("")

  return (
    <Layout>
      <div class='horizontal-center'>
        <div class='robot-parent'>
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
        </div>

        <div class='main-text'>
          <br />
          성함이 어떻게 되시죠, 고객님? <br />
          귀하의 이름을 타이핑해 주세요: 
          <input 
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              localStorage.setItem('user_name', e.target.value)
            }}
            id="inputName"
            placeholder="홍길동"
          />
         </div>
      </div>

      <div className='footer'>
        <div />
        <Link to='../5'><img src='/media/images/forward.svg' class='icon-button' /></Link>
    </div>  
    </Layout>
  )
}

export default Robot