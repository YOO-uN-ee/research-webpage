import React from "react";
import { Link } from 'react-router-dom'
import { slug_mapping, option_recommendation } from '../../Items';

import Layout from "../RobotLayout";

const Recommend = () => {
  const option = slug_mapping[localStorage.getItem('rec_item')]
  const help_location = option_recommendation[option][2]
  localStorage.setItem('help_location', option_recommendation[option][2]);
  
  var past_count = localStorage.getItem('robot_visit')
  localStorage.setItem('robot_visit', past_count + 1)

  return (
    <Layout>
      <div class='horizontal-center'>
        <div class='robot-parent'>
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
        </div>

        <div class='main-text'>
          <br/>
          <div>
             A: <Link to='option' onClick={() => {localStorage.setItem('rec_option', 'A')}}>{option_recommendation[option][0]}</Link>
          </div>
          <div>
             B: <Link to='option' onClick={() => {localStorage.setItem('rec_option', 'B')}}>{option_recommendation[option][1]}</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Recommend