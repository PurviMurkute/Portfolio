import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
