import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Control = () => {
  return (
    <Layout>
        <div>Control Group</div>
        <Outlet />
    </Layout>
        
    
  )
}

export default Control