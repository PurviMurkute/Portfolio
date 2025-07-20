import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerScale={5}
        outerStyle={{
          boxShadow: "0px 0px 20px 7px #ff99cc",
        }}
      />
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
