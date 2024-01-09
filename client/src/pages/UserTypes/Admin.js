import React, { useState, useEffect } from "react";
import axios from 'axios';
import { mkConfig, generateCsv, download } from "export-to-csv";
import { json2csv } from 'json-2-csv';

const Detailed = () => {
  const [info, setInfo] = useState([]);
  // const csvConfig = mkConfig({ useKeysAsHeaders: true });

  // const control_data = []
  // const treatment1_data = []
  // const treatment2_data = []
  // const treatment3_data = []

  const getAllInfo = async()=> {
    try {
      const { res } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/control"); //
      setInfo(res.userdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllInfo();
  }, []);

  // const csv = generateCsv(csvConfig)(control_data);
  // const csv = json2csv(info);

  return (
    <>
      {/* <div onClick={() => download(csvConfig)(csv)}>download</div> */}
      {info?.map((i) => (
        <div>{i.ip}</div>
      ))}
    </>
  )
}

export default Detailed

// import React, { useState, useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
// import Layout from '../../components/Layout/Layout'
// import axios from 'axios'

// import { mkConfig, generateCsv, download } from "export-to-csv";

// const Admin = () => {
//     const csvConfig = mkConfig({ useKeysAsHeaders: true });
//     const [userData, setUserData] = useState([]);

//     const getData = async()=> {
//       try {
//         const { res } = await axios.get('https://research-backend-3mwd.onrender.com/api/item/productcategory/condiment');
//         console.log(res);
//         // console.log(`this ${res.userdata}`)
//         // setUserData(res.userdata);
//         // console.log(`setting working? ${userdata}`)
//       //   console.log(res.udata);

//       //   console.log(data)
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     useEffect(() => {
//       getData();
//       console.log(`under effect ${userData}`)
//     }, []);

//     const mockData = [
//         {
//           name: "Rouky",
//           date: "2023-09-01",
//           percentage: 0.4,
//           quoted: '"Pickles"',
//         },
//         {
//           name: "Keiko",
//           date: "2023-09-01",
//           percentage: 0.9,
//           quoted: '"Cactus"',
//         },
//       ];
      
//     const csv = generateCsv(csvConfig)(mockData);
      

//   return (
//     <Layout class='layout'>
//         <div>one one one</div>
//         <div onClick={() => download(csvConfig)(csv)}>download</div>

//         <Outlet />
//     </Layout>
        
    
//   )
// }

// export default Admin