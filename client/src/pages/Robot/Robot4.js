import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import { slug_mapping } from '../Items';
import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')
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
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
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
          />
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
                  const idx = my_cart.findIndex((i) => i.name !== item.name)
                  my_cart.splice(idx, 1)
                  setMyCart(my_cart)
                  
                  if(item.slug === slug_mapping[item1]){
                    setItem1Bool(-1)
                  }
                  else if(item.slug === slug_mapping[item2]){
                    setItem2Bool(-1)
                  }
                }}/>
              </div>
            ))}
          </div>
      </Popup>
    </div>

    <div class='right-button-parent'><Link to='../5'><img src='/media/images/forward.svg' class='right-button' alt='next'/></Link></div> 
    </Layout>
  )
}

export default Robot