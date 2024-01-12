import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import Dropdown from 'react-bootstrap/Dropdown';

import { slug_mapping } from "../../Items";

const Options = () => {
    const [item_list, setItemList] = useState(JSON.parse(localStorage.getItem('item_list')))

    const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))
    const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
    const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')
  
    const extension = window.location.pathname.split('/')[1]
    const rec1_used = localStorage.getItem('rec1_used')
    const rec2_used = localStorage.getItem('rec2_used')
    const recom_used = localStorage.getItem('recom_used')
    const arrive_used = localStorage.getItem('arrive_used')
    var TreatmentSet = JSON.parse(localStorage.getItem('treatment_questions'));
  
    const help_location = localStorage.getItem('help_location')

    const exitScreen = (option)=>{
      localStorage.setItem('my_cart', JSON.stringify(my_cart))
      localStorage.setItem('item1_bool', item1_bool)
      localStorage.setItem('item2_bool', item2_bool)

      const spent_time = (new Date() - Date.parse(localStorage.getItem('enter_time')))/1000
      var treatment_time = JSON.parse(localStorage.getItem('treatment_time'))
      treatment_time.push(spent_time)
      // console.log(JSON.stringify(treatment_time))
      localStorage.setItem('treatment_time', JSON.stringify(treatment_time))

      var treatment_option = JSON.parse(localStorage.getItem('treatment_option'))
      treatment_option.push(option)
      localStorage.setItem('treatment_option', JSON.stringify(treatment_option))
    }

  return (
    <>
          <div class=''>
            {TreatmentSet.map(item => (
              <div>
                <Link to={item[1]} onClick={() => {
                  const idx = TreatmentSet.indexOf(item)
                  TreatmentSet.splice(idx, 1)
                  localStorage.setItem('treatment_questions', JSON.stringify(TreatmentSet))
                  exitScreen(item[2])
                }}>
                  <div class='robot-option-text'>{`➤ ${item[0]}`}<br/><br/></div>
                </Link>
              </div>
            ))}
            
            {extension === 'L53NNR' && rec1_used < 0 &&
              <div>
                <Link to='../recommend' onClick={() => {
                  localStorage.setItem('rec_item', item1)
                  localStorage.setItem('rec1_used', 1)

                  exitScreen('recommend')
                }}>
                  <div class='robot-option-text'>{`➤  ${localStorage.getItem('item1')} 관련 품목을 추천해 줄래?`}<br/><br/></div>
                </Link>
              </div>
            }

            {extension === 'L53NNR' && rec2_used < 0 &&
              <div>
                <Link to='../recommend' onClick={() => {
                  localStorage.setItem('rec_item', item2)
                  localStorage.setItem('rec2_used', 1)
                  exitScreen('recommend')
                }}>
                  <div class='robot-option-text'>{`➤ ${localStorage.getItem('item2')} 관련 품목을 추천해 줄래?`}<br/><br/></div>
                </Link>
              </div>
            }

            {extension === 'FFSRWM' && arrive_used < 0 &&
            <>
              <div class='flex horizontal-center items-center robot-option-text'>
                <div>➤&nbsp;</div> 
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    품목 선택
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'fruit'); exitScreen('aisle')}}>과일</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'vegetable'); exitScreen('aisle')}}>야채</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'condiment'); exitScreen('aisle')}}>통조림/조미료</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'dessert'); exitScreen('aisle')}}>디저트</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'snack'); exitScreen('aisle')}}>과자/라면</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div>&nbsp;섹션으로 이동하고 싶어.</div>
              </div> 
              <br/>
            </>
            }

            {extension !== 'ZOX019' && recom_used < 0 &&
              <div class='flex horizontal-center items-center robot-option-text'>
                <div>➤&nbsp;</div> 
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    상품 선택
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {item_list.map((item) => (
                      <Dropdown.Item href={'recommend'} onClick={() => {
                        localStorage.setItem('rec_item', item)
                        setItemList(item_list.filter(i => i !== item))
                        localStorage.setItem('recom_used', 1)
                        exitScreen('recommend')
                        }}>
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div>&nbsp;관련 품목을 추천해 줄래?</div>
              </div>
            }

            {localStorage.getItem('robot_visit') > 2 &&
              <div class='robot-option-text'><Link to={`../end`}><br/>➤ 이제 괜찮아요! 감사합니다. 이제 쇼핑하러 가볼게요.</Link></div>
            }

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
            <div class='cart-button-count-container'><div class='cart-button-surrounding-robot' /><div class='cart-button-text'>{my_cart.length}</div></div>
          </div>
    </>
  )
}

export default Options