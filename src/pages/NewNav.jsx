import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import CartModal from "./CartModal";

function NewNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="lg:mx-14 flex" href="/ "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuqdDwiBsOHOx3oihAqlBp7JfzPqZrscQ5Q&usqp=CAU" className="mr-3 h-6 sm:h-10" alt="Tosiron Logo" /> <span className="flex justify-center items-center">Tosiron</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto lg:ml-96 d-flex justify-content-center" variant="tabs">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <NavDropdown className="lg:mx-14" title="Categories" id="basic-nav-dropdown">
              <LinkContainer to="/All-products">
                <NavDropdown.Item>All-Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Electronics">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Jewlery">
                <NavDropdown.Item>Jewlery</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Men's-clothing">
                <NavDropdown.Item>Men's-clothing</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Women's-clothing">
                <NavDropdown.Item>Women's-clothing</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          {/* <LinkContainer> <Nav.Link className="d-flex ml-2 " variant="secondary" bg="primary">
              <span className="text-black w-5 h-5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {" "}
                  <path d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z" />
                </svg>
              </span>
               
            </Nav.Link></LinkContainer>  */}
             {/* <LinkContainer to="/Cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer> */}
            <CartModal/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// <Nav className="me-auto">
{
  /* <Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#link">Link</Nav.Link>
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
</Nav> */
}
export default NewNav;
