import Link from "next/link";
import Header from "./components/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <>
      <div className="relative">
        <main>
          <ParticlesComponent className="absolute inset-0 z-0" />
          <div className="relative z-10">
            <Header />
            <div className="justify-self-center text-6xl py-80 space-y-4">
              <div className="typewriter">
                <h1 className="text-center">
                  Hello, I'm <span className="text-violet-500">Thabo</span>.
                </h1>
                <h1>I'm a full stack web developer</h1>
              </div>
              <div className="w-96 p-1 border-2 border-violet-500 text-4xl text-center justify-self-center text-violet-500">
                <Link href="#about">View my work&#8595;</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects"></section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
