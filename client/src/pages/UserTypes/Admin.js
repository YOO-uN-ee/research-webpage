import React, { useState, useEffect } from "react";
import axios from 'axios';
import { json2csv } from 'json-2-csv';
import { mkConfig, generateCsv, download } from "export-to-csv";

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

  const control_data = json2csv(product)
  // const csvConfig = mkConfig({ useKeysAsHeaders: true });

  return (
    <>
      {product?.map((p) => (
        <div>{p.ip}</div>
      ))}
      {control_data}
      <button onClick={()=> download(control_data)}>download</button>
    </>
  )
}

export default Detailed