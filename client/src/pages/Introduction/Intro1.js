import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

import Layout from "./IntroLayout";

var mapping = {"D1UQDV": "control", "FFSRWM":"treatment1", "L53NNR":"treatment2", "BIKTPB":"human1", "AOTLLO":"human2"};

const Intro1 = () => {
  localStorage.clear();      
  // var a = window.location.href; 
  // var b = a.substring(a.indexOf("?UID=")+5);

  // localStorage.setItem('uid', b)

  const currentPath = window.location.pathname;

  var a = window.location.href; 
  var b = a.substring(a.indexOf("?UID=")+5);
  if (!localStorage.getItem('uid')){
    localStorage.setItem('uid', b)
    console.log(localStorage.getItem('uid'))
  }
  
  const extension = currentPath.split('/')[1]
  const userType = mapping[extension]

  console.log(userType)

  const storeIP = async() => {
    localStorage.setItem('extension', extension)
    localStorage.setItem('experiment_type', userType)
  };

  useEffect(() => {
    localStorage.setItem('web_enter', new Date().toString())
    
    storeIP();
  }, []);

  return (
    <Layout>
        <div class='main-text general-body'>
          실험에 참여해 주셔서 감사합니다! <br/><br/>

          이제부터 귀하께서 마트에서 장을 보는 상황을 가정하겠습니다.<br/>
          실제로 장을 보러 가까운 마트에 왔다고 생각하시고 참여해 주십시오.<br/><br/>

          이 실험에는 중간에 오디오 파일이 삽입되어 있으니, 부디 오디오를 켜고 참여해주시기 바랍니다.
        </div>

        <div className='footer'>
          <div></div>
          <Link to='./2'><img src='/media/images/forward.svg' alt='앞으로' class='icon-button' /></Link>
        </div>  
    </Layout>
  )
}

export default Intro1