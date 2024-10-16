import React from "react";
import { Link } from 'react-router-dom'
import { slug_mapping, option_recommendation } from '../../Items';

import Layout from "../RobotLayout";

const Recommend = () => {
  const option = slug_mapping[localStorage.getItem('rec_item')]
  const help_location = option_recommendation[option][2]
  const extension = window.location.pathname.split('/')[1]
  localStorage.setItem('help_location', option_recommendation[option][2]);
  
  var past_count = localStorage.getItem('robot_visit')
  localStorage.setItem('robot_visit', past_count + 1)

  console.log('robot_visit')

  var startTime = new Date()
  localStorage.setItem('enter_time', new Date().toString())
  console.log(startTime)

  return (
    <Layout>
      <div class='horizontal-center'>
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
          <br/>
          <div class="robot-option-text">
             A: <Link to='option' onClick={() => {localStorage.setItem('rec_option', 'A')}}>{option_recommendation[option][0]}</Link>
          </div>
          <div class="robot-option-text">
             B: <Link to='option' onClick={() => {localStorage.setItem('rec_option', 'B')}}>{option_recommendation[option][1]}</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Recommend