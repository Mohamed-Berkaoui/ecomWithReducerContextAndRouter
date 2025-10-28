import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { cartContext } from "../contexts/cart/CartStore";

function ProductCard({ product }) {
  const { userCart, dispatchCart } = useContext(cartContext);
  const navigate = useNavigate();

  const existOnCart = !!userCart.find((e) => product.id == e.product.id);
  function handleAddToCart() {
    dispatchCart({ type: "ADDTOCART", payload: product });
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product?.image} height={150} />
      <Card.Body>
        <Card.Title> {product?.title}</Card.Title>
        <Card.Text>{product?.category}</Card.Text>
        <div className="d-flex gap-1">
          <Button
            variant="primary"
            disabled={existOnCart ? true : false}
            onClick={handleAddToCart}
          >
            add to cart
          </Button>
          <Button
            variant="info"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
