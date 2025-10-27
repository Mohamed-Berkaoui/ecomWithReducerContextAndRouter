import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { productsContext } from "../contexts/products/ProductsStore";

function Products_Search({ setSearch }) {
  const { products } = useContext(productsContext);
  function getCategories() {
    return[...new Set( products.map((e) => e.category))]
  }
  function handleSubmit(e){
        e.preventDefault()
    setSearch({title:e.target.title.value,category:e.target.category.value})
  }
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          background: "aqua",
          width: "50%",
          margin: "20px auto",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="enter title" name="title" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Select aria-label="Default select example" name="category">
            <option  selected value={"all"}>
             all categories
            </option>
            {getCategories().map((cat,i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Products_Search;
