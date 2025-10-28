import { Button, Container } from "react-bootstrap";
import Cart_ProductCard from "../../components/Cart_ProductCard";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart/CartStore";

function Cart() {
  const navigate = useNavigate();
  const { userCart, dispatchCart } = useContext(cartContext);
  const totalPrice = userCart.reduce(
    (acc, item) => item.product.price * item.quantity + acc,
    0
  );
  return (
    <div>
      <Button onClick={() => navigate(-1)} className="m-4">
        back
      </Button>
      <Container className="p-4 d-flex flex-column gap-4">
        {userCart.map((item, i) => (
          <Cart_ProductCard key={i} item={item} />
        ))}
      </Container>
     <h2 className="text-center mb-4"> total price: {totalPrice}</h2>
    </div>
  );
}

export default Cart;
