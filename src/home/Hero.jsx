import Header from "../components/Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Writing from "./Writing";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="container">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />

        <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Hero;
