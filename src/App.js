import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Test from "./pages/Itempage";
import Navigation from "./components/Navigation";
import { MyContext } from "./components/Context";
import Cart from "./pages/Cart";
import AllProjects from "./pages/AllProjects";
import Itempage from "./pages/Itempage";
import Electronics from "./pages/Electronics";
import Jewelry from "./pages/Jewelry";
import Men from "./pages/Men";
import Women from "./pages/Women";
import NewNav from "./pages/NewNav";
 

function App() {
  const [cartprice, setCartprice] = useState();
  const [carttitle, setcarttitle] = useState();
  const [cartdescription, setcartdescription] = useState();
  const [cartimage, setcartimage] = useState();
  const [cartid, setcartId] = useState();
  const [cartrate, setcartrate] = useState();
  const [cart, setcart] = useState([]);
  const [totalPrice,setTotalPrice]=useState()
  const [data, setdata] = useState([]);
  const [jewelery, setjewelery] = useState([]);
  const [electronics, setelectronics] = useState([]);
  return (
    <MyContext.Provider
      value={{ data, setdata,jewelery,setjewelery,electronics, setelectronics,cartprice, setCartprice, carttitle, setcarttitle,cartdescription, setcartdescription,cartimage, setcartimage,cartid, setcartId,cartrate, setcartrate,cart, setcart,totalPrice,setTotalPrice }}
    >
       
      {/* <Navigation/> */}
      <NewNav/>
     
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/All-products" element={<AllProjects/>}>
         All-Projects
        </Route>
        <Route path="/Electronics" element={<Electronics/>}>
        Electronics
        </Route>
        <Route path="/Jewlery" element={<Jewelry/>}>
         Jewelry 
        </Route>
        <Route path="/Men's-clothing" element={<Men/>}>
         Men
        </Route>
        <Route path="/Women's-clothing" element={<Women/>}>
        Women
        </Route>
        <Route path="/Cart" element={<Cart></Cart>}>
          Home
        </Route>
        <Route path="/Item" element={<Itempage/>}>
          
        </Route>
      </Routes>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
