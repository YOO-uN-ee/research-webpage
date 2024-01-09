import React, { useState, useEffect } from "react";
import axios from 'axios';
import { json2csv } from 'json-2-csv';
import { mkConfig, generateCsv, download } from "export-to-csv";
import csvDownload from 'json-to-csv-export'

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

  const downloadCSV = () => {
    const control_data = json2csv(product)
    document.write(control_data);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(control_data);
    hiddenElement.target = '_blank';

    hiddenElement.download = 'Dummy.csv';
    hiddenElement.click();
  }

  return (
    <>
      {product?.map((p) => (
        <div>{p.ip}</div>
      ))}
      {/* {control_data} */}
      <button onClick={() => downloadCSV()}>
        Download
      </button>
    </>
  )
}

export default Detailed