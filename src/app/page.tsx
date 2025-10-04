
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Education from "./components/Education";

export default function Home() {
  return (
   <>
   <Container>
    <Hero />
    <About />
    <Career />
    <Projects />
    <Skills/>
    <Education />
   </Container>
   
   </>
  );
}
