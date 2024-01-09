import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import * as SurveyTheme from "survey-core/themes";
import { surveyJSON } from "../Survey";

const Null = () => {
  const survey = new Model(surveyJSON);
  survey.applyTheme(SurveyTheme.PlainLightPanelless);

  survey.onComplete.add((sender, options) => {
    localStorage.setItem('pre-fun', sender.data.fun);
    localStorage.setItem('pre-exciting', sender.data.exciting);
    localStorage.setItem('pre-delightful', sender.data.delightful);
    localStorage.setItem('pre-thrilling', sender.data.thrilling);
    localStorage.setItem('pre-enjoyable', sender.data.enjoyable);
    window.location.replace('../help/1');
    // const res = axios.post("/api/survey/addsurvey", {"user_id":currentUser, "when":"pre", fun:sender.data.fun, exciting:sender.data.exciting, delightful:sender.data.delightful,thrilling:sender.data.thrilling, enjoyable:sender.data.enjoyable});
  });

  return (
    // <div class='layout'>
      <div class='flex'>
      <div class='w-1/2 vertical-center'>
        <div class='main-text area-check'>
          실험을 시작하기 전에 마지막으로, 지금 어떤 기분인지 공유해 주세요.<br></br><br></br>
          지금 느끼는 감정 상태가 우측에 나열된 형용사들과 얼마나 관련이 있는지 1(전혀 아님)부터 7(매우 그러함)까지의 척도로 표시해 주시면 됩니다.
        </div>
      </div>

      <div class='w-1/2 vertical-center'>
        <Survey model={survey}/>
      </div>
      </div>
  )
}

export default Null