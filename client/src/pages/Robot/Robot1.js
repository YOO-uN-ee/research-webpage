import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import { slug_mapping } from '../Items';
import Header from "./RobotHeader";
import Layout from "./RobotLayout";

const Robot = () => {
  const help_location = localStorage.getItem('help_location')
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
          <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
          <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
        </div>

        <div class='main-text'>
          <br />
           당신이 쇼핑을 하고 있는 도중, 매장 보조용 로봇 직원이 당신에게 다가옵니다.<br /><br />
           이 로봇 점원은 당신이 도움이 필요하다고 생각하는 것 같습니다.
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
                 setMyCart(my_cart.filter((item, index) => index !== idx))

                 const slug_idx1 = my_cart.findIndex((i) => i.slug === slug_mapping[item1])
                 const slug_idx2 = my_cart.findIndex((i) => i.slug === slug_mapping[item2])

                 if(slug_idx1 === -1){
                   setItem1Bool(-1)
                 }
                 else if(slug_idx2 === -1){
                   setItem2Bool(-1)
                 }
                }}/>
              </div>
            ))}
          </div>
      </Popup>
    </div>

    <div class='right-button-parent'><Link to='../2'><img src='/media/images/forward.svg' class='right-button' alt='next'/></Link></div> 
    </Layout>
    </>
  )
}

export default Robot