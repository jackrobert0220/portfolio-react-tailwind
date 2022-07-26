import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyMusic from "./components/MyMusic";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialBar from "./components/SocialBar";
// import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <SocialBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <MyMusic />
      <Contact />

      {/* <SocialLinks /> */}
    </div>
  );
}

export default App;
