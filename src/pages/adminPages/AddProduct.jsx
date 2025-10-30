import axios from "axios";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { productsContext } from "../../contexts/products/ProductsStore";

function AddProduct() {
    const {setProducts}=useContext(productsContext)
  function handleAddProduct(event) {
    event.preventDefault();
    const newProduct = {
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
      image: "https://picsum.photos/200",
    
    };
    if(!newProduct.title)
        return toast.error('add title')
    axios.post('http://localhost:3000/products',newProduct)
    .then(res=>{
        toast.success("product added")
         event.target.title.value=""
         event.target.category.value=""
         event.target.price.value=""
         setProducts(state=>[...state,res.data])
         
    })
    .catch(e=>toast.error(e.message))
  }
  return (
    <Container>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" name="price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default AddProduct;
