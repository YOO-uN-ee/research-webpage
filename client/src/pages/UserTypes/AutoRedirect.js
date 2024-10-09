import React, { useEffect } from 'react'

const AutoRedirect = () => {
    const number_mapping = {
      0: 'BIKTPB',
      1: 'FFSRWM',
      2: 'AOTLLO',
  }

    useEffect(() => {    
      localStorage.clear();
      
      var a = window.location.href; 
      var b = a.substring(a.indexOf("?UID=")+5);
  
      localStorage.setItem('uid', b)
      
      const random_assignment = number_mapping[Math.floor(Math.random() * 3)];
      window.location.replace(`./${random_assignment}/welcome`);
      // window.location.replace(`./L53NNR/welcome`);
      }, []);
    
    return (
        <>
        </>    
  )
}

export default AutoRedirect
