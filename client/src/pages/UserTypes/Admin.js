import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'

import { mkConfig, generateCsv, download } from "export-to-csv";

const Admin = () => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const [data, setData] = useState([]);

    const getData = async()=> {
        try {
          const { res } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getData");
          setData(res.udata);
          console.log(res.udata);

        //   console.log(data)
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    // const mockData = [
    //     {
    //       name: "Rouky",
    //       date: "2023-09-01",
    //       percentage: 0.4,
    //       quoted: '"Pickles"',
    //     },
    //     {
    //       name: "Keiko",
    //       date: "2023-09-01",
    //       percentage: 0.9,
    //       quoted: '"Cactus"',
    //     },
    //   ];
      
    const csv = generateCsv(csvConfig)(data);
      

  return (
    <Layout class='layout'>
        <div>one one one</div>
        <div onClick={() => download(csvConfig)(csv)}>download</div>

        <Outlet />
    </Layout>
        
    
  )
}

export default Admin