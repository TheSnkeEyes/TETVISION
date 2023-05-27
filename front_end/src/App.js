import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Packages from "./components/Packages";
import Transforms from "./components/Transforms";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      <Transforms />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
