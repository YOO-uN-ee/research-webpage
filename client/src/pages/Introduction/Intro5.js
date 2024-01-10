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
            장보기 시간 제한은 없습니다. 장보기를 완료하셨다면, <br/>
            상단 지도에 보이는 계산대 아이콘 (하늘색 부분) 을 클릭해서 결제해주시면 됩니다.<br/>
            구매목록에 적어놓은 품목을 구매하지 않으실 경우, 종료되지 않습니다

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