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
  };

  useEffect(() => {
    localStorage.clear();
    
    storeIP();
  }, []);

  return (
    <Layout>
      <div class='main-text general-body'>
        이 실험에 참여해 주셔서 감사합니다!
      </div>

      <div class='right-button-parent'><Link to='./2'><img src='/media/images/forward.svg' class='right-button' alt='forward'/></Link></div>
    </Layout>
  )
}

export default Intro1