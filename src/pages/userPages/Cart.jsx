import { Button, Container } from "react-bootstrap";
import Cart_ProductCard from "../../components/Cart_ProductCard";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/cart/CartStore";
import axios from "axios";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();
  const { userCart, dispatchCart } = useContext(cartContext);
  const totalPrice = userCart.reduce(
    (acc, item) => item.product.price * item.quantity + acc,
    0
  );

  console.log(userCart)
  function handlePostOrder(){
    axios.post('http://localhost:3000/orders',{userCart:userCart})
    .then(res=>{
      toast.success('order passed')
      dispatchCart({type:"RESETCART"})
      navigate(-1)
    })
    .catch(e=>toast.error(e.message))
  }
useEffect(function(){
if(!userCart.length)
  navigate(-1)
})
  return (
    <div>
      <Button onClick={() => navigate(-1)} className="m-4">
        back
      </Button>
      <Container className="p-4 d-flex flex-wrap gap-4">
        {userCart.map((item, i) => (
          <Cart_ProductCard key={i} item={item} />
        ))}
      </Container>
     <h2 className="text-center mb-4"> total price: {totalPrice}</h2>
          <Button onClick={handlePostOrder}>checkout</Button>
  </div>
  );
}

export default Cart;
