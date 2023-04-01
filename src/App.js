import React from "react";
import reviews from "./data"
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300">
       
      <div className="text-center">
         <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className=" bg-violet-500 h-[4px] w-1/5 mt-1 mx-auto"></div>

        <div> 
            <Testimonials reviews={reviews}/>
        </div>
       
      </div>
    </div>
  );
};

export default App;
