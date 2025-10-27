import { useState } from 'react'
import Products_ProductsList from '../../components/Products_ProductsList'
import Products_Search from '../../components/Products_Search'

function Products() {
    const [search,setSearch]=useState({
        title:"",
        category:"all"
    })
  return (
    <div>
        <Products_Search setSearch={setSearch}/>
        <Products_ProductsList search={search}/>
    </div>
  )
}

export default Products