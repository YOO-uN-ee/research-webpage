import React, { useState } from "react";

import { item_list_kr } from '../Items'
import Layout from "./Options/OptionLayout";
import Option from './Options/RightOption'

const Robot5 = () => {
  const [item_list, setItemList] = useState(item_list_kr)
  const item1 = localStorage.getItem('item1')
  const item2 = localStorage.getItem('item2')

  const extension = localStorage.getItem('extension')
  var TreatmentSet = JSON.parse(localStorage.getItem('treatment_questions'));
  const [my_cart, setMyCart] = useState(JSON.parse(localStorage.getItem('my_cart')))

  const [item1_bool, setItem1Bool] = useState(localStorage.getItem('item1_bool'))
  const [item2_bool, setItem2Bool] = useState(localStorage.getItem('item2_bool'))

  localStorage.setItem('robot_visit', 0);
  localStorage.setItem('rec1_used', -1);
  localStorage.setItem('rec2_used', -1);
  localStorage.setItem('arrive_used', -1);
  localStorage.setItem('recom_used', -1);

  localStorage.setItem('treatment_option', JSON.stringify([]))
  localStorage.setItem('treatment_time', JSON.stringify([]))
  localStorage.setItem('sub_action', JSON.stringify([]))

  if (!TreatmentSet){
    if (extension === 'FFSRWM' || extension === 'ZOX019'){
      TreatmentSet = [
        ['너는 어디에서 왔니?', '../where', 'where'],
        ['춤을 출 수 있다며. 한번 보여줄래?', '../dance', 'dance'],
        ['만나서 반가워! 우리 악수하자.', '../handshake', 'handshake'],
      ]

      localStorage.setItem('treatment_questions', JSON.stringify(TreatmentSet));
    }

    else if (extension === 'BIKTPB' || extension === 'AOTLLO'){
      TreatmentSet = [
        ['안녕하세요! 오늘 날이 좋네요.', '../weather', 'weather'],
      ]
    }

    else {
      TreatmentSet = [
        ['너는 어디에서 왔니?', '../where', 'where'],
      ]

      setItemList(item_list.filter(i => i !== item1))
      setItemList(item_list.filter(i => i !== item2))

      localStorage.setItem('treatment_questions', JSON.stringify(TreatmentSet));
    }
    localStorage.setItem('item_list', JSON.stringify(item_list))
  }

  return (
    <Layout>
      <div class='flex flex-row'>
        <div class='w-1/2'>
          <div class='area-check'>
            {extension === 'FFSRWM' && 
              <div class='main-text'>만나서 반가워요, {localStorage.getItem("user_name")} 고객님! <br /><br/></div>
            }
            {/* <video id="pepper-greet" autoPlay="true" controls="controls" className='video' src='/media/videos/Pepper_greeting.mp4' />
            <div class='main-text'><br />제가 어떻게 도와드릴 수 있을까요?</div> */}

            <div class='robot-parent'>
              <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} alt='마트 이미지' class='background-image' />
              {extension === 'FFSRWM' && 
                <img src='/media/images/robot.png' alt='robot' className='robot-image'/>
              }

              {extension === 'BIKTPB' && 
                <img src='/media/images/sa1.png' alt='agent' className='robot-image'/>
              }

              {extension === 'AOTLLO' && 
                <img src='/media/images/sa2.png' alt='smiling-agent' className='robot-image'/>
              }
            </div>

            <div class='main-text'><br />어떻게 도와드릴까요?</div>
          </div>
        </div>
        <div class='w-1/2 vertical-center-relative'>
          <div class='area-check main-text'>
            <Option />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Robot5