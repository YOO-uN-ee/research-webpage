import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';

import Layout from './AisleLayout'
import ShoppingHeader from './ShoppingHeader'
import { slug_mapping } from "../Items";

const Aisle = () => {
  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  return (
    <Layout>
      <div class='flex flex-row'>
        <div class='w-3/4'>
          <ShoppingHeader />

          <div class='main-text'>
            이번에 마주하는 품목란은 양념/통조림 섹션입니다.<br /><br />
            <img src={'/media/images/Aisle/condiment_aisle.jpg'} alt="양념/통조림섹션" class='aisle-image' /> <br />
            양념/통조림 섹션의 상품들을 살펴보시겠습니까?<br /><br />

            <Link to='detail' className="btn btn-primary" onClick={() => {localStorage.setItem('my_cart', JSON.stringify(my_cart))}}>살펴보기</Link>
          </div>
          
          <div className='aisle-footer-left'>
            <Link to='../vegetable'><img src='/media/images/back.svg' alt='전으로' class='icon-button' /></ Link>
            <div />
          </div>
        </div>

        <div class='w-1/4'>
          <img src={'/media/images/Maps/condiment_map.jpg'} alt="마트 양념/통조림섹션 위치" className='aisle-map-image' />
          <div className='aisle-footer-right'>
            <div />
            <div>
              <Popup 
                trigger={<img src='/media/images/cart.svg' alt='cart' class='cart-button'/>}
                position="top right"
                className='item-in-cart'
                alt='카트'>
                  <div>
                    {my_cart.map(item => (
                      <div class='flex justify-between items-center select'>
                        <div class='flex items-center'>
                          <img
                            src={`/api/item/productphoto/${item._id}`} class='mini-image' alt={`${item.name}`}/>
                          <div>{item.name}<br />{item.price}원</div>
                        </div>
                        <img src={'/media/images/delete.svg'} class='delete-icon' alt='delete' onClick={() => {
                          setMyCart(my_cart.filter(i => i.name !== item.name))
                          if(item.slug === slug_mapping[item1]){
                            localStorage.setItem('item1_bool', 0)
                          }
                          else if(item.slug === slug_mapping[item2]){
                            localStorage.setItem('item2_bool', 0)
                          }
                        }}/>
                      </div>
                    ))}
                  </div>
              </Popup>

              <Link to='../dessert'><img src='/media/images/forward.svg' alt='다음으로' class='icon-button align-right' onClick={() => {localStorage.setItem('my_cart', JSON.stringify(my_cart))}}/></Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Aisle