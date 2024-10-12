import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import { slug_mapping } from '../Items';
import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')
  const extension = window.location.pathname.split('/')[1]

  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  return (
    <>
    <Layout>
      <div class='horizontal-center general-body'>
        <div class='robot-parent'>
          {extension === 'FFSRWM' && 
            <audio id="pepper-audio" autoPlay={true} controls="controls" src={'/media/sounds/pepper_audio.mp3'} className='audio-bar' /> 
          }
          {extension === 'BIKTPB' && 
            <audio id="human-audio" autoPlay={true} controls="controls" src={'/media/sounds/human_voice.mp3'} className='audio-bar' /> 
          }
          {extension === 'AOTLLO' && 
            <audio id="human2-audio" autoPlay={true} controls="controls" src={'/media/sounds/human_voice2.mp3'} className='audio-bar' /> 
          }

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

        {extension === 'FFSRWM' && 
        <div class='main-text'>
          <br />
          이 로봇은 고객을 돕기 위해 여기 있습니다.<br /><br />
          “안녕하세요. 저는 인공지능 로봇 페퍼에요”<br/>
         </div> }

         {extension !== 'FFSRWM' && 
        <div class='main-text'>
          <br />
          직원은 고객을 돕기 위해 여기 있습니다.<br /><br />
          “안녕하세요.” 
         </div> }
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

    <div class='right-button-parent'><Link to='../3'><img src='/media/images/forward.svg' class='right-button' alt='next'/></Link></div> 
    </Layout>
    </>
  )
}

export default Robot