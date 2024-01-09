import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './IntroLayout';
import { utilitarian_list, hedonic_list } from '../Items';

const Intro4 = () => {
  const item1 = localStorage.getItem('item1')
  
  if(!item1) {
    const row1_idx = Math.floor(Math.random() * utilitarian_list.length);
    const row2_idx = Math.floor(Math.random() * hedonic_list.length);

    localStorage.setItem('my_cart', JSON.stringify([]));
    localStorage.setItem('robot_bool', 0);
    
    localStorage.setItem('item1', utilitarian_list[row1_idx]);
    localStorage.setItem('item2', hedonic_list[row2_idx]);
    localStorage.setItem('item1_bool', -1);
    localStorage.setItem('item2_bool', -1);
  }
  
  return (
    <Layout>
      <div class='general-body'>
        <img src={'/media/images/Intro/intro4.jpg'} alt="지갑" className='img' />
        <div class='main-text'>
          <br />
          본격적으로 장을 보기에 앞서, 미리 적어온 구매목록을 확인해봅시다. <br /><br />
          오늘 당신은 {localStorage.getItem('item1')}, {localStorage.getItem('item2')}를 구매하려고 합니다. <br />
          물론 실제 장을 보는 것처럼, 구매목록 의외의 물품도 기분과 필요에 따라서 편하게 구매하시면 됩니다만, 구매목록에 적어놓은 품목은 잊지 말고 구매하도록 합시다. <br /><br />

          <div class='accent-green'>*장보기 목록에 있는 아이템들을 구매하셔야만 정상적인 답변으로 처리되어 실험 참가 보상을 받을 수 있으니, 이 점을 반드시 유의해주시기 바랍니다.*<br /><br /></div>
          
          <div class='accent-black'>장보기 목록: <br />{localStorage.getItem('item1')} 1, {localStorage.getItem('item2')} 1</div>
          <br />
        </div>

        <div class='accent-red'>
          당신은 이 실험에서 장을 본 제품들을 집으로 가져갈 수 있습니다. <br/>
          그러니 마치 실제 쇼핑을 하듯이 신중하게 제품을 선택해 주세요.
        </div>
      </div>

      <div className='footer'>
      <div class='left-button-parent'><Link to='../3'><img src='/media/images/back.svg' alt='전으로' class='left-button' /></Link></div>
      <div class='right-button-parent'><Link to='../5'><img src='/media/images/forward.svg' alt='다음' class='right-button' /></Link></div>
      </div>
  </Layout>
  )
}

export default Intro4