import React from 'react'
import AdminAside from '../components/AdminAside'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div>
        <AdminAside/>
        <div style={{marginLeft:"210px"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout