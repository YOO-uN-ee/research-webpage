import React, { useState, useEffect } from "react";
import axios from 'axios';
import { mkConfig, generateCsv, download } from "export-to-csv";

const Detailed = () => {
  const [info, setInfo] = useState([]);
  const csvConfig = mkConfig({ useKeysAsHeaders: true });

  const control_data = []

  const getAllInfo = async()=> {
    try {
      const { control_data } = await axios.get("https://research-backend-3mwd.onrender.com/api/auth/getdata/control");
      setInfo(control_data.userdata);

      info?.map((i) => (
        control_data.push({
          ip:i.ip,
          experiment_type: i.experiment_type,
          pre_fun: i.pre_fun,
          pre_exciting: i.pre_exciting,
          pre_delightful: i.pre_delightful,
          pre_thrilling: i.pre_thrilling,
          pre_enjoyable: i.pre_enjoyable,
          items_bought: i.items_bought,
          total_price: i.total_price
        })
      ));
      // "items_bought":JSON.parse(localStorage.getItem('item_names')), "total_price":localStorage.getItem('total_price'),
      // "fruit_visit":localStorage.getItem('fruit_visits') || 0, "fruit_time":localStorage.getItem('fruit_time')/1000 || 0, 
      // "vegetable_visit":localStorage.getItem('vegetable_visits') || 0, "vegetable_time":localStorage.getItem('vegetable_time')/1000 || 0, 
      // "condiment_visit":localStorage.getItem('condiment_visits') || 0, "condiment_time":localStorage.getItem('condiment_time')/1000 || 0, 
      // "dessert_visit":localStorage.getItem('dessert_visits') || 0, "dessert_time":localStorage.getItem('dessert_time')/1000 || 0, 
      // "snack_visit":localStorage.getItem('snack_visits') || 0, "snack_time":localStorage.getItem('snack_time')/1000 || 0,
      // "post_fun":localStorage.getItem('post-fun'), "post_exciting":localStorage.getItem('post-exciting'), "post_delightful":localStorage.getItem('post-delightful'), 
      // "post_thrilling":localStorage.getItem('post-thrilling'), "post_enjoyable":localStorage.getItem('post-enjoyable'),
      // "gender":localStorage.getItem('gender'), "age":localStorage.getItem('age'), "location":localStorage.getItem('location'), "frequency":localStorage.getItem('frequency'), "familiar":localStorage.getItem('familiar')||0,

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllInfo();
  }, []);

  const csv = generateCsv(csvConfig)(control_data);

  return (
    <>
      <div onClick={() => download(csvConfig)(csv)}>download</div>
      {/* {info?.map((i) => (
        <div>{i.ip}</div>
      ))} */}
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