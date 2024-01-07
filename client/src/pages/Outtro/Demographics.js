import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";

export const demographicsJSON = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "dropdown",
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
        "min": 0,
        "max": 100,
        "isRequired": true,
       },
       {
        "type": "text",
        "name": "frequency",
        "title": "장보기 빈도수",
        "description":"1주일을 기준으로 몇 번 정도 장을 보시나요? 1주일에 1번은 1, 2주일에 1번은 0.5로 기입해주세요.",
        "inputType":"number",
        "min": 0,
        "max": 7,
        "isRequired": true,
       },
       {
        "type": "rating",
        "name": "familiar",
        "title": "마트에 구비되어 있는 아이템들과 얼마나 친숙하셨나요?",
        "description":"대부분 이미 알고 계신 아이템이었다면 7을, 잘 모르는 아이템들이었다면 1을 기준으로 해서 1-7 사이를 선택해주세요.",
        "rateMin": 1,
        "rateMax": 7,
        "minRateDescription":'전혀',
        "maxRateDescription":'매우',
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
    localStorage.setItem('frequency', sender.data.frequency);
    localStorage.setItem('familiar', sender.data.familiar);
    window.location.replace('./end');
  });

  const my_cart = JSON.parse(localStorage.getItem('my_cart'))
  const item_names = my_cart.map(value => value.name)
  localStorage.setItem('item_names', JSON.stringify(item_names))


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