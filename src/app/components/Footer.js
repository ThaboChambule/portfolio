import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-center p-6 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/yourusername" className="hover:text-violet-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.823 1.102.823 2.22v3.293c0 .32.217.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </Link>
          <Link href="mailto:your.email@example.com" className="hover:text-violet-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l11.985-7.99A1 1 0 0 0 23 4H1a1 1 0 0 0-.985.723L12 12.713zM12 14.287L.015 6.297A1 1 0 0 0 0 7v10a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-.015-.703L12 14.287z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/yourusername" className="hover:text-violet-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v5.6z" />
            </svg>
          </Link>
        </div>
        <p className="mb-4">Thabo Chambule &copy; 2024</p>
        <p className="text-sm">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}

