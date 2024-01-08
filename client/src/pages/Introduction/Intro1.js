import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

import Layout from "./IntroLayout";

var mapping = {"D1UQDV": "control", "FFSRWM":"treatment1", "L53NNR":"treatment2"};

const Intro1 = () => {
  const currentPath = window.location.pathname;
  const extension = currentPath.split('/')[1]
  const userType = mapping[extension]

  const storeIP = async() => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    // setIP(res.data.ip);
    localStorage.setItem('ip', res.data.ip)
    localStorage.setItem('experiment_type', userType)

    // if (!localStorage.getItem("user_id")) {
    //   const res2 = await axios.post("/api/auth/add", {"ip":res.data.ip, "category":userType});
    //   setUser(res2.data)
    //   localStorage.setItem('user_id', res2.data.user._id)
    // }
    localStorage.setItem('extension', extension)
  };

  useEffect(() => {
    localStorage.clear();
    
    storeIP();
  }, []);

  return (
    <Layout>
      <div class='main-text general-body'>
        이 실험에 참여해 주셔서 감사합니다! <br></br><br></br>

        이 실험에서 당신은 동네 슈퍼마켓에서 쇼핑하는 상황을 온라인에서 재현하게 될 것입니다.<br></br>
        실제로 쇼핑하는 것처럼 질문에 답하여 참여해 주십시오.
      </div>

      <div className='footer'>
        <div></div>
        <Link to='./2'><img src='/media/images/forward.svg' alt='앞으로' class='icon-button' /></Link>
      </div>  
    </Layout>
  )
}

export default Intro1