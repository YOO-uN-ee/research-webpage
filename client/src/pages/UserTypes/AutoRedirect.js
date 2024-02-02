import React, { useEffect } from 'react'

const AutoRedirect = () => {
    const number_mapping = {
        0: 'D1UQDV',
        1: 'FFSRWM',
        2: 'L53NNR',
    }
    useEffect(() => {    
      var a = window.location.href; 
      var b = a.substring(a.indexOf("?UID=")+5);
  
      localStorage.setItem('uid', b)
      
      const random_assignment = number_mapping[Math.floor(Math.random() * 3)];
      window.location.replace(`./${random_assignment}/welcome`);
      }, []);
    
    return (
        <>
        </>    
  )
}

export default AutoRedirect
