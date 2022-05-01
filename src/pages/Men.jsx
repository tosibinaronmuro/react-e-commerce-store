import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import {MyContext} from '../components/Context';
import ShoppingCard from '../components/ShoppingCard';

function Men() {
    const {data }=useContext(MyContext);
    return (
      <div>
      <Link to='/'> <button type="button" className="text-blue-700 border  m-2 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
      <svg className="w-4 h-4"    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    </button></Link>
  
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl">Men</h1>
      </div>
      <ul className="grid m-3 bg-white h-auto grid-cols-2  lg:grid-cols-4 ">
        {data.map((item) => {
          if (item.category.includes("men's clothing")) {
            if (!item.category.includes("women's clothing")) {
              return (
                <ShoppingCard
                  title={item.title}
                  image={item.image}
                  key={item.id}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                  rate={item.rating.rate}
                />
              );
            }
          }
        })}
      </ul>
      </div>
     
  )
}

export default Men