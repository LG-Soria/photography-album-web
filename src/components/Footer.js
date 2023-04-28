import ContactForm from "./ContactForm";


const Footer = () => {
    return(
        <div className="md:flex lg:mx-20">

       <ContactForm />

        <footer className="flex flex-row mt-24 m-5 lg:ml-12 ">
            <div className="mx-5">
            <h3 className="text-2xl font-bold text-gray-600 my-3">Compañia</h3>
                <ul>
                    <li className="my-3 font-medium "><a href="/">Sobre nosotros</a></li>
                    <li className="my-3 font-medium "><a href="/">Collecciones</a></li>
                    <li className="my-3 font-medium "><a href="/">Historias de nuestros<br></br> clientes</a></li>

                </ul>
            </div>

            <div className="mx-5">
            <h3 className="text-2xl font-bold text-gray-600 my-3">Support</h3>
                <ul>
                    <li className="my-3 font-medium " ><a href="/">Email</a></li>
                    <li className="my-3 font-medium " ><a href="/">Contact Us</a></li>
                    <li className="my-3 font-medium " ><a href="/">Help & FAQS</a></li>

                </ul>
            </div>
        </footer>
        </div>
    )
}

export default Footer;