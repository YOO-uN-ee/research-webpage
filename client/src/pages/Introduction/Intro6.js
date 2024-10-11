import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import * as SurveyTheme from "survey-core/themes";
import { surveyJSON } from "../Survey";
import "survey-core/i18n/korean"
import axios from 'axios'

const Intro6 = () => {
  localStorage.setItem('my_cart', JSON.stringify([]));
  localStorage.setItem('robot_interacted', -1)

  const survey = new Model(surveyJSON);
  survey.applyTheme(SurveyTheme.PlainLightPanelless);
  survey.locale = "ko";

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

  survey.onComplete.add((sender, options) => {
    // saveSurvey(sender.data.fun, sender.data.exciting, sender.data.delightful, sender.data.thrilling, sender.data.enjoyable)
    localStorage.setItem('pre-fun', sender.data.fun);
    localStorage.setItem('pre-exciting', sender.data.exciting);
    localStorage.setItem('pre-delightful', sender.data.delightful);
    localStorage.setItem('pre-thrilling', sender.data.thrilling);
    localStorage.setItem('pre-enjoyable', sender.data.enjoyable);
    window.location.replace('./7');
    // const res = axios.post("/api/survey/addsurvey", {"user_id":currentUser, "when":"pre", fun:sender.data.fun, exciting:sender.data.exciting, delightful:sender.data.delightful,thrilling:sender.data.thrilling, enjoyable:sender.data.enjoyable});
  });

  return (
    // <div class='layout'>
      <div class='flex'>
      <div class='w-1/2 vertical-center'>
        <div class='main-text area-check'>
          실험 시작 전, 귀하의 감정 상태를 선택해주세요. <br/>
          현재의 감정 상태를 1(전혀 아님)부터 7(매우 그러함)까지의 척도로 표시해 주시면 됩니다.<br/><br/>

          완료 후 "완료"버튼을 눌러주세요. 

        </div>
      </div>

      <div class='w-1/2 vertical-center'>
        <Survey model={survey}/>
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

export default Intro6