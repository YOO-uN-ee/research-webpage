import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Treatment1 = () => {
  return (
    <Layout>
        <div>Treatment1 Group</div>
        <Outlet />
    </Layout>
        
    
  )
}

export default Treatment1