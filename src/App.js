import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyMusic from "./components/MyMusic";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
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
