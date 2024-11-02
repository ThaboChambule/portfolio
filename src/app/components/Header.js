import Link from "next/link"

export default function Header() {
    return (
      <header>
        <div className="text-4xl font-semibold">
          <Link href="/">Thabo<span className="text-violet-500">.</span></Link>
        </div>
        <nav className="flex justify-end gap-5 mr-6 text-xl">
            <div>
            <Link href="/">Home</Link>
            </div>
            <div>
            <Link href="/">About</Link>
            </div>
            <div>
            <Link href="/">Projects</Link>
            </div>
            <div>
            <Link href="/">Contact</Link>
            </div>
        </nav>
      </header>
    );
  }