import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center mb-12">About</h1>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <Image className="w-60 mx-auto lg:mx-0 rounded-full" src="/images/portrait.jpg" alt="Portrait of Thabo" width={240} height={240} />
            <div className="mt-6 text-lg space-y-4">
              <p>
                I'm a full stack web developer and data science student based in South Africa. I specialize in building web applications using React, Node.js, and Next.js, with a keen eye for modern designs using Tailwind CSS.
              </p>
              <p>
                When I'm not coding, you can find me playing chess, exploring the latest tech trends, or enjoying a good book.
              </p>
              <p>Check out my work and feel free to get in touch!</p>
              <div className="mt-4">
                <a href="/resume.pdf" className="text-violet-500 hover:underline">Download Resume</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Image src="/images/html.png" alt="HTML" width={60} height={60} />
                <h2 className="mt-2">HTML</h2>
              </div>
              <div className="text-center">
                <Image src="/images/css-3.png" alt="CSS" width={60} height={60} />
                <h2 className="mt-2">CSS</h2>
              </div>
              <div className="text-center">
                <Image src="/images/java-script.png" alt="JavaScript" width={60} height={60} />
                <h2 className="mt-2">JavaScript</h2>
              </div>
              <div className="text-center">
                <Image src="/images/c-sharp.png" alt="C#" width={60} height={60} />
                <h2 className="mt-2">C#</h2>
              </div>
              <div className="text-center">
                <Image src="/images/react.png" alt="React" width={60} height={60} />
                <h2 className="mt-2">React</h2>
              </div>
              <div className="text-center">
                <Image src="/images/git.png" alt="Git" width={60} height={60} />
                <h2 className="mt-2">Git</h2>
              </div>
              <div className="text-center">
                <Image src="/images/Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" width={60} height={60} />
                <h2 className="mt-2">Tailwind CSS</h2>
              </div>
              <div className="text-center">
                <Image src="/images/node.png" alt="Node.js" width={60} height={60} />
                <h2 className="mt-2">Node.js</h2>
              </div>
              <div className="text-center">
                <Image src="/images/next-js-logo.png" alt="Next.js" width={60} height={60} />
                <h2 className="mt-2">Next.js</h2>
              </div>
              <div className="text-center">
                <Image src="/images/expressjs_logo.png" alt="Express.js" width={60} height={60} />
                <h2 className="mt-2">Express.js</h2>
              </div>
              <div className="text-center">
                <Image src="/images/sql.png" alt="SQL" width={60} height={60} />
                <h2 className="mt-2">SQL</h2>
              </div>
              <div className="text-center">
                <Image src="/images/linux.png" alt="Linux" width={60} height={60} />
                <h2 className="mt-2">Linux</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
