import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import Layout from './AisleLayout'
import ShoppingHeader from './ShoppingHeader'
import { slug_mapping } from "../Items";

const Aisle = () => {
  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  console.log(localStorage.getItem('fruit_time'))

  const exitScreen = ()=>{
    localStorage.setItem('my_cart', JSON.stringify(my_cart))
    localStorage.setItem('item1_bool', item1_bool)
    localStorage.setItem('item2_bool', item2_bool)
  }

  return (
    <Layout>
      <div class='flex flex-row'>
        <div class='w-3/4'>
          <ShoppingHeader />

          <div class='main-text'>
            이번에 마주하는 품목란은 채소 섹션입니다.<br /><br />
            <img src={'/media/images/Aisle/vegetable_aisle.jpg'} alt="채소섹션" class='aisle-image' /> <br />
            채소 섹션의 상품들을 살펴보시겠습니까?<br /><br />

            <Link to='detail' className="btn btn-primary" onClick={() => {localStorage.setItem('my_cart', JSON.stringify(my_cart))}}>살펴보기</Link>
          </div>
          
          <div class='left-button-parent'>
            <Link to='../fruit'><img src='/media/images/back.svg' class='left-button' alt='fruit'/></ Link>
            <div />
          </div>
        </div>

        <div class='w-1/4'>
          <img src={'/media/images/Maps/vegetable_map.jpg'} alt="마트 채소섹션 위치" className='aisle-map-image'  
            onClick={() => {
              localStorage.setItem('my_cart', JSON.stringify(my_cart))
              if(item1_bool > 0 && item2_bool > 0) {window.location.replace('./checkout')}
          }}/>

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

          <div class='right-button-parent'><Link to='../condiment'><img src='/media/images/forward.svg' class='right-button' alt='forward'onClick={()=>(exitScreen())}/></Link></div>
        </div>
      </div>
    </Layout>
  )
}

export default Aisle