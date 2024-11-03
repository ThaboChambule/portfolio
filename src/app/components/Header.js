import Link from "next/link"

export default function Header() {
    return (
      <header className="flex justify-between">
        <div className="text-5xl font-semibold ml-10 mt-5">
          <Link  href="/">Thabo<span className="text-violet-500">.</span></Link>
        </div>
        <div>
        <nav className=" flex gap-5 mr-10 mt-11 text-2xl">
            <div>
            <Link href="/">Home</Link>
            </div>
            <div>
            <Link href="#about">About</Link>
            </div>
            <div>
            <Link href="#projects">Projects</Link>
            </div>
            <div>
            <Link href="#contact">Contact</Link>
            </div>
        </nav>
        </div>
      </header>
    );
  }