import React from "react";
import { motion } from "framer-motion";

const TextSection = () => {
  const sectionVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    hidden: { y: 100, opacity: 0 },
  };
  return (
    <section className="lg:flex lg:flex-row mx-5 my-8">
      <div>
      <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible">
                    <p className="m-5 my-8 text-xl font-thin font-serif ">
                    
                        A lo largo de los años, he tenido la oportunidad de trabajar en diferentes proyectos y sesiones fotográficas, lo que me ha permitido perfeccionar mi técnica y estilo personal. Desde retratos a paisajes, siempre busco transmitir mi visión a través de mis fotos.
                        
                    </p>
      </motion.div>

      </div>
      <div>

         
      <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible">
                    <p className="font-mono m-5 my-8 text-xl font-medium ">
                    
                        Mi objetivo es crear imágenes que cuenten una historia y reflejen la esencia de cada momento. Creo que la fotografía es una forma poderosa de expresión y una manera de capturar la belleza de la vida en todas sus formas.
                        
                    </p>
                    </motion.div>
     
        
      </div>
    </section>
  );
};

export default TextSection;
