import React   from "react";
import Delivery from "./Delivery";
import { Link } from "react-router-dom";

function Hero() {
   
  return (
    <div>
      <div className="w-screen h-screen bg-white flex-col lg:flex-row flex p-5">
        {/* left */}
        <Link
          to="/All-products"
          className="bg-cover bg-center flex-1 h-auto  hover:animate-pulse lg:m-5 flex justify-center items-center   "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzkyfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
          }}
        >
          <div>
            <div className="flex justify-center items-center h-10 w-28 rounded-sm bg-white">
               
              All Products
            </div>
          </div>
        </Link>
        {/* right */}
        <div className="flex-1 flex  lg:mr-2 flex-col">
          {/* top */}
          <div className="flex flex-1 lg:m-5 my-2 ">
            <Link  
              to="/Men's-clothing"
              className="flex-1 bg-cover bg-center mr-2 hover:animate-pulse flex justify-center items-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
              }}
            >
              <div>
                <div className="flex justify-center items-center h-10 w-28 rounded-sm bg-white">
                 
                  Men
                </div>
              </div>
            </Link>
            <Link
              to="/Women's-clothing"
              className="flex-1 ml-2 bg-cover bg-center hover:animate-pulse flex justify-center items-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1566958799193-c2aa57a835d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDgxfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
              }}
            >
              <div>
                <div className="flex justify-center items-center h-10 w-28 rounded-sm bg-white">
              
                  Women
                </div>
              </div>
            </Link>
          </div>
          {/* bottom */}
          <div className="flex-1 flex  lg:m-5 my-2">
            <Link
              className="flex-1 mr-2 bg-cover bg-center  flex justify-center hover:animate-pulse items-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
              }}
              to="/Jewlery"
            >
              <div>
                <div className="flex justify-center items-center h-10 w-28 rounded-sm bg-white">
               
                  Jewelery
                </div>
              </div>
            </Link>
            <Link 
              className="flex-1 ml-2  bg-cover bg-center flex hover:animate-pulse justify-center items-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1515940175183-6798529cb860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)`,
              }}
              to="/Electronics"
            >
              <div>
                <div className="flex justify-center items-center h-10 w-28 rounded-sm bg-white">
                  {" "}
                  Electronics
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
}

export default Hero;
