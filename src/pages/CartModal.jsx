import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Badge,
  Button,
  Modal
} from "react-bootstrap";
import {MyContext} from '../components/Context';
import CartMapFunction from "./CartMapFunction";
function CartModal() {
    const [show, setShow] = useState(false);
    const { setcart,cart}=useContext(MyContext)
    const totalPrice=cart.reduce((acc,curr)=> acc+curr.cartItemPrice,0);
    return (
        
      <>
       
        <Button variant="light" onClick={() => setShow(true)}>
        <span className="text-black w-5 h-5 mt-1">
                <svg className="text-black w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   
                  <path d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H312V134.1L288.1 111C279.6 101.7 264.4 101.7 255 111C245.7 120.4 245.7 135.6 255 144.1L319 208.1C328.4 218.3 343.6 218.3 352.1 208.1L416.1 144.1C426.3 135.6 426.3 120.4 416.1 111C407.6 101.7 392.4 101.7 383 111L360 134.1V32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464z" />
                </svg>
              </span>
        </Button>
  
        <Modal className="w-screen"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Shopping Cart
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-secondary  ">
          <div className="text-dark">
         {/* <h1 className="flex justify-center bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5">Shopping Cart</h1> */}
        <ul className=" h-80">
         { cart.map((item)=>{
          return <CartMapFunction
        item={item}
         
       
           />
         })}
        </ul>
        <div className="flex justify-center mx-14 font-extralight text-xl ">
          <p>Total :<span className="bg-purple-100 text-purple-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">${totalPrice}</span></p>
        </div>
        <div><button type="button" class="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Checkout</button></div>
    </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default CartModal