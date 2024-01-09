import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Popup from 'reactjs-popup';

import { slug_mapping } from '../../Items';
import Layout from "./OptionLayout";

const RecommendOption = () => {
  const slug = slug_mapping[localStorage.getItem('rec_item')]
  const option = localStorage.getItem('rec_option')
  const help_location = localStorage.getItem('help_location')
  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))
  
  const [product, setProduct] = useState([]);
  const [main, setMain] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))

  const getAllOptions = async()=> {
    try {
      const { data } = await axios.get(`https://research-backend-3mwd.onrender.com/api/item/getProduct/${slug}/${option}`);
      const tmp_products = data.products
      setMain(tmp_products[0]);

      tmp_products.shift()
      setProduct(tmp_products);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOptions();
  }, []);

  return (
    <Layout>
    <div class='flex flex-row robot-body'>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
          <div className='robot-parent'>
            <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='location' className='background-image'/>
            <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
          </div>
        </div>
      </div>
      <div class='w-1/2 vertical-center-relative'>
        <div class='area-check'>
        <div class='main-text'>
          선택하신 옵션 중에서는 이 제품을 추천드립니다. 자세한 내용은 이미지를 클릭해 주세요.
          <div class='flex flex-row justify-between'>
            <div> </div>
            <div>
              <Popup trigger={<img 
                src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${main._id}`} 
                alt={`${main.name}`}
                className='recommend-image' 
                onClick={() => {
                  setIsOpen(true);
                }} 
              />} modal>
                <img 
                src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${main._id}`}
                alt={`${main.name}`}
                className='modal-image' 
                onClick={() => {
                  setIsOpen(true);
                }} />
              </Popup>
              <div class='flex justify-between'>
                <div class='mini-text'>{main.name}</div>
                <img 
                  src={'/media/images/cart.svg'} 
                  alt="카트 아이콘" 
                  className='cart-icon'
                  onClick={() => {
                    setMyCart(oldArray => [...oldArray, {name:main.name, _id:main._id, price:main.price}]);
                    if(main.slug === slug_mapping[item1]){
                      localStorage.setItem('item1_bool', 1)
                    }
                    else if(main.slug === slug_mapping[item2]){
                      localStorage.setItem('item2_bool', 1)
                    }
                  }}
                />
              </div>
            </div>
            <div> </div>
          </div>
          <br/>
          <div class='main-text'>이 제품의 가격은 {main.price}원입니다. <br/><br/></div>
        </div>

        <div>
          <div class='main-text'>비슷한 품질의 몇 가지 다른 상품들도 추천해 드리겠습니다. 아래의 추천순으로 좌측부터 우측으로 나열하였으니 참고해 주세요.</div>
        
        <div class='flex columns-2'>
        {product?.map((p) => (
          <>
            <div>
                <Popup trigger={<img
                src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${p._id}`}
                alt={`${p.name}`}
                className="recommend-image" 
                onClick={() => {
                  setIsOpen(true);
                }}
              />} modal>
                <img
                src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${p._id}`}
                alt={`${p.name}`}
                className="modal-image" 
                onClick={() => {
                  setIsOpen(true);
                }}
              />
              </Popup>
            
              <div class='flex justify-between'>
                <div class='items-left'>
                  <div class='mini-text'>{p.name} <br />{p.price}원</div>
                </div>
                <img 
                  src={'/media/images/cart.svg'} 
                  alt="카트 아이콘" 
                  className='cart-icon'
                  onClick={() => {
                    setMyCart(oldArray => [...oldArray, {name:p.name, _id:p._id, price:p.price, slug: p.slug}]);
                    if(p.slug === slug_mapping[item1]){
                      localStorage.setItem('item1_bool', 1)
                    }
                    else if(p.slug === slug_mapping[item2]){
                      localStorage.setItem('item2_bool', 1)
                    }
                  }}
                />
              </div>
            </div>
          </> 
        ))}</div>
        <div class='main-text'><br /> 지금 바로 구매를 원하신다면, 제품 이미지 하단의 카트 아이콘을 클릭하셔서 장바구니에 추가하실 수 있습니다.</div>
        </div>
        </div>
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

    <div class='footer'>
      <div></div>
      <Link to='../more' onClick={() => {
            localStorage.setItem('my_cart', JSON.stringify(my_cart))
      }}><img src='/media/images/forward.svg' class='right-button' alt='forward'/></Link>
    </div>
    </Layout>

    // <>
    //   <div class='container mx-auto'>
    //     <div class='flex flex-row justify-between'>

    //       <div class='w-1/2'>
    //       {product?.map((p) => (
    //         <>
    //         <div>
    //           <Popup trigger={<img
    //           src={`/api/item/productphoto/${p._id}`}
    //           className="card-img-top" 
    //           onClick={() => {
    //             setIsOpen(true);
    //           }}
    //         />} modal>
    //           <img
    //           src={`/api/item/productphoto/${p._id}`}
    //           className="modal-image" 
    //           onClick={() => {
    //             setIsOpen(true);
    //           }}
    //         />
    //         </Popup>
            
    //         <div class='flex justify-between'>
    //         <div>
    //           <div>{p.name}</div>
    //           <div>{p.price}원</div>
    //         </div>
    //         <img 
    //           src='/media/images/cart.svg' 
    //           alt="cart-icon" 
    //           class='cart-image'
    //           onClick={() => {
    //             my_cart.push(p);
    //             if(p.slug == slug_mapping[item1]){
    //               localStorage.setItem('item1_bool', 1)
    //             }
    //             else if(p.slug == slug_mapping[item2]){
    //               localStorage.setItem('item2_bool', 1)
    //             }
    //           }}
    //         />
    //         </div>
    //         </div>
    //         </>
    //       ))}
    //         선택하신 옵션 중에서는 이 제품을 추천드립니다. 자세한 내용은 이미지를 클릭해 주세요.
    //         이 제품의 가격은 원입니다.
    //         비슷한 품질의 몇 가지 다른 상품들도 추천해 드리겠습니다. 아래의 추천순으로 좌측부터 우측으로 나열하였으니 참고해 주세요.

    //         지금 바로 구매를 원하신다면, 제품 이미지 하단의 카트 아이콘을 클릭하셔서 장바구니에 추가하실 수 있습니다.
    //       </div>
    //     </div>
    //   </div>

    //   <div className='footer'>
    //     <Link to='../' className="btn btn-primary">Previous</Link>
    //     <Link to='../more' className="btn btn-primary">Next</Link>
    //   </div>
    // </>
  )
}

export default RecommendOption