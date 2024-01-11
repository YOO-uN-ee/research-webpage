import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "survey-core/i18n/korean"

export const demographicsJSON = {
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
          '한달에 2-3번',
          '한달에 1번 이하'
         ],
        "isRequired": true,
       },
       {
        "type": "rating",
        "name": "familiar",
        "title": "마트에 구비되어 있는 아이템들과 얼마나 친숙하셨나요?",
        "description":"대부분 이미 알고 계신 아이템이었다면 7을, 잘 모르는 아이템들이었다면 1을 기준으로 해서 1-7 사이를 선택해주세요.",
        "rateMin": 1,
        "rateMax": 7,
        "minRateDescription":'전혀 모른다',
        "maxRateDescription":'매우 잘 알고 있다',
        "isRequired": true,
       },
       {
        "type": "radiogroup",
        "name": "robot_seen",
        "title": "장을 보시는 중에 로봇 도우미를 보셨나요?",
        "choices": [
          {
           "value": "true",
           "text": "네"
          },
          {
           "value": "false",
           "text": "아니오"
          }
         ],
        "isRequired": true,
       },
       {
        "type": "radiogroup",
        "name": "asked_name",
        "title": "그 로봇이 귀하의 이름을 물어봤나요?",
        "visibleIf": "{robot_seen} = true",
        "choices": [
          {
           "value": "true",
           "text": "네"
          },
          {
           "value": "false",
           "text": "아니오"
          }
         ],
        "isRequired": true,
       },
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
  survey.locale = "ko";

  survey.onComplete.add((sender, options) => {
    localStorage.setItem('gender', sender.data.gender);
    localStorage.setItem('age', sender.data.age);
    localStorage.setItem('location', sender.data.location);
    localStorage.setItem('frequency', sender.data.frequency);
    localStorage.setItem('familiar', sender.data.familiar);
    localStorage.setItem('robot_seen', sender.data.robot_seen);
    localStorage.setItem('asked_name', sender.data.asked_name || 'false');
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