import React, { useEffect } from 'react'
import axios from 'axios'

import Layout from "../Introduction/IntroLayout";

const Final= () => {
  const storeData = async() => {
    const res = await axios.post("/api/auth/add", {
      "ip":localStorage.getItem('ip'), "experiment_type":localStorage.getItem('experiment_type'),
      "pre_fun":localStorage.getItem('pre-fun'), "pre_exciting":localStorage.getItem('pre-exciting'), "pre_delightful":localStorage.getItem('pre-delightful'), 
      "pre_thrilling":localStorage.getItem('pre-thrilling'), "pre_enjoyable":localStorage.getItem('pre-enjoyable'),
      "items_bought":JSON.parse(localStorage.getItem('item_names')), "total_price":localStorage.getItem('total_price'),
      "fruit_visit":localStorage.getItem('fruit_visits') || 0, "fruit_time":localStorage.getItem('fruit_time')/1000 || 0, 
      "vegetable_visit":localStorage.getItem('vegetable_visits') || 0, "vegetable_time":localStorage.getItem('vegetable_time')/1000 || 0, 
      "condiment_visit":localStorage.getItem('condiment_visits') || 0, "condiment_time":localStorage.getItem('condiment_time')/1000 || 0, 
      "dessert_visit":localStorage.getItem('dessert_visits') || 0, "dessert_time":localStorage.getItem('dessert_time')/1000 || 0, 
      "snack_visit":localStorage.getItem('snack_visits') || 0, "snack_time":localStorage.getItem('snack_time')/1000 || 0,
      "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
      "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
      "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "frequency":localStorage.getItem('frequency'), "familiar":localStorage.getItem('familiar'),
    });
  };

  useEffect(() => {
    storeData();

    localStorage.clear();
  }, []);
  
  return (
    <Layout>
      <div>
        <div class='main-text'>
          <br />
          참여해주셔서 감사드립니다!<br /><br />
           <table class='table-auto'>
            <tbody>
              <tr>
                <td class='td-color'>comp</td>
                <td><a href='https://d8aspring.post-survey.com/ans/back/?status=comp' target="_blank">https://d8aspring.post-survey.com/ans/back/?status=comp</a></td>
              </tr>

              <tr>
                <td class='td-color'>scrout</td>
                <td><a href='https://d8aspring.post-survey.com/ans/back/?status=scrout' target="_blank">https://d8aspring.post-survey.com/ans/back/?status=scrout</a></td>
              </tr>

              <tr>
                <td class='td-color'>quotafull</td>
                <td><a href='https://d8aspring.post-survey.com/ans/back/?status=quotafull' target="_blank">https://d8aspring.post-survey.com/ans/back/?status=quotafull</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Final