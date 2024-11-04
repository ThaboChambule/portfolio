import Link from "next/link"

export default function Projects(){
return(
    <div>
        <h1 className="text-8xl text-center">Projects</h1>

        <div>
            <div>project image</div>

            <div>
                <h1 className="text-7xl">//Mgidla H. School</h1> 
                <p>about - Free-Lance</p>
                <Link href="#">LIVE APP</Link>
                <Link href="#">LEARN MORE</Link>

            </div>

        </div> 

        <div>
            <div>project image</div>

            <div>
                <h1 className="text-7xl">//X-Clone</h1> 
                <p>about</p>
                <Link href="#">LIVE APP</Link>
                <Link href="#">LEARN MORE</Link>

            </div>

        </div>
        <div>
            <div>project image</div>

            <div>
                <h1 className="text-7xl">//Blog</h1> 
                <p>about</p>
                <Link href="#">LIVE APP</Link>
                <Link href="#">LEARN MORE</Link>
            </div>

        </div> 





    </div>
)
}