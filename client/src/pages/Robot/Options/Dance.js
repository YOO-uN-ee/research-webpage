import React from "react";

import Option from './RightOption'
import Layout from "./OptionLayout";

const Dance = () => {
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
          <video id="pepper-dance" autoplay='true' controls="controls" className='video' src={'/media/videos/pepper_dance.mp4'} />
          <div class='main-text'><br />재밌었어요! 더 도움이 필요하신가요?<br /></div>
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

export default Dance