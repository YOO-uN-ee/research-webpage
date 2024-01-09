import React, { useState, useEffect } from "react";
import axios from 'axios';


const Detailed = () => {

  const [product, setProduct] = useState([]);


  const getAllProducts = async()=> {
    try {
      const { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/control");
      setProduct(data.userdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getAllProducts();

  }, []);

  return (
    <>
      {product?.map((p) => (
        <div>{p.ip}</div>
      ))}
    </>
  )
}

export default Detailed