import React from "react";

import Option from './RightOption'
import Layout from "./OptionLayout";

const Arrive = () => {
  const extension = window.location.pathname.split('/')[1]
  const help_location = localStorage.getItem('help_location')
  
  var past_count = localStorage.getItem('robot_visit')
  localStorage.setItem('robot_visit', past_count + 1)

  var startTime = new Date()
  localStorage.setItem('enter_time', new Date().toString())
  console.log(startTime)

  return (
    <Layout>
    <div class='flex flex-row'>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
          <div class='robot-parent'>
              <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
              {extension === 'FFSRWM' && 
                <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
              }

              {extension === 'BIKTPB' && 
                <img src='/media/images/sa1.png' alt='agent' className='robot-image'/>
              }

              {extension === 'AOTLLO' && 
                <img src='/media/images/sa2.png' alt='smiling-agent' className='robot-image'/>
              }
            </div>

          <div class='main-text'>
            <br />
            네, 오늘 날씨가 정말 좋네요.<br />
            어떻게 도와드릴까요?<br /><br />
          </div>
        </div>
      </div>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check main-text'>
          <Option />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Arrive