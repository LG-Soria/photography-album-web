
import Input from "./Input"

const ContactForm = () => {


 

  return (
    <section className="lg:w-2/4 lg:inline-block" id="contact">
      <div className="mt-24" id="contact">
        <h1  className="mx-5 my-5 font-mono font-thin text-3xl">
          <span className="font-semibold font-mono">Si la curiosidad te pico,</span>
          <br></br>
          estate en contacto.
        </h1>
        <Input  />
      
        <p className="mx-5 my-10 font-mono font-thin text-lg lg:text-sm lg:my-3">
          Póngase en contacto con nosotros para ser el primero en conocer los
          lanzamientos de colecciones fotográficas, promociones y mucho más.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
