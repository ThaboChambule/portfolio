export default function Contact() {
  return (
    <div className="space-y-5">
      <h1 className="text-8xl text-center">Contact</h1>
      <h2 className="text-center">Have a question or want us to work together? Leave your<br/>
      details and I'll get back to you as soon as possible.</h2>
    <form className="text-center space-y-2" >
        <input className="w-96 bg-slate-800" placeholder="Name"/> <br/>
        <input className="w-96 bg-slate-800" placeholder="Email"/> <br/>
        <textarea className="w-96 bg-slate-800" placeholder="Message"/> <br/>
        <button className="border-double border-2 w-32 border-violet-600 text-lg">Submit</button>
    </form>
    </div>
   
  );
}
