import Link from "next/link";
import Header from "./components/Header";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <>
    <div className="relative">
      <main>
        <ParticlesComponent className="absolute inset-0 z-0" />
        <div className="relative z-10">
        <Header />
          <div className="justify-self-center text-5xl py-80">
            <h1>
              Hello, I'm <span className="text-violet-500">Thabo</span>.
            </h1>
            <h1>I'm a full stack web developer</h1>
            <div>
              <Link href="/">View my work</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    <h1>Haibpewifopn</h1>
    </>
  );
}

