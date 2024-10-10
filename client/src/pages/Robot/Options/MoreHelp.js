import React from "react";
import Option from './RightOption'
import Layout from "./OptionLayout";

const MoreHelp = () => {
  const help_location = localStorage.getItem('help_location')
  const extension = localStorage.getItem('extension')

  return (
    <Layout>
    <div class='flex flex-row'>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
          <div className='robot-parent'>
            <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='location' className='background-image'/>
            {/* <img src='/media/images/robot.png' alt='robot' className='robot-image'/> */}
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
          <div class='main-text'><br />더 도움이 필요하신가요?</div>
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

export default MoreHelp