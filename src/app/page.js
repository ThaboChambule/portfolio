import Link from "next/link";
import Header from "./components/Header";
import ParticlesComponent from "./components/Particles";

export default function Home() {
  return (
    <div>
    <Header/>
    <ParticlesComponent id="particles"/>
    <main>
      <div className="justify-self-center text-5xl  py-80">
      <h1>Hello, I'm <span className="text-violet-500">Thabo</span>.</h1>
      <h1>I'm a full stack web developer</h1>
      <div> 
        <Link href="/">View my work</Link>
      </div>
      </div>


    </main>
    </div>
    
  );
}
