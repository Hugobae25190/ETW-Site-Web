"use client";

import Header from "@/components/Header";
import { CheckCircle, Clock, Target } from "lucide-react";
import { useState, useEffect } from "react";

export default function FreeAudit() {
  const [spotsLeft, setSpotsLeft] = useState(3);

  useEffect(() => {
    const spots = Math.floor(Math.random() * 4) + 1;
    setSpotsLeft(Math.min(spots, 4));
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#212121] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              FREE <span className="text-[#E74C3C]">AUDIT</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Get a personalized 15-minute assessment of your biggest weaknesses and a clear action plan to start your transformation.
            </p>
            <div className="bg-[#E74C3C]/20 text-[#E74C3C] px-6 py-3 rounded-full text-lg font-bold border border-[#E74C3C]/30 inline-block">
              ⚡ {spotsLeft}/5 SPOTS LEFT THIS WEEK
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              What You'll <span className="text-[#E74C3C]">Get</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Target,
                  title: "3 Biggest Weaknesses",
                  desc: "I'll identify the 3 areas holding you back from your transformation goals."
                },
                {
                  icon: CheckCircle,
                  title: "3 Action Steps",
                  desc: "Get 3 specific, actionable steps you can implement immediately."
                },
                {
                  icon: Clock,
                  title: "15-Minute Call",
                  desc: "Personal 1-on-1 call to discuss your situation and get personalized advice."
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#212121] p-8 rounded-lg border border-white/10 text-center hover:border-[#C4A84A]/50 transition-all duration-300">
                  <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              How It <span className="text-[#C4A84A]">Works</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { step: "1", title: "Book Your Spot", desc: "Click the button below and choose a time that works for you." },
                { step: "2", title: "15-Minute Call", desc: "We'll discuss your current situation, goals, and biggest challenges." },
                { step: "3", title: "Get Your Action Plan", desc: "I'll give you 3 specific weaknesses and 3 actionable steps to start immediately." }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-[#212121] p-6 rounded-lg border border-white/10">
                  <div className="bg-[#C4A84A] text-[#212121] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-[#212121] p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Book Your Free Audit
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-md text-white focus:border-[#E74C3C] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-md text-white focus:border-[#E74C3C] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Current Weight (kg)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-md text-white focus:border-[#E74C3C] focus:outline-none"
                    placeholder="e.g. 85"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Biggest Challenge</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/20 rounded-md text-white focus:border-[#E74C3C] focus:outline-none h-24"
                    placeholder="What's your biggest challenge right now?"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white py-4 rounded-md font-bold text-lg hover:bg-[#C0392B] transition-colors"
                >
                  BOOK MY FREE AUDIT
                </button>
              </form>
              
              <p className="text-white/60 text-sm text-center mt-4">
                No spam, no BS. Just a genuine assessment of your situation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Frequently Asked <span className="text-[#C4A84A]">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Is this really free?",
                  a: "Yes, completely free. No hidden costs, no upsells, no BS. Just 15 minutes of my time to help you identify what's holding you back."
                },
                {
                  q: "What if I'm a complete beginner?",
                  a: "Perfect! The audit is designed for all levels. I'll assess where you are and give you the right starting point for your journey."
                },
                {
                  q: "Do I need any equipment?",
                  a: "No equipment needed for the call. We'll discuss your current situation and what you have access to for your transformation."
                },
                {
                  q: "What if I don't want to continue after the audit?",
                  a: "That's totally fine. The audit is valuable on its own. You'll walk away with 3 specific weaknesses identified and 3 actionable steps, regardless of whether you continue."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[#212121] p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}