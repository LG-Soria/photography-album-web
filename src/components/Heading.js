import headingImg from "../img/image-6.jpg";

const Heading = () => {
  return (
<section className="flex justify-center">
<div 
className="d-flex flex-col bg-[#000] text-white 
lg:flex lg:max-h-80 lg:flex-row ">
     
      <div className="mx-5 lg:ml-24 lg:w-3/5 lg:flex lg:flex-col lg:justify-center  ">
        <h1 className="text-3xl pt-5 mb-5  lg:text-4xl lg:font-bold lg:leading-normal lg:mb-3  ">Photography Portfolio</h1>
        <p className="lg:text-sm">
          Bienvenido a mi portfolio de fotografía, donde encontrarás una
          selección de mi trabajo como fotógrafo profesional. Mi pasión por la
          fotografía me lleva a capturar momentos únicos y emociones genuinas en
          cada una de mis fotografías.
        </p>
       <div className="lg:justify-items-start">
       <button 
          className="bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 
                     border border-blue-700 rounded
                     my-3 mx-0 lg:mt-8 lg:max-w-2.5 
                     "
        >
          Leer mas sobre mi
        </button>
       </div>
      </div>

      <div className=" pt-5 lg:pt-0  lg:flex lg:w-2/5 lg:h-100  " >
        <img className=" mx-auto object-cover lg:mx-0  md:h-full lg:w-full justify-self-end  " 
        src={headingImg}  //style={{height:"510px"}} 
        alt="heading img" />
      </div>
    </div>
</section>
  );
};
export default Heading;
