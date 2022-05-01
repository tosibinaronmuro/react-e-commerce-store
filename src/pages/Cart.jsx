import React, { useRef, useState, useContext } from "react";
import {MyContext} from '../components/Context';
import CartMapFunction from "./CartMapFunction";
function Cart() {
    const { setcart,cart}=useContext(MyContext)
    const totalPrice=cart.reduce((acc,curr)=> acc+curr.cartItemPrice,0);
    
  return (
    <div>
         <h1 className="flex justify-center bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5">Shopping Cart</h1>
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
  )
}

export default Cart