import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3000/orders")
      .then(({ data }) => setOrders(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <Table>
        <tr>
          <th>id</th>
          <th>products</th>
          <th>quantitys</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>
              <ul>
                {order.userCart.map((ele) => (
                  <li>-{ele.product.title}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {" "}
                {order.userCart.map((ele) => (
                  <li>-{ele.quantity}</li>
                ))}
              </ul>
            </td>

            <td>
              <button>edit</button>
            </td>
            <td>
              <button>delete</button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default Orders;
