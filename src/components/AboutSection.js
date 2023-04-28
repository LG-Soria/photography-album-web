import { Button } from "@material-tailwind/react";
import handlePic from "../img/hand-shadow.jpg"

const AboutSection = () => {
    return(
        <section id="#about" className="mx-5 mt-24 lg:flex lg:flex-row lg:mx-24 lg:content-center ">
            <div className=" lg:flex lg:flex-col lg:place-content-center lg:mr-8">
                <h1 className="text-3xl font-bold py-2">Sobre Nuestro trabajo</h1>
                <p className=" my-3 text-lg font-thin font-serif">Te invito a explorar mi portfolio y conocer mi trabajo. Si estás interesado en colaborar conmigo en algún proyecto o sesión fotográfica, no dudes en ponerte en contacto conmigo. Estaré encantado de escuchar tus ideas y juntos crear imágenes únicas e inolvidables.</p>
                <div  className="flex justify-center"><Button className="mt-4 font-thing " variant="outlined">Leer Mas</Button></div>
            </div>
            <div className="hidden md:inline-flex lg:w-full lg:h-3/6">
                <img src={handlePic} alt="imagen ilustrativa artistica"></img>
            </div>
        </section>
    )
}
export default AboutSection
