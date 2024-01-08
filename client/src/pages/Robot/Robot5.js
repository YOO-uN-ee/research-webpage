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

  localStorage.setItem('robot_visit', 0);
  localStorage.setItem('rec1_used', 0)
  localStorage.setItem('rec2_used', 0)

  if (!TreatmentSet){
    if (extension === 'FFSRWM' || extension === 'ZOX019'){
      TreatmentSet = [
        ['너는 어디에서 왔니?', '../where'],
        ['춤을 출 수 있다며. 한번 보여줄래?', '../dance'],
        ['만나서 반가워! 우리 악수하자.', '../handshake'],
      ]

      localStorage.setItem('treatment_questions', JSON.stringify(TreatmentSet));
    }

    else {
      TreatmentSet = [
        ['너는 어디에서 왔니?', '../where'],
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
        <div class='w-1/2 vertical-center'>
          <div class='area-check'>
            <div class='main-text'>만나서 반가워요, {localStorage.getItem("user_name")} 고객님! <br /><br/></div>
            <video id="pepper-greet" autoPlay="true" controls="controls" className='video' src='/media/videos/Pepper_greeting.mp4' />
            <div class='main-text'><br />제가 어떻게 도와드릴 수 있을까요?</div>
          </div>
        </div>
        <div class='w-1/2 vertical-center'>
          <div class='area-check main-text'>
            <Option />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Robot5