import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import Layout from "./RobotLayout";
import { slug_mapping } from '../Items';

const Robot = () => {
    const extension = localStorage.getItem('extension')
    const help_location = localStorage.getItem('help_location')

    const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')

    const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
    const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  return (
    <Layout>
      <div class='horizontal-center general-body'>
        <video id="pepper-bye" autoPlay="true" controls="controls" className='intro-img' src={'/media/videos/Pepper_goodbye.mp4'} />
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
                  setMyCart(my_cart.filter(i => i.name !== item.name))
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

      <div className='footer'>
        <div />
        {extension !== 'ZOX019' &&
        <div class='robot-option-text'><Link to={`../../aisle/${help_location}`}><img src='/media/images/forward.svg' class='icon-button' alt='next'/></Link></div>}

        {extension === 'ZOX019' &&
        <div class='robot-option-text'><Link to={`../../thankyou/1`}><img src='/media/images/forward.svg' class='icon-button' alt='next'/></Link></div>}
    </div>  
    </Layout>
  )
}

export default Robot