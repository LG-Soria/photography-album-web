import './App.css';
import Heading from "./components/Heading"
import TextSection from "./components/TextSection"
import { NavBar } from './components/NavBar';
import ImagesCollection from './components/ImagesCollection';
import AboutSection from "./components/AboutSection"
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Heading />
      <TextSection />
      <ImagesCollection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
