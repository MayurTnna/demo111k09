import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import OurClient from "./component/OurClient";
import OurDetail from "./component/OurDetail";
import OurProject from "./component/OurProject";
import OurTeam from "./component/OurTeam";
import Services from "./component/Services";



function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Home />
      </div>
      <AboutUs />
      <div className="services">
      <Services/> 
      </div>
      <OurTeam/>
      <div className="ourproject">
      <OurProject/>
      </div>
      <div className="ourclient">
      <OurClient/>
      </div>
      <OurDetail/>
      <Footer/>
    </>
  );
}

export default App;
