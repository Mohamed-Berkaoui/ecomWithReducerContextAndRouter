import axios from "axios";
import {  useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

function ProductDetails() {
    const navigate=useNavigate()

const params=useParams()

const [product,setProduct]=useState({})
useEffect(function(){
    axios.get('http://localhost:3000/products/'+params.id)
    .then(res=>setProduct(res.data))
    .catch(e=>console.log(e))
},[params.id])


  return (<>
   <div className="d-flex justify-content-around p-4">
    <Button onClick={()=>navigate(-1)}>back</Button>
    <Button onClick={()=>navigate(`/product/${+params.id+1}`)}>next Product</Button>

   </div>
    <div className="product-details">
      <img src={product.image} alt="" />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description} </p>
        <h4> {product.price}$ </h4>
        <Button>add to cart</Button>
      </div>
     
    </div></>
  );
}

export default ProductDetails;
