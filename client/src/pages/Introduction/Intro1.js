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

  const checkUpdating = async() => {
    const res = await axios.put("https://research-backend-3mwd.onrender.com/api/auth/update/659b32e6ab1c94ff10259c6c", {"ip":"0.0.0.0", "experiment_type":"testing", "pre_fun": 10})
  }

  useEffect(() => {
    localStorage.clear();

    localStorage.setItem('web_enter', new Date().toString())
    
    storeIP();
    checkUpdating();
  }, []);

  return (
    <Layout>
        <div class='main-text general-body'>
          실험에 참여해 주셔서 감사합니다! <br/><br/>

          이제부터 귀하께서 마트에서 장을 보는 상황을 가정하겠습니다.<br/>
          실제로 장을 보러 가까운 마트에 왔다고 생각하시고 참여해 주십시오.
        </div>

        <div className='footer'>
          <div></div>
          <Link to='./2'><img src='/media/images/forward.svg' alt='앞으로' class='icon-button' /></Link>
        </div>  
    </Layout>
  )
}

export default Intro1