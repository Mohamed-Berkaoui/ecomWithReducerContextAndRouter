import { Button, Card } from "react-bootstrap";

function Cart_ProductCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src={item.product.image} height={150} />
      <Card.Body>
        <Card.Title>{item.product.title} </Card.Title>
        <Card.Text>price: {item.product.price}$</Card.Text>
        <Card.Text>quanity: {item.quantity}</Card.Text>
        <div>
          <Button>+</Button>
          <Button>-</Button>
          <Button>delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cart_ProductCard;
