import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router'

function NavBar() {
  return (
     <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4">
            <Link to="/" >Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">cart</Link>

          </Nav>
        </Navbar.Collapse>
        <Link to={"/admin/dashboard"}> admin dashboard</Link>
      </Container>
    </Navbar>
  )
}

export default NavBar