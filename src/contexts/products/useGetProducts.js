import axios from 'axios';
import { useEffect, useState } from 'react'

function useGetProducts() {
      const [products, setProducts] = useState([]);
      useEffect(function(){
        axios.get('http://localhost:3000/products')
        .then( res=>setProducts(res.data))
        .catch(e=>console.log(e))
      },[])
  return {products:products,setProducts:setProducts}
}

export default useGetProducts