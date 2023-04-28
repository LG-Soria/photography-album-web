import ImageCard from "./ImageCard";
import React from "react";

const ImagesCollection = () => {
    
    const imagesList = [...new Array(9)].map(
        (number, index) => `./images/image-${index + 1 }.jpg `
        );

  return (
    <>
      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        
        {imagesList.map((imgUrl, index) => {
         
         return (
           
            <li key={index} className="h-96  mx-5 my-5 " >
             
           
              
                <ImageCard className="" key={index} imgUrl={imgUrl} />
            
            
            
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center mx-5">
        <button className="bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 
                     border border-blue-700 rounded
                     my-3 mx-0 ">Ver mas</button>
      </div>
    </>
  );
};

export default ImagesCollection;
