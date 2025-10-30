import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { productsContext } from "../../contexts/products/ProductsStore";

function ProductList() {
  const { products } = useContext(productsContext);
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
            <td><button>delete</button></td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default ProductList;
