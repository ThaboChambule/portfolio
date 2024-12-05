import Image from "next/image";

export default function Certificate() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center mb-12">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Image src="/images/CertificateOfCompletion_AI.jpg" alt="AI Productivity Certificate" width={300} height={200} className="mx-auto" />
            <h2 className="mt-4 text-xl font-semibold">AI Productivity</h2>
            <p className="text-gray-600">Accredited By: SHRM & LinkedIn</p>
          </div>
          <div className="text-center">
            <Image src="/images/placeholder.png" alt="Course Name Certificate" width={300} height={200} className="mx-auto" />
            <h2 className="mt-4 text-xl font-semibold">Course Name</h2>
            <p className="text-gray-600">Accredited By: Institution</p>
          </div>
          <div className="text-center">
            <Image src="/images/placeholder.png" alt="Course Name Certificate" width={300} height={200} className="mx-auto" />
            <h2 className="mt-4 text-xl font-semibold">Course Name</h2>
            <p className="text-gray-600">Accredited By: Institution</p>
          </div>
          <div className="text-center">
            <Image src="/images/placeholder.png" alt="Course Name Certificate" width={300} height={200} className="mx-auto" />
            <h2 className="mt-4 text-xl font-semibold">Course Name</h2>
            <p className="text-gray-600">Accredited By: Institution</p>
          </div>
        </div>
      </div>
    </section>
  );
}
