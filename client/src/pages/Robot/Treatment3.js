import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

import Layout from "../Introduction/IntroLayout";

var mapping = {"ZOX019": "treatment3"};

const Intro1 = () => {
  const currentPath = window.location.pathname;
  const extension = currentPath.split('/')[1]
  const userType = mapping[extension]

  const storeIP = async() => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    localStorage.setItem('ip', res.data.ip)
    localStorage.setItem('experiment_type', userType)
    localStorage.setItem('extension', extension)
    localStorage.setItem('help_location', 'fruit')
    localStorage.setItem('item1', '');
    localStorage.setItem('item2', '');
    localStorage.setItem('my_cart', JSON.stringify([]));
  };

  useEffect(() => {
    localStorage.clear();
    
    storeIP();
  }, []);

  return (
    <Layout>
      <div class='main-text general-body'>
      실험에 참여해 주셔서 감사합니다! <br></br><br></br>

      이 실험에서 당신은 동네 슈퍼마켓에서 쇼핑하는 상황을 재현하게 될 것입니다.<br></br>
      실제로 장을 보러 마트에 왔다고 생각하시고 참여해 주십시오.
      </div>

      <div class='right-button-parent'><Link to='./2'><img src='/media/images/forward.svg' class='right-button' alt='forward'/></Link></div>
    </Layout>
  )
}

export default Intro1