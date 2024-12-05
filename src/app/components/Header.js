import Link from "next/link";

export default function Header() {
  return (
    <header className=" text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-5xl font-semibold">
          <Link href="/">
            Thabo<span className="text-violet-500">.</span>
          </Link>
        </div>
        <nav className="flex gap-5 text-2xl">
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
