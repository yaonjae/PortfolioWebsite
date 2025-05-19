import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Main from "./pages/Main";
import Skills from "./pages/Skills";

export default function Home() {
  return (
    <>
      <section className="snap-center h-screen">
        <Main />
      </section>
      <section className="snap-center h-screen">
        <About />
      </section>
      <section className="snap-center h-screen">
        <Education />
      </section>
      <section className="snap-center h-screen">
        <Skills />
      </section>
      <section className="snap-center h-screen">
        <Contact />
      </section>
    </>
  );
}
