import Image from 'next/image'

export default function About(){
    return(
        <div className="bg-black relative">
         <h1 className="text-8xl">About</h1>
         <div className="flex justify-between">
            <div>
             <p ><img className="w-60" src="/images/portrait.jpg"/></p>
             <div>
            <p> H</p>
             
                
                
                
        
         </div>     
            </div>
            <div>
             <div class="stack grid grid-rows-4 grid-flow-col gap-4">
                <div>
                    <p><img src="/images/html.png"/></p>
                    <h2>HTML</h2>
                </div>
                <div>
                <p><img src="/images/css-3.png"/></p>
                    <h2>CSS</h2>
                </div>
                <div>
                <p><img src="/images/java-script.png"/></p>
                    <h2>JAVASCRIPT</h2>
                </div>
                <div>
                <p><img src="/images/c-sharp.png"/></p>
                    <h2>C#</h2>
                </div>
                <div>
                <p><img src="/images/react.png"/></p>
                    <h2>REACT</h2>
                </div>
                <div>
                <p><img src="/images/git.png"/></p>
                    <h2>GIT</h2>
                </div>
                <div>
                <p><img src="/images/Tailwind_CSS_Logo.svg.png"/></p>
                    <h2>TAILWIND</h2>
                </div>
                <div>
                <p><img src="/images/node.png"/></p>
                    <h2>NODE.JS</h2>
                </div>
                <div>
                <p><img src="/images/next-js-logo.png"/></p>
                    <h2>NEXT.JS</h2>
                </div>
                <div>
                <p><img src="/images/expressjs_logo.png"/></p>
                    <h2>EXPRESS.JS</h2>
                </div>
                <div>
                <p><img src="/images/sql.png"/></p>
                    <h2>SQL</h2>
                </div>

             </div>

            </div>
         </div>
        
        </div>
    )
}