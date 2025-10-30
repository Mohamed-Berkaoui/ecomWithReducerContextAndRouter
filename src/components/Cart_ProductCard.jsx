import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { cartContext } from "../contexts/cart/CartStore";

function Cart_ProductCard({ item }) {
  const { dispatchCart } = useContext(cartContext);
  return (
    <Card style={{ width: "250px" }}>
      <Card.Img
        variant="top"
        src={item.product.image}
        height={150}
        width={"100%"}
      />
      <Card.Body>
        <Card.Title>{item.product.title} </Card.Title>
        <Card.Text>price: {item.product.price}$</Card.Text>
        <Card.Text>quanity: {item.quantity}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => dispatchCart({ type: "INCQTY", payload: item })}
          >
            +
          </Button>
          <Button
            onClick={() =>
              dispatchCart({ type: "DECQTY", payload: item.product })
            }
            disabled={item.quantity==1?true:false}
          >
            -
          </Button>
          <Button variant="danger" onClick={()=>dispatchCart({type:"DELETEFROMCART",payload:item.product})}>delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cart_ProductCard;
