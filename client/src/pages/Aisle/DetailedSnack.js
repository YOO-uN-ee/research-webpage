import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import axios from 'axios';

import Layout from './AisleLayout'
import ShoppingHeader from './ShoppingHeader'

import { slug_mapping } from "../Items";

const Detailed = () => {
  const extension = localStorage.getItem('extension')

  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))

  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')
  const [item1_bool, setBoolItem1] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setBoolItem2] = useState(localStorage.getItem('item2_bool'))

  const elapsedTime = JSON.parse(localStorage.getItem('snack_time'))
  var startTime = new Date();

  const getAllProducts = async()=> {
    try {
      const { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/item/productcategory/snack");
      setProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const storedCount = localStorage.getItem('snack_visits');
    const initialCount = Number(storedCount) || 0;
    localStorage.setItem('snack_visits', initialCount + 1);

    getAllProducts();

    localStorage.setItem('help_location', 'snack');

    // let int;
    if(extension !== 'D1UQDV' && !localStorage.getItem('robot_interacted')){
      const int = setTimeout(() => {
        localStorage.setItem('robot_interacted', true);
        console.log(localStorage.getItem('robot_interacted'))
        window.location.replace('../../help/1');
      }, 10000);
    }

    // clearTimeout(int);
  }, []);

  return (
    <Layout>
      <div class='detailed-header'>
        <div>
          <ShoppingHeader />
        </div>

        <div class='columns-2'>
          <img src='/media/images/Aisle/snack_aisle.jpg' class='detailed-header-image' alt='snack aisle'/>
          <img src='/media/images/Maps/snack_map.jpg' class='detailed-header-image' alt='snack map'/>
        </div>
      </div>

      <div class='detailed-body'>
        <div class='grid grid-cols-6 gap-2'>
        {product?.map((p) => (
            <>
            <div>
              <Popup trigger={
                <img
                  src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${p._id}`}
                  className="card-img-top" 
                  alt={`${p.name}`}
                  onClick={() => {
                    setIsOpen(true);
                  }}/>} 
                modal>
                <img
                  src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${p._id}`}
                  className="modal-image" 
                  alt={`${p.name}`}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
            </Popup>
            
            <div class='flex justify-between'>
            <div>
              <div>{p.name}</div>
              <div>{p.price}원</div>
            </div>
            <img 
              src={'/media/images/cart.svg'} 
              alt="카트 아이콘" 
              className='cart-icon'
              onClick={() => {
                setMyCart(oldArray => [...oldArray, {name:p.name, _id:p._id, price:p.price}]);
                if(p.slug === slug_mapping[item1]){
                  setBoolItem1(1)
                  localStorage.setItem('item1_bool', 1)
                  localStorage(item1_bool)
                }
                else if(p.slug === slug_mapping[item2]){
                  setBoolItem2(1)
                  localStorage.setItem('item2_bool', 1)
                }
              }}
            />
            </div>
            </div>
            </>
          ))}
        </div>
      </div>

      <div class='footer'>
        <div>
          <div class='cart-button'></div>
          <Link to='../snack' onClick={() => {
            localStorage.setItem('my_cart', JSON.stringify(my_cart))
            var endTime = new Date()
            var timeDiff = endTime - startTime
            localStorage.setItem('snack_time', elapsedTime + timeDiff)
          }}><img src='/media/images/back.svg' class='icon-button' alt='back'/></Link>
        </div>

        <div>
          <Popup 
            trigger={<img src='/media/images/cart.svg' class='cart-button' alt='cart'/>}
            position="top right"
            className='item-in-cart'>
              <div>
                {my_cart.map(item => (
                  <div class='flex justify-between items-center select'>
                    <div class='flex items-center'>
                      <img
                        src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${item._id}`} class='mini-image' alt={`${item.name}`} />
                      <div>{item.name}<br />{item.price}원</div>
                    </div>
                    <img src={'/media/images/delete.svg'} class='delete-icon' alt='지우기' onClick={() => {
                      setMyCart(my_cart.filter(i => i.name !== item.name))
                      if(item.slug === slug_mapping[item1]){
                        setBoolItem1(0)
                        localStorage.setItem('item1_bool', 0)
                      }
                      else if(item.slug === slug_mapping[item2]){
                        setBoolItem2(0)
                        localStorage.setItem('item2_bool', 0)
                      }
                    }}/>
                  </div>
                ))}
              </div>
          </Popup>
          
          {item1_bool > 0 && item2_bool > 0 &&
          <Link to='../checkout' onClick={() => {
            localStorage.setItem('my_cart', JSON.stringify(my_cart))
            var endTime = new Date()
            var timeDiff = endTime - startTime
            localStorage.setItem('snack_time', elapsedTime + timeDiff)
          }}><img src='/media/images/forward.svg' class='icon-button align-right' alt='앞으로'/></Link>}
        </div>
      </div>
    </Layout>
  )
}

export default Detailed