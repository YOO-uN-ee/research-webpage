import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import * as SurveyTheme from "survey-core/themes";
import { surveyJSON } from "../Survey";
import axios from 'axios'

const Outtro = () => {
  const post_survey = new Model(surveyJSON);
  post_survey.applyTheme(SurveyTheme.PlainLightPanelless);
  post_survey.locale = "ko";

  const saveSurvey = async(fun, exciting, delightful, thrilling, enjoyable) => {
    const user_id = localStorage.getItem('user_id')

    const res = axios.put(`https://research-backend-3mwd.onrender.com/api/auth/update/${user_id}`, {
      "post_fun":fun,
      "post_exciting":exciting,
      "post_delightful":delightful,
      "post_thrilling":thrilling,
      "post_enjoyable":enjoyable,
    })
  }

  post_survey.onComplete.add((sender, options) => {
    saveSurvey(sender.data.fun, sender.data.exciting, sender.data.delightful, sender.data.thrilling, sender.data.enjoyable)
    // localStorage.setItem('pre-fun', sender.data.fun);
    // localStorage.setItem('pre-exciting', sender.data.exciting);
    // localStorage.setItem('pre-delightful', sender.data.delightful);
    // localStorage.setItem('pre-thrilling', sender.data.thrilling);
    // localStorage.setItem('pre-enjoyable', sender.data.enjoyable);
    window.location.replace('./2');
    // const res = axios.post("/api/survey/addsurvey", {"user_id":currentUser, "when":"pre", fun:sender.data.fun, exciting:sender.data.exciting, delightful:sender.data.delightful,thrilling:sender.data.thrilling, enjoyable:sender.data.enjoyable});
  });

  // post_survey.onComplete.add((sender, options) => {
  //   localStorage.setItem('post-fun', sender.data.fun);
  //   localStorage.setItem('post-exciting', sender.data.exciting);
  //   localStorage.setItem('post-delightful', sender.data.delightful);
  //   localStorage.setItem('post-thrilling', sender.data.thrilling);
  //   localStorage.setItem('post-enjoyable', sender.data.enjoyable);
  //   window.location.replace('./2');
  // });

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
          이제 떠나시기 전에, 귀하의 감정 상태를 선택해주세요. <br/>
          현재의 감정 상태를 1(전혀 아님)부터 7(매우 그러함)까지의 척도로 표시해 주시면 됩니다.<br/><br/>

          완료 후 "완료"버튼을 눌러주세요. 

        </div>
      </div>

      <div class='w-1/2 vertical-center'>
        <Survey model={post_survey}/>
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

export default Outtro