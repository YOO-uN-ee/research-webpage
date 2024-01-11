import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";

export const demographicsJSON = {
    "locale": "ko",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "gender",
        "title": "성별",
        "choices": [
         {
          "value": "male",
          "text": "남성"
         },
         {
          "value": "female",
          "text": "여성"
         },
        ],
        "isRequired": true,
       },
       {
        "type": "text",
        "name": "age",
        "title": "나이",
        "inputType": "number",
        "min": 18,
        "max": 100,
        "isRequired": true,
       },
       {
        "type": "dropdown",
        "name":"location",
        "title":"주거지역",
        "choices":[
          '서울특별시', 
          '부산광역시', 
          '대구광역시', 
          '인천광역시', 
          '광주광역시', 
          '대전광역시', 
          '울산광역시', 
          '세종특별자치시', 
          '경기도', 
          '강원도', 
          '충청북도 (충북)', 
          '충청남도 (충남)', 
          '전라북도 (전북)', 
          '전라남도 (전남)', 
          '경상북도 (경북)', 
          '경상남도 (경남)', 
          '제주특별자치도'
        ],
        "isRequired":true,
       },
       {
        "type": "radiogroup",
        "name": "frequency",
        "title": "장보기 빈도수",
        "choices": [
          '한달에 4번 이상',
          '한달에 4번',
          '한달에  2-3번',
          '한달에 1번 이하'
         ],
        "isRequired": true,
       }
      ]
     }
    ],
    "showQuestionNumbers": "off",
    "showCompletedPage":false,
    "widthMode": "static",
    "width": "80%",
    "fitToContainer": true
}

const Demographics = () => {
  const survey = new Model(demographicsJSON);
  survey.applyTheme(SurveyTheme.PlainLightPanelless);

  survey.onComplete.add((sender, options) => {
    localStorage.setItem('gender', sender.data.gender);
    localStorage.setItem('age', sender.data.age);
    localStorage.setItem('location', sender.data.location);
    localStorage.setItem('frequency', sender.data.frequency);
    window.location.replace('./end');
  });

  return (
    <div class='layout'>
      <div>
        <div class='main-text'>
          오늘의 쇼핑을 마치셨습니다!<br/>
          이제 실험을 마치시기 전에, 하단의 질문사항들에 대답해 주세요.
        </div>
      </div>

        <Survey model={survey} />
    </div>
  )
}

export default Demographics