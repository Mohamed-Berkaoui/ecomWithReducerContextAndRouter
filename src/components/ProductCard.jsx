import { Button, Card } from "react-bootstrap";

function ProductCard({product}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product?.image} height={150} />
      <Card.Body>
        <Card.Title> {product?.title}</Card.Title>
        <Card.Text>
           {product?.category}
        </Card.Text>
        <div className="d-flex gap-1">
          <Button variant="primary">add to cart</Button>
          <Button variant="info">details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
