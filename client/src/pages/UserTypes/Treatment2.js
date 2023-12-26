import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Treatment2 = () => {
  return (
    <Layout>
        <div>Treatement2 Group</div>
        <Outlet />
    </Layout>
        
    
  )
}

export default Treatment2