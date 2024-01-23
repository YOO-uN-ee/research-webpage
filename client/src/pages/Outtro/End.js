import React, { useEffect } from 'react'
import axios from 'axios'

import Layout from "../Introduction/IntroLayout";

const Final= () => {
  var startTime = Date.parse(localStorage.getItem('web_enter'))
  var endTime = new Date()
  var timeDiff = (endTime - startTime)/1000

  const storeData = async() => {
    const experiment_type = localStorage.getItem('experiment_type')

    if(experiment_type === 'treatment3'){
      const res = await axios.post("https://research-backend-3mwd.onrender.com/api/auth/add", {
      "ip":localStorage.getItem('ip'), "experiment_type":experiment_type, "purchase_list": [localStorage.getItem('item1'), localStorage.getItem('item2')],
      "pre_fun":localStorage.getItem('pre-fun'), "pre_exciting":localStorage.getItem('pre-exciting'), "pre_delightful":localStorage.getItem('pre-delightful'), 
      "pre_thrilling":localStorage.getItem('pre-thrilling'), "pre_enjoyable":localStorage.getItem('pre-enjoyable'),
      "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
      "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
      "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "location":localStorage.getItem('location'), "frequency":localStorage.getItem('frequency'),
      "treatment_option":JSON.parse(localStorage.getItem('treatment_option')), "treatment_time":JSON.parse(localStorage.getItem('treatment_time')), "robot_seen":localStorage.getItem('robot_seen'), "asked_name":localStorage.getItem('asked_name')
    });
    console.log('data saved')
    }
    
    else{
      const res = await axios.post("https://research-backend-3mwd.onrender.com/api/auth/add", {
        "ip":localStorage.getItem('ip'), "experiment_type":localStorage.getItem('experiment_type'), "purchase_list": [localStorage.getItem('item1'), localStorage.getItem('item2')],
        "pre_fun":localStorage.getItem('pre-fun'), "pre_exciting":localStorage.getItem('pre-exciting'), "pre_delightful":localStorage.getItem('pre-delightful'), 
        "pre_thrilling":localStorage.getItem('pre-thrilling'), "pre_enjoyable":localStorage.getItem('pre-enjoyable'),
        "items_bought":JSON.parse(localStorage.getItem('item_names')), "total_price":localStorage.getItem('total_price'), "total_time":timeDiff || 0,
        "fruit_visit":localStorage.getItem('fruit_visits') || 0, "fruit_time":localStorage.getItem('fruit_time')/1000 || 0, 
        "vegetable_visit":localStorage.getItem('vegetable_visits') || 0, "vegetable_time":localStorage.getItem('vegetable_time')/1000 || 0, 
        "condiment_visit":localStorage.getItem('condiment_visits') || 0, "condiment_time":localStorage.getItem('condiment_time')/1000 || 0, 
        "dessert_visit":localStorage.getItem('dessert_visits') || 0, "dessert_time":localStorage.getItem('dessert_time')/1000 || 0, 
        "snack_visit":localStorage.getItem('snack_visits') || 0, "snack_time":localStorage.getItem('snack_time')/1000 || 0,
        "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
        "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
        "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "location":localStorage.getItem('location'), "frequency":localStorage.getItem('frequency'), "familiar":localStorage.getItem('familiar')||0,
        "treatment_visited":localStorage.getItem('treatment_visited') || 0, "treatment_aisle":localStorage.getItem('treatment_aisle'), "treatment_option":JSON.parse(localStorage.getItem('treatment_option')), "treatment_time":JSON.parse(localStorage.getItem('treatment_time')),"sub_action":JSON.parse(localStorage.getItem('sub_action')),
        "robot_seen":localStorage.getItem('robot_seen'), "asked_name":localStorage.getItem('asked_name')
      });
    
    console.log('data saved')
    }
  };

  useEffect(() => {
    storeData();

    localStorage.clear();
  }, []);
  
  return (
    <Layout>
      <div class='table-class'>
        <div class='main-text'>
          <br />
          설문에 참여해주셔서 대단히 감사합니다. <br/>아래의 링크를 클릭하면 패널나우 화면으로 돌아갑니다.<br /><br />
        </div>

          
           <table>
              <tr>
                <td class='td-color'>comp</td>
                <td><a href='https://d8aspring.post-survey.com/ans/back/?status=comp' target="_blank">https://d8aspring.post-survey.com/ans/back/?status=comp</a></td>
              </tr>
          </table>
        
      </div>
    </Layout>
  )
}

export default Final