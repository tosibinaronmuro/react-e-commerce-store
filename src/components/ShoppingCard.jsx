import React, { useRef, useState, useContext } from "react";
import {MyContext} from "./Context";
import { Link, useNavigate } from 'react-router-dom';


function ShoppingCard({ image, id, title, rate, price,description }) {
  const cartID = useRef();
  // const navigate = useNavigate();
  // navigate('/Item');

    const {setCartprice, setcarttitle,setcartdescription,setcartimage,setcartId,setcartrate}=useContext(MyContext)

  const viewItem = () => {
   setCartprice( price)
   setcarttitle(title)
   setcartId(id)
   setcartimage(image)
   setcartrate(rate)
   setcartdescription(description)
   
  };

  return (
    <li
      key={id}
      className="lg:m-4 bg-gray-200 my-3 border-2 m-auto   lg:w-80   w-44  "
    >
      <div
        className="lg:h-80 lg:w-80  bg-cover bg-center w-44 h-44 "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p
          className="text-sm text-gray-500 h-10 p-4 overflow-hidden"
          ref={cartID}
        >
          {title}
        </p>
        <div className="flex justify-between p-4">
          <p className="font-bold">${price}</p>
          <p>{rate}</p>
        </div>
      </div>
      <div className="flex justify-center">
       <Link to='/Item'> <button
          onClick={viewItem}
          type="button"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
         View Item
        </button></Link>
      </div>
    </li>
  );
}

export default ShoppingCard;
