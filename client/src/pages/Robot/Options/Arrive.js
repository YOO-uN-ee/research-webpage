import React from "react";

import { category_mapping } from '../../Items'
import Option from './RightOption'
import Layout from "./OptionLayout";

const Arrive = () => {
  const help_location = localStorage.getItem('help_location')
  const sub_action = JSON.parse(localStorage.getItem('sub_action'))
  const extension = window.location.pathname.split('/')[1]
  sub_action.push(`to aisle ${help_location}`)
  localStorage.setItem('sub_action', JSON.stringify(sub_action))

  var startTime = new Date()
  localStorage.setItem('enter_time', new Date().toString())
  console.log(startTime)

  var past_count = localStorage.getItem('robot_visit')
  localStorage.setItem('robot_visit', past_count + 1)
  localStorage.setItem('arrive_used', 1)

  return (
    <Layout>
    <div class='flex flex-row'>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
          <div className='robot-parent'>
            <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='location' className='background-image'/>
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
            {category_mapping[help_location]} 섹션에 도착했습니다!<br /><br />
            {category_mapping[help_location]} 섹션에서 쇼핑을 다시 시작하시기 전에, 도움이 더 필요하신가요?<br />
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