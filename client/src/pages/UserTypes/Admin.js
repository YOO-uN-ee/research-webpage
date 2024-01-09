import React, { useState, useEffect } from "react";
import axios from 'axios';
import { json2csv } from 'json-2-csv';

const Detailed = () => {
  const [control, setControl] = useState([]);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  // const [all, setAll] = useState([]);


  const getAllProducts = async()=> {
    try {
      const { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/control");
      setControl(data.userdata);

      const { dataone } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment1");
      setOne(dataone.userdata);

      const { datatwo } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment2");
      setTwo(datatwo.userdata);

      const { datathree } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment3");
      setThree(datathree.userdata);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();

  }, []);

  const downloadCSV = (input_data, filename) => {
    const converted_data = json2csv(input_data)
    document.write(converted_data);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI(converted_data);
    hiddenElement.target = '_blank';

    hiddenElement.download = `${filename}.csv`;
    hiddenElement.click();
  }

  return (
    <>
      <button onClick={() => downloadCSV(control, 'control')}>
        Download Control Group Data
      </button>

      <button onClick={() => downloadCSV(one, 'one')}>
        Download Treatment1 Group Data
      </button>

      <button onClick={() => downloadCSV(two, 'two')}>
        Download Treatment2 Group Data
      </button>

      <button onClick={() => downloadCSV(three, 'three')}>
        Download Treatment3 Group Data
      </button>
    </>
  )
}

export default Detailed