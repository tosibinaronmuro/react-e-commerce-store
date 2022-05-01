import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import ShoppingCard from "./ShoppingCard";

function Shopping({ data, jewelery, electronics }) {
  return (
    <div className="flexx justify-center m-auto"> 
       
      <Hero />
      {/* {!loading && <Carousel image1={data[rand].image} image2={data[rand].image} image3={data[rand].image}   />} */}
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl    ">All Products</h1>
      </div>
      <ul className="grid h-screen overflow-hidden   lg:m-3 m-auto bg-white     grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.map((item) => {
          return (
            <ShoppingCard
              title={item.title}
              image={item.image}
              key={item.id}
              description={item.description}
              price={item.price}
              rate={item.rating.rate}
              id={item.id}
            />
          );
        })}
      </ul>
      <Link to="/All-products"><button className="w-screen mr-14 p-2 bg-slate-300 mx-2  rounded">see more</button></Link>
      <br />
      <hr />
      {/* Women's clothing */}
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl   ">Women</h1>
      </div>
      <ul className="grid   m-auto bg-white   grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.map((item) => {
          if (item.category.includes("men's clothing")) {
            if (item.category.includes("women's clothing")) {
              return (
                <ShoppingCard
                  title={item.title}
                  image={item.image}
                  key={item.id}
                  description={item.description}
                  price={item.price}
                  rate={item.rating.rate}
                  id={item.id}
                />
              );
            }
          }
        })}
      </ul>
      <Link to="Women's-clothing"><button className="w-screen mr-14 p-2 bg-slate-300 mx-2  rounded">see more</button></Link>
      <br />
      <hr />
      {/* men's clothing */}
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl   ">Men</h1>
      </div>
      <ul className="grid  m-auto bg-white h-auto grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
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
      <Link to="/Men's-clothing"><button className="w-screen mr-14 p-2 bg-slate-300 mx-2  rounded">see more</button></Link>
      <br />
      <hr />
      {/* jewelry */}
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl   ">Jewelery</h1>
      </div>
      <ul className="grid  m-auto bg-white h-auto grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
        {jewelery.map((item) => {
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
        })}
      </ul>
      <Link to="/Jewlery"><button className="w-screen mr-14 p-2 bg-slate-300 mx-2  rounded">see more</button></Link>
      <br />
      <hr />
      {/* electronics */}
      <div className="flex justify-start mx-5 items-center">
        <h1 className="font-bold text-2xl   ">Electronics</h1>
      </div>
      <ul className="grid  m-auto bg-white   grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
        {electronics.map((item) => {
          return (
            <ShoppingCard
              title={item.title}
              image={item.image}
              key={item.id}
              description={item.description}
              price={item.price}
              rate={item.rating.rate}
            />
          );
        })}
      </ul>
      <Link to="/Electronics"><button className="w-screen mr-14 p-2 bg-slate-300 mx-2  rounded">see more</button></Link>
      <br />
      <hr />
    </div>
  );
}

export default Shopping;
