import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import Layout from "./RobotLayout";
import { slug_mapping } from '../Items';

const Robot = () => {
    const extension = window.location.pathname.split('/')[1]
    const help_location = localStorage.getItem('help_location')

    const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')

    const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
    const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

    const spent_time = (new Date() - Date.parse(localStorage.getItem('enter_time')))/1000
    var treatment_time = JSON.parse(localStorage.getItem('treatment_time'))
    treatment_time.push(spent_time)
    treatment_time.shift()
    localStorage.setItem('treatment_time', JSON.stringify(treatment_time))

    console.log(localStorage.getItem('treatment_time'))

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