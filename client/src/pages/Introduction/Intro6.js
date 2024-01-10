import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import * as SurveyTheme from "survey-core/themes";
import { surveyJSON } from "../Survey";
import "survey-core/i18n/korean"
import axios from 'axios'

const Intro6 = () => {
  const user_id = localStorage.getItem('user_id')
  localStorage.setItem('my_cart', JSON.stringify([]));
  localStorage.setItem('robot_interacted', -1)

  const survey = new Model(surveyJSON);
  survey.applyTheme(SurveyTheme.PlainLightPanelless);
  survey.local = "ko";

  survey.onComplete.add((sender, options) => {
    const res = axios.put("", {
      "pre_fun":sender.data.fun,
      "pre_exciting":sender.data.exciting,
      "pre_delightful":sender.data.delightful,
      "pre_thrilling":sender.data.thrilling,
      "pre_enjoyable":sender.data.enjoyable,
    })
    // localStorage.setItem('pre-fun', sender.data.fun);
    // localStorage.setItem('pre-exciting', sender.data.exciting);
    // localStorage.setItem('pre-delightful', sender.data.delightful);
    // localStorage.setItem('pre-thrilling', sender.data.thrilling);
    // localStorage.setItem('pre-enjoyable', sender.data.enjoyable);
    window.location.replace('../aisle/fruit');
    // const res = axios.post("/api/survey/addsurvey", {"user_id":currentUser, "when":"pre", fun:sender.data.fun, exciting:sender.data.exciting, delightful:sender.data.delightful,thrilling:sender.data.thrilling, enjoyable:sender.data.enjoyable});
  });

  // survey.data = {
  //     "nps-score": 7,
  //     "promoter-features": [
  //         "performance",
  //         "ui"
  //     ]
  // };

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