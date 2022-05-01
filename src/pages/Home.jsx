import React, { useRef, useState, useContext,useEffect } from "react";
import {MyContext} from '../components/Context';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import ShoppingCard from "../components/ShoppingCard";
import Shopping from "../components/Shopping";
import CartModal from "./CartModal";
 
function Home() {
  const [loading, isLoading] = useState(true);
  const {data,setdata,jewelery, setjewelery,electronics, setelectronics}=useContext(MyContext)
  // const [category, setcategory] = useState([]);


  // const [men, setmen] = useState([]);
   
  const URL = `https://fakestoreapi.com/products `;

  const rand = Math.floor(Math.random() * 10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL);
        isLoading(true);

        const categories = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const jewelerys = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const electronicsData = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const mensWears = await axios.get(
          "https://fakestoreapi.com/products/category/men's-clothing"
        );
         

        setdata(res.data);
        isLoading(false);
        // setcategory(categories.data);
        setjewelery(jewelerys.data);
        setelectronics(electronicsData.data);
        // setmen(mensWears.data);
         
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white font-raleway">
      {loading && <Loading />}

     {/* <div className="flex justify-end"> <CartModal/></div> */}
      {!loading && (
        <Shopping data={data} jewelery={jewelery} electronics={electronics} />
      )}
       
       {/* <Shopping data={data} jewelery={jewelery} electronics={electronics} /> */}
     
    </div>
  );
}

export default Home;
