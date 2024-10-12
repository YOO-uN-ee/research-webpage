import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import { slug_mapping } from '../Items';
import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')
  const extension = window.location.pathname.split('/')[1]
  const [name, setName] = useState("")

  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  return (
    <Layout>
      <div class='horizontal-center general-body'>
        <div class='robot-parent'>
          <br />
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
          성함이 어떻게 되시죠, 고객님? <br />
          귀하의 이름을 타이핑해 주세요: 
          <input 
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              localStorage.setItem('user_name', e.target.value)
            }}
            id="inputName"
            placeholder="홍길동"
          /><br/><br/><br/>
          {/* 이름이나 닉네임을 작성하여도 무방하고, 작성하지 않아도 다음으로 넘어갈 수 있습니다 */}
        </div>
      </div>

      <div class='cart-button-parent'>
      <Popup 
        trigger={<img src='/media/images/cart.svg' class='cart-button' alt='cart'/>}
        position="top right"
        className='item-in-cart'>
          <div>
            {my_cart.map(item => (
              <div class='flex justify-between items-center select'>
                <div class='flex items-center'>
                  <img
                    src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${item._id}`} class='mini-image' alt={`${item.name}`}/>
                  <div>{item.name}<br />{item.price}원</div>
                </div>
                <img src={'/media/images/delete.svg'} class='delete-icon' alt='지우기' onClick={() => {
                  const idx = my_cart.findIndex((i) => i.name === item.name)                  
                  const tmp_cart = my_cart.filter((item, index) => index !== idx)

                  const slug_idx1 = tmp_cart.findIndex((i) => i.slug === slug_mapping[item1])
                  const slug_idx2 = tmp_cart.findIndex((i) => i.slug === slug_mapping[item2])

                  if(slug_idx1 === -1){
                    setItem1Bool(-1)
                  }
                  else if(slug_idx2 === -1){
                    setItem2Bool(-1)
                  }

                  setMyCart(tmp_cart)
                }}/>
              </div>
            ))}
          </div>
      </Popup>
      <div class='cart-button-count-container'><div class='cart-button-surrounding' /><div class='cart-button-text'>{my_cart.length}</div></div>
    </div>

    <div class='right-button-parent'><Link to='../5'><img src='/media/images/forward.svg' class='right-button' alt='next'/></Link></div> 
    </Layout>
  )
}

export default Robot