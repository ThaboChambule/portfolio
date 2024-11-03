import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black relative">
      <h1 className="text-8xl text-center">About</h1>
      <div className="flex space-x-72">
        <div className="ml-36 text-xl">
          <p>
            <img className="w-60" src="/images/portrait.jpg" />
          </p>
          <div className="space-y-2">
            <p>
              I'm a full stack web developer and data science student based in
              South Africa. <br />I specialize in building web applications
              using React, Node.js and Next.js, with<br /> a keen  eye for
              modern designs using Tailwind CSS.
            </p>
            <p>
              When i'm not coding, you find me playing chess, exploring the
              latest tech trends,<br /> or enjoying a good book
            </p>
            <p>Check out my work and feel free to get in touch!</p>
          </div>
        </div>
        <div>
          <div class="stack grid grid-rows-4 grid-flow-col gap-4">
            <div>
              <p>
                <img src="/images/html.png" />
              </p>
              <h2>HTML</h2>
            </div>
            <div>
              <p>
                <img src="/images/css-3.png" />
              </p>
              <h2>CSS</h2>
            </div>
            <div>
              <p>
                <img src="/images/java-script.png" />
              </p>
              <h2>JAVASCRIPT</h2>
            </div>
            <div>
              <p>
                <img src="/images/c-sharp.png" />
              </p>
              <h2>C#</h2>
            </div>
            <div>
              <p>
                <img src="/images/react.png" />
              </p>
              <h2>REACT</h2>
            </div>
            <div>
              <p>
                <img src="/images/git.png" />
              </p>
              <h2>GIT</h2>
            </div>
            <div>
              <p>
                <img src="/images/Tailwind_CSS_Logo.svg.png" />
              </p>
              <h2>TAILWIND</h2>
            </div>
            <div>
              <p>
                <img src="/images/node.png" />
              </p>
              <h2>NODE.JS</h2>
            </div>
            <div>
              <p>
                <img src="/images/next-js-logo.png" />
              </p>
              <h2>NEXT.JS</h2>
            </div>
            <div>
              <p>
                <img src="/images/expressjs_logo.png" />
              </p>
              <h2>EXPRESS.JS</h2>
            </div>
            <div>
              <p>
                <img src="/images/sql.png" />
              </p>
              <h2>SQL</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
