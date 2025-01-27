import Link from "next/link";
import Header from "./components/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Certificate from "./pages/certificates";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <ParticlesComponent className="absolute inset-0 z-0" />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
            <div className="space-y-4">
              <div className="typewriter">
                <h1 className="text-4xl md:text-6xl lg:text-8xl">
                  Hello,I'm <span className="text-violet-500">Thabo</span>.
                </h1>
                <h1 className="text-2xl md:text-4xl lg:text-6xl">I'm a full-stack developer</h1>
              </div>
              <div className="flex justify-center">
                <Link href="#about" legacyBehavior>
                  <a className="flex items-center justify-center w-64 md:w-96 p-3 border-2 border-violet-500 text-2xl md:text-4xl text-violet-500 hover:bg-violet-500 hover:text-white transition duration-300">
                    View my work
                    <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 15z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="certificates" className="py-20">
        <Certificate />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
      <footer className="py-10">
        <Footer />
      </footer>
      
    </>
  );
}


