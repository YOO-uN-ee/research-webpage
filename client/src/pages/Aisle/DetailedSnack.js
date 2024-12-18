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
  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  var startTime = new Date();
  const exitScreen = ()=>{
    const elapsedTime = JSON.parse(localStorage.getItem('snack_time'))
    var endTime = new Date()
    var timeDiff = endTime - startTime

    localStorage.setItem('my_cart', JSON.stringify(my_cart))
    localStorage.setItem('snack_time', elapsedTime + timeDiff)
    localStorage.setItem('item1_bool', item1_bool)
    localStorage.setItem('item2_bool', item2_bool)
  }

  const redirect = () => {
    if(extension !== 'D1UQDV' && localStorage.getItem('robot_interacted') < 0) {
      localStorage.setItem('robot_interacted', 1);
      localStorage.setItem('treatment_visited', 1);
      localStorage.setItem('treatment_aisle', localStorage.getItem('help_location'));
      localStorage.setItem('treatment_option', JSON.stringify([]));
      localStorage.setItem('sub_action', JSON.stringify([]));

      const elapsedTime = JSON.parse(localStorage.getItem('snack_time'))
      var endTime = new Date()
      var timeDiff = endTime - startTime

      localStorage.setItem('snack_time', elapsedTime + timeDiff);

      window.location.replace('../../help/1'); 
    }
  }

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

    const int = setTimeout(() => {
      redirect();
    }, 4000);

    return () => clearTimeout(int);

  }, []);

  return (
    <Layout>
      <div class='detailed-header'>
        <div>
          <ShoppingHeader />
        </div>

        <div class='columns-2'>
          <img src='/media/images/Aisle/snack_aisle.jpg' class='detailed-header-image' alt='snack aisle'/>
          <img src='/media/images/Maps/snack_map.jpg' class='detailed-header-image' alt='snack map' 
            onClick={() => {
              localStorage.setItem('my_cart', JSON.stringify(my_cart))
              if(item1_bool > 0 && item2_bool > 0) {window.location.replace('../checkout')}
          }}/>
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
                const tmp_cart = JSON.parse(localStorage.getItem('my_cart'))
                tmp_cart.push({name:p.name, _id:p._id, price:p.price, slug:p.slug})

                setMyCart(oldArray => [...oldArray, {name:p.name, _id:p._id, price:p.price, slug:p.slug}]);
                localStorage.setItem('my_cart', JSON.stringify(tmp_cart));
                // localStorage.setItem('tmp_item', JSON.stringify({name:p.name, _id:p._id, price:p.price, slug:p.slug}));

                if(p.slug === slug_mapping[item1]){
                  setItem1Bool(1)
                  localStorage.setItem('item1_bool', 1)
                }
                else if(p.slug === slug_mapping[item2]){
                  setItem2Bool(1)
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
                    localStorage.setItem('item1_bool', -1)
                  }
                  else if(slug_idx2 === -1){
                    setItem2Bool(-1)
                    localStorage.setItem('item2_bool', -1)
                  }

                  setMyCart(tmp_cart)
                  localStorage.setItem('my_cart', JSON.stringify(tmp_cart));
                }}/>
              </div>
            ))}
          </div>
      </Popup>
      <div class='cart-button-count-container'><div class='cart-button-surrounding' /><div class='cart-button-text'>{my_cart.length}</div></div>
      </div>

      <div class='footer'>
        <Link to='../snack'><img src='/media/images/back.svg' class='left-button' alt='back' onClick={()=>(exitScreen())}/></Link>

        {item1_bool > 0 && item2_bool > 0 &&
        <Link to='../checkout'><img src='/media/images/forward.svg' class='right-button' alt='forward'onClick={()=>(exitScreen())}/></Link>}
        {(item1_bool < 0 || item2_bool < 0) &&
        <div class='right-button'></div>}
      </div>
    </Layout>
  )
}

export default Detailed