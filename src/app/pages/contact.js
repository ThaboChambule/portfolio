export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center mb-12">Contact</h1>
        <h2 className="text-center text-lg md:text-xl lg:text-2xl mb-8">
          Have a question or want us to work together? Leave your details and I'll get back to you as soon as possible.
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            className="w-full bg-slate-800 text-white p-3 rounded-md"
            placeholder="Name"
            type="text"
          />
          <input
            className="w-full bg-slate-800 text-white p-3 rounded-md"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="w-full bg-slate-800 text-white p-3 rounded-md"
            placeholder="Message"
            rows="5"
          />
          <button className="w-full bg-violet-600 text-white p-3 rounded-md hover:bg-violet-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
