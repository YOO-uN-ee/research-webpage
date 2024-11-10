import React, { useEffect } from 'react'
import axios from 'axios'

import Layout from "../Introduction/IntroLayout";

var mapping = {"D1UQDV": "control", "FFSRWM":"robot1", "L53NNR":"robot2", "BIKTPB":"human1", "AOTLLO":"human2"};


const Final= () => {
  var startTime = Date.parse(localStorage.getItem('web_enter'))
  var endTime = new Date()
  var timeDiff = (endTime - startTime)/1000
  const extension = window.location.pathname.split('/')[1]

  const age_suffice = localStorage.getItem('age') >= 18 || localStorage.getItem('age') <= 70
  const condition_suffice = (extension === 'FFSRWM' && localStorage.getItem('asked_name')) || (extension !== 'FFSRWM' && !localStorage.getItem('robot_seen') && !localStorage.getItem('asked_name'))
  const the_condition = (age_suffice && condition_suffice).toString()

  console.log(the_condition)
  console.log(extension)

  const storeData = async() => {
    const experiment_type = localStorage.getItem('experiment_type')

    if(experiment_type === 'treatment3'){
      const res = await axios.post("https://research-backend-3mwd.onrender.com/api/auth/add", {
      "uid":localStorage.getItem('uid'),
      "experiment_type":localStorage.getItem('experiment_type')||mapping[extension], "purchase_list": [localStorage.getItem('item1'), localStorage.getItem('item2')],
      "pre_fun":localStorage.getItem('pre-fun'), "pre_exciting":localStorage.getItem('pre-exciting'), "pre_delightful":localStorage.getItem('pre-delightful'), 
      "pre_thrilling":localStorage.getItem('pre-thrilling'), "pre_enjoyable":localStorage.getItem('pre-enjoyable'),
      "pre_enthusiastic":localStorage.getItem('pre-enthusiastic'), "pre_interested":localStorage.getItem('pre-interested'), "pre_excited":localStorage.getItem('pre-excited'), 
      "pre_alert":localStorage.getItem('pre-alert'), "pre_inspired":localStorage.getItem('pre-inspired'), "pre_active":localStorage.getItem('pre-active'), 
      "pre_distressed":localStorage.getItem('pre-distressed'), "pre_upset":localStorage.getItem('pre-upset'), "pre_irritable":localStorage.getItem('pre-irritable'), 
      "pre_nervous":localStorage.getItem('pre-nervous'), "pre_afraid":localStorage.getItem('pre-afraid'),
      "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
      "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
      "post_enthusiastic":localStorage.getItem('post-enthusiastic'), "post_interested":localStorage.getItem('post-interested'), "post_excited":localStorage.getItem('post-excited'), 
      "post_alert":localStorage.getItem('post-alert'), "post_inspired":localStorage.getItem('post-inspired'), "post_active":localStorage.getItem('post-active'), 
      "post_distressed":localStorage.getItem('post-distressed'), "post_upset":localStorage.getItem('post-upset'), "post_irritable":localStorage.getItem('post-irritable'), 
      "post_nervous":localStorage.getItem('post-nervous'), "post_afraid":localStorage.getItem('post-afraid'),
      "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "location":localStorage.getItem('location'), "frequency":localStorage.getItem('frequency'),
      "treatment_option":JSON.parse(localStorage.getItem('treatment_option')), "treatment_time":JSON.parse(localStorage.getItem('treatment_time')), "robot_seen":localStorage.getItem('robot_seen'), "asked_name":localStorage.getItem('asked_name')
    });
    console.log('data saved')
    }
    
    else{
      const res = await axios.post("https://research-backend-3mwd.onrender.com/api/auth/add", {
        "uid":localStorage.getItem('uid'),
        "experiment_type":localStorage.getItem('experiment_type')||mapping[extension], "purchase_list": [localStorage.getItem('item1'), localStorage.getItem('item2')],
        "pre_fun":localStorage.getItem('pre-fun'), "pre_exciting":localStorage.getItem('pre-exciting'), "pre_delightful":localStorage.getItem('pre-delightful'), 
        "pre_thrilling":localStorage.getItem('pre-thrilling'), "pre_enjoyable":localStorage.getItem('pre-enjoyable'),
        "pre_enthusiastic":localStorage.getItem('pre-enthusiastic'), "pre_interested":localStorage.getItem('pre-interested'), "pre_excited":localStorage.getItem('pre-excited'), 
        "pre_alert":localStorage.getItem('pre-alert'), "pre_inspired":localStorage.getItem('pre-inspired'), "pre_active":localStorage.getItem('pre-active'), 
        "pre_distressed":localStorage.getItem('pre-distressed'), "pre_upset":localStorage.getItem('pre-upset'), "pre_irritable":localStorage.getItem('pre-irritable'), 
        "pre_nervous":localStorage.getItem('pre-nervous'), "pre_afraid":localStorage.getItem('pre-afraid'),
        "items_bought":JSON.parse(localStorage.getItem('item_names')), "total_price":localStorage.getItem('total_price'), "total_time":timeDiff || 0,
        "fruit_visit":localStorage.getItem('fruit_visits') || 0, "fruit_time":localStorage.getItem('fruit_time')/1000 || 0, 
        "vegetable_visit":localStorage.getItem('vegetable_visits') || 0, "vegetable_time":localStorage.getItem('vegetable_time')/1000 || 0, 
        "condiment_visit":localStorage.getItem('condiment_visits') || 0, "condiment_time":localStorage.getItem('condiment_time')/1000 || 0, 
        "dessert_visit":localStorage.getItem('dessert_visits') || 0, "dessert_time":localStorage.getItem('dessert_time')/1000 || 0, 
        "snack_visit":localStorage.getItem('snack_visits') || 0, "snack_time":localStorage.getItem('snack_time')/1000 || 0,
        "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
        "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
        "post_enthusiastic":localStorage.getItem('post-enthusiastic'), "post_interested":localStorage.getItem('post-interested'), "post_excited":localStorage.getItem('post-excited'), 
        "post_alert":localStorage.getItem('post-alert'), "post_inspired":localStorage.getItem('post-inspired'), "post_active":localStorage.getItem('post-active'), 
        "post_distressed":localStorage.getItem('post-distressed'), "post_upset":localStorage.getItem('post-upset'), "post_irritable":localStorage.getItem('post-irritable'), 
        "post_nervous":localStorage.getItem('post-nervous'), "post_afraid":localStorage.getItem('post-afraid'),
        "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "location":localStorage.getItem('location'), "frequency":localStorage.getItem('frequency'), "familiar":localStorage.getItem('familiar')||0,
        "treatment_visited":localStorage.getItem('treatment_visited') || 0, "treatment_aisle":localStorage.getItem('treatment_aisle'), "treatment_option":JSON.parse(localStorage.getItem('treatment_option')), "treatment_time":JSON.parse(localStorage.getItem('treatment_time')),"sub_action":JSON.parse(localStorage.getItem('sub_action')),
        "robot_seen":localStorage.getItem('robot_seen'), "asked_name":localStorage.getItem('asked_name')
      });
    
    console.log('data saved')
    }
  };

  useEffect(() => {
    storeData();
  }, []);
  
  return (
    <Layout>
      <div class='table-class'>
        <div class='main-text'>
          <br />
          설문에 참여해주셔서 대단히 감사합니다. <br/>아래의 링크를 클릭하면 패널나우 화면으로 돌아갑니다.<br /><br />
        </div>

          {the_condition === 'true' &&
            <button onclick="window.location='https://d8aspring.post-survey.com/ans/back/?status=comp';">홈페이지로 돌아가기</button>
          }

          {the_condition === 'false' &&
            <button onclick="window.location='https://d8aspring.post-survey.com/ans/back/?status=scrout';">홈페이지로 돌아가기</button>
          }

          {/* {the_condition === "true" && 
            <table>
                <tr>
                    <td class='td-color'>comp</td>
                    <td><a href='https://d8aspring.post-survey.com/ans/back/?status=comp'>https://d8aspring.post-survey.com/ans/back/?status=comp</a></td>
                </tr>
            </table>
          }

          {the_condition === "false" && 
            <table>
                <tr>
                  <td class='td-color'>scrout</td>
                  <td><a href='https://d8aspring.post-survey.com/ans/back/?status=scrout'>https://d8aspring.post-survey.com/ans/back/?status=scrout</a></td>
                </tr>
            </table>
          } */}
        
      </div>
    </Layout>
  )
}

export default Final