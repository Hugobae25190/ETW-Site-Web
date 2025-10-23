"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblznlnp");

  if (state.succeeded) {
    return (
      <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ✅ Request Sent Successfully!
          </h2>
          <p className="text-white/70 mb-4">
            I'll get back to you within 24 hours.
          </p>
          <p className="text-white/60 text-sm">
            No spam, no BS. Just a genuine assessment of your situation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Book Your Free Audit
        </h2>
        <p className="text-white/70">
          Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none transition-colors"
            placeholder="Your full name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Current Weight (kg)</label>
          <input 
            type="number" 
            name="weight"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none transition-colors"
            placeholder="e.g. 85"
          />
          <ValidationError 
            prefix="Weight" 
            field="weight"
            errors={state.errors}
          />
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Biggest Challenge</label>
          <textarea 
            name="challenge"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none transition-colors h-24"
            placeholder="What's your biggest challenge right now?"
          />
          <ValidationError 
            prefix="Challenge" 
            field="challenge"
            errors={state.errors}
          />
        </div>
        
        <button 
          type="submit"
          disabled={state.submitting}
          className="w-full bg-primary-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "BOOK MY FREE AUDIT"}
        </button>
      </form>
      
      <p className="text-white/60 text-sm text-center mt-6">
        No spam, no BS. Just a genuine assessment of your situation.
      </p>
    </div>
  );
}