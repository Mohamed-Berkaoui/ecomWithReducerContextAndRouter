import React from 'react'
import { Link } from 'react-router'

function AdminAside() {
  return (
    <div className='admin-aside'>
            <p><Link to={"/admin/dashboard"}>dashboard</Link></p>
            <p><Link to={"/admin/add-product"}>add product</Link></p>
            <p><Link to={"/admin/products-list"}>products list</Link></p>
            <p><Link to={"/admin/orders"}>orders</Link></p>
            <p><Link to={"/"}>navigate as user</Link></p>

    </div>
  )
}

export default AdminAside