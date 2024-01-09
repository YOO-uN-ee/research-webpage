import React from "react";

import Option from './RightOption'
import Layout from "./OptionLayout";

const Where = () => {
  var past_count = localStorage.getItem('robot_visit')
  localStorage.setItem('robot_visit', past_count + 1)

  return (
    <Layout>
    <div class='flex flex-row'>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
          <video id="pepper-where" autoPlay="true" controls="controls" className='video' src={'/media/videos/pepper_wherefrom.mp4'} />
          <div class='main-text'><br />재밌었어요! 더 도움이 필요하신가요?</div>
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

export default Where