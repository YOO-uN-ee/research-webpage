import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import * as SurveyTheme from "survey-core/themes";
import { surveymoodJSON } from "../SurveyMood";
import "survey-core/i18n/korean"
import axios from 'axios'

const Intro7 = () => {
  localStorage.setItem('my_cart', JSON.stringify([]));
  localStorage.setItem('robot_interacted', -1)

  const surveymood = new Model(surveymoodJSON);
  surveymood.applyTheme(SurveyTheme.PlainLightPanelless);
  surveymood.locale = "ko";

  // const saveSurvey = async(fun, exciting, delightful, thrilling, enjoyable) => {
  //   const user_id = localStorage.getItem('user_id')

  //   const res = axios.put(`https://research-backend-3mwd.onrender.com/api/auth/update/${user_id}`, {
  //     "pre_fun":fun,
  //     "pre_exciting":exciting,
  //     "pre_delightful":delightful,
  //     "pre_thrilling":thrilling,
  //     "pre_enjoyable":enjoyable,
  //   })

  //   localStorage.setItem("message", console.log(res.message))
  // }

  surveymood.onComplete.add((sender, options) => {
    // saveSurvey(sender.data.fun, sender.data.exciting, sender.data.delightful, sender.data.thrilling, sender.data.enjoyable)
    localStorage.setItem('pre-enthusiastic', sender.data.enthusiastic);
    localStorage.setItem('pre-interested', sender.data.interested);
    localStorage.setItem('pre-excited', sender.data.excited);
    localStorage.setItem('pre-alert', sender.data.alert);
    localStorage.setItem('pre-inspired', sender.data.inspired);
    localStorage.setItem('pre-active', sender.data.active);
    localStorage.setItem('pre-distressed', sender.data.distressed);
    localStorage.setItem('pre-upset', sender.data.upset);
    localStorage.setItem('pre-irritable', sender.data.irritable);
    localStorage.setItem('pre-nervous', sender.data.nervous);
    localStorage.setItem('pre-afraid', sender.data.afraid);

    window.location.replace('../aisle/fruit');
    // const res = axios.post("/api/survey/addsurvey", {"user_id":currentUser, "when":"pre", fun:sender.data.fun, exciting:sender.data.exciting, delightful:sender.data.delightful,thrilling:sender.data.thrilling, enjoyable:sender.data.enjoyable});
  });

  return (
    // <div class='layout'>
      <div class='flex'>
      <div class='w-1/2 vertical-center'>
        <div class='main-text area-check'>
          현재 귀하의 기분(mood)상태에 대해서도 선택해 주세요. <br/>
          현재의 기분 상태를 1(전혀 아님)부터 7(매우 그러함)까지의 척도로 표시해 주시면 됩니다.<br/><br/>

          완료 후 "완료"버튼을 눌러주세요. 

        </div>
      </div>

      <div class='w-1/2 vertical-center'>
        <Survey model={surveymood}/>
      </div>
      </div>
    // </div>
    // <>
    

    //   <div className='footer'>
    //     <Link to='../5' className="btn btn-primary">Previous</Link>
    //     {surveyComplete}
    //     {surveyComplete > 0 &&
    //       <Link to='../../aisle/fruit' className="btn btn-primary">Next</Link>
    //     }
    //   </div>
    // </>
  )
}

export default Intro7