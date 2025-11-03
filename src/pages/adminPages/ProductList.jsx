import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { productsContext } from "../../contexts/products/ProductsStore";
import axios from "axios";
import { toast } from "react-toastify";

function ProductList() {
  const { products,setProducts } = useContext(productsContext);
  return (
    <div>
      <Table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>category</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.id}</td>
            <td title={prod.title}>
              {prod.title.length > 30
                ? prod.title.slice(0, 30) + "..."
                : prod.title}
            </td>
            <td>{prod.price}</td>
            <td>{prod.category}</td>
            <td><button>edit</button></td>
            <td><button onClick={function(){
              axios.delete("http://localhost:3000/products/"+prod.id)
              .then(res=>{toast.success("product deleted")
                setProducts(state=>state.filter(ele=>ele.id!=prod.id))

              })
            }}>delete</button></td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default ProductList;
