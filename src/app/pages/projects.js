import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Professional Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mgidla High School Project */}
        <div className=" shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="relative h-64 w-full">
            <Image 
              src="/images/mgidla.png" 
              alt="Mgidla High School Website" 
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Mgidla High School Web Platform
            </h3>
            
            <p className="text-gray-600 mb-4">
              A transformative web solution designed to empower rural education by providing digital resources and information for matriculation learners in underserved communities.
            </p>
            
            <div className="flex space-x-4">
              <Link href="https://mgidlasecondary.co.za" target="_blank" className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors">
                Live Website
              </Link>
              <Link href="/projects/mgidla-school" className="px-4 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50 transition-colors">
                Project Details
              </Link>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                Next.js
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                Tailwind CSS
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                Responsive Design
              </span>
            </div>
          </div>
        </div>

        {/* X-Clone Project */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="relative h-64 w-full">
            <Image 
              src="/projects/x-clone.png" 
              alt="X Social Media Clone" 
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              X (Twitter) Social Media Clone
            </h3>
            
            <p className="text-gray-600 mb-4">
              A comprehensive full-stack social media application mimicking core functionalities of X (Twitter), demonstrating advanced web development skills.
            </p>
            
            <div className="flex space-x-4">
              <Link href="#" target="_blank" className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors">
                Live App
              </Link>
              <Link href="/projects/x-clone" className="px-4 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50 transition-colors">
                Project Details
              </Link>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                React
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                NextAuth
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                MongoDB
              </span>
            </div>
          </div>
        </div>

        {/* Blog Project */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="relative h-64 w-full">
            <Image 
              src="/projects/personal-blog.png" 
              alt="Personal Tech Blog" 
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Personal Technology Blog
            </h3>
            
            <p className="text-gray-600 mb-4">
              A dynamic, content-rich blog platform showcasing technical insights, development tutorials, and personal project experiences.
            </p>
            
            <div className="flex space-x-4">
              <Link href="#" target="_blank" className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors">
                Live Blog
              </Link>
              <Link href="/projects/personal-blog" className="px-4 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50 transition-colors">
                Project Details
              </Link>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                Next.js
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                MDX
              </span>
              <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                Markdown
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}