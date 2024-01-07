import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Control = () => {
  return (
    <Layout class='layout'>
        <div></div>
        <Outlet />
    </Layout>
        
    
  )
}

export default Control