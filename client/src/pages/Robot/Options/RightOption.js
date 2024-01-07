import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

import { category_mapping, slug_mapping, modify_list } from '../../Items'

const Options = () => {
    const [item_list, setItemList] = useState(JSON.parse(localStorage.getItem('item_list')))
    console.log(item_list)

    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')
  
    const extension = window.location.pathname.split('/')[1]
    const rec1_used = localStorage.getItem('rec1_used')
    const rec2_used = localStorage.getItem('rec2_used')
    var TreatmentSet = JSON.parse(localStorage.getItem('treatment_questions'));
  
    const help_location = localStorage.getItem('help_location')

  return (
    <>
          <div class=''>
            {TreatmentSet.map(item => (
              <div>
                <Link to={item[1]} onClick={() => {
                  const idx = TreatmentSet.indexOf(item)
                  TreatmentSet.splice(idx, 1)
                  localStorage.setItem('treatment_questions', JSON.stringify(TreatmentSet))}
                }>
                  <div>{item[0]}<br/><br/></div>
                </Link>
              </div>
            ))}
            
            {extension !== 'FFSRWM' && rec1_used == 0 &&
              <div>
                <Link to='../recommend' onClick={() => {
                  localStorage.setItem('rec_item', item1)
                  localStorage.setItem('rec1_used', 1)
                }}>
                  <div>{localStorage.getItem('item1') + ' 관련 품목을 추천해 줄래?'}<br/><br/></div>
                </Link>
              </div>
            }

            {extension !== 'FFSRWM' && rec2_used == 0 &&
              <div>
                <Link to='../recommend' onClick={() => {
                  localStorage.setItem('rec_item', item2)
                  localStorage.setItem('rec2_used', 1)

                }}>
                  <div>{localStorage.getItem('item2') + ' 관련 품목을 추천해 줄래?'}<br/><br/></div>
                </Link>
              </div>
            }

            {extension === 'FFSRWM' && 
            <>
              <div class='flex items-center'>
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    품목 선택
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'fruit')}}>과일</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'vegetable')}}>야채</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'condiment')}}>통조림/조미료</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'dessert')}}>디저트</Dropdown.Item>
                    <Dropdown.Item href='arrive' onClick={() => {localStorage.setItem('help_location', 'snack')}}>과자/라면</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div> 섹션으로 이동하고 싶어.</div>
              </div> 
              <br/>
            </>
            }

            <div class='flex items-center'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  상품 선택
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {item_list.map((item) => (
                    <Dropdown.Item href={'recommend'} onClick={() => {
                      localStorage.setItem('rec_item', item)
                      setItemList(item_list.filter(i => i !== item))
                      }}>
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div> 관련 품목을 추천해 줄래?</div>
            </div>

            {localStorage.getItem('robot_visit') > 2 &&
              <>
              <br/>
              <Link to={`../../aisle/${help_location}`}>이제 괜찮아요! 감사합니다. 이제 쇼핑하러 가볼게요.</Link>
              </>
            }

          </div>
    </>
  )
}

export default Options