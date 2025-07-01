import React from 'react';

export default function RewiredLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">Rewire Your Cravings. Reclaim Your Mind.</h1>
      <p className="text-center max-w-2xl mb-6">
        An AI-powered system built for individuals who want to break free from addiction, destroy distractions, and take back control of their focus.
      </p>
      <form
        action="https://formsubmit.co/rewireyourcravings@gmail.com"
        method="POST"
        className="w-full max-w-md bg-gray-900 p-6 rounded-xl"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 rounded-md text-black mb-4"
        />
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Join the Waitlist
        </button>
      </form>
    </div>
  );
}
