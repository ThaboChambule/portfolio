import Link from "next/link";

export default function Header() {
  return (
    <header className=" text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-3xl md:text-5xl font-semibold">
          <Link href="/">
            Thabo<span className="text-violet-500">.</span>
          </Link>
        </div>
        <nav className="flex gap-5 text-lg md:text-2xl">
          <Link href="/" className="hover:text-violet-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-violet-500">
            About
          </Link>
          <Link href="#projects" className="hover:text-violet-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-violet-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
