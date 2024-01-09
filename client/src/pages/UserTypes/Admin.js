import React, { useState, useEffect } from "react";
import axios from 'axios';
import { json2csv } from 'json-2-csv';

const Detailed = () => {
  const [control, setControl] = useState([]);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  // const [all, setAll] = useState([]);


  const getControl = async()=> {
    try {
      var { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/control");
      setControl(data.userdata);

    } catch (error) {
      console.log(error);
    }
  }

  const getTreatmentOne = async()=> {
    try {
      var { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment1");
      setOne(data.userdata);

    } catch (error) {
      console.log(error);
    }
  }

  const getTreatmentTwo = async()=> {
    try {
      var { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment2");
      setTwo(data.userdata);

    } catch (error) {
      console.log(error);
    }
  }

  const getTreatmentThree = async()=> {
    try {
      var { data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/treatment3");
      setThree(data.userdata);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getControl();
    getTreatmentOne();
    getTreatmentTwo();
    getTreatmentThree();
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
      <div>
        <br /><br /><br />
      </div>
      <div class='main-text'>
        <button onClick={() => downloadCSV(control, 'control')}>
          Download Control Group Data
        </button> <br />
      </div>

      <div class='main-text'>
        <button onClick={() => downloadCSV(one, 'one')}>
          Download Treatment1 Group Data
        </button> <br />
      </div>

      <div class='main-text'>
        <button onClick={() => downloadCSV(two, 'two')}>
          Download Treatment2 Group Data
        </button> <br />
      </div>

      <div class='main-text'>
        <button onClick={() => downloadCSV(three, 'three')}>
          Download Treatment3 Group Data
        </button> <br />
      </div>
    </>
  )
}

export default Detailed