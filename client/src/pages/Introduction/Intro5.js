import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './IntroLayout'

const Intro5 = () => {
  return (
    <Layout>
      <div class='general-body'>
      <img src={'/media/images/Maps/checkout_map.jpg'} alt="마트 계산대" className='intro-img' />
        <div class='main-text'>
          <br />
            이 실험에는 별다른 시간제한이 없습니다. <br></br>
            장을 다 보셨다면 상단 지도에 보이는 계산대 아이콘을 클릭해서 결제해주시면 됩니다. 
        </div>
      </div>

      <div className='footer'>
        <Link to='../4'><img src='/media/images/back.svg' class='icon-button' alt='back'/></ Link>
        <Link to='../6'><img src='/media/images/forward.svg' class='icon-button' alt='forward'/></Link>
      </div>
    </Layout>
  )
}

export default Intro5