
import React from "react";

function App() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ReWire Your Cravings. Reclaim Your Mind.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          An AI-powered recovery system built for those who don’t want sympathy—they want strength.
          No fluff. No judgment. Just tools that actually work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#waitlist"
            className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Start for Free
          </a>
          <a
            href="#learn-more"
            className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="learn-more" className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Most recovery tools are soft. That’s not us.
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          ReWired is designed for people who’ve hit rock bottom and still got up swinging. 
          We combine AI precision with brutally honest insights to help you break addictions and rebuild from the ground up.
        </p>
      </section>

      <section id="waitlist" className="bg-black text-white py-20 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          We’re launching soon.
        </h3>
        <p className="mb-6">Join the early access list to be the first to test ReWired’s AI recovery tools.</p>
        <form 
          action="https://formsubmit.co/rewired2025@gmail.com" 
          method="POST"
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-black w-full"
            required
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Join Waitlist
          </button>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://rewired-landing.vercel.app/thanks" />
        </form>
      </section>
    </main>
  );
}

export default App;
