"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Clock, Target, ArrowRight } from "lucide-react";
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
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 70%, rgba(220,38,38,0.15) 0%, transparent 60%),
                  radial-gradient(circle at 70% 30%, rgba(245,158,11,0.1) 0%, transparent 60%)
                `,
              }}></div>
            </div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="inline-block bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-semibold border border-primary-red/30">
                  FREE AUDIT
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                FREE <span className="text-primary-red relative">
                  AUDIT
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get a personalized 15-minute assessment of your biggest weaknesses and a clear action plan to start your transformation.
              </p>
              
              <div className="bg-primary-red/20 text-primary-red px-6 py-3 rounded-full text-lg font-bold border border-primary-red/30 inline-block mb-8">
                ⚡ {spotsLeft}/5 SPOTS LEFT THIS WEEK
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200">
                  BOOK MY FREE AUDIT
                </button>
                <button className="border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-gold hover:text-black transition-colors duration-200">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">15</div>
                <div className="text-sm text-white/70 font-semibold">MINUTES</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-red mb-2">100%</div>
                <div className="text-sm text-white/70 font-semibold">FREE</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-sm text-white/70 font-semibold">WEAKNESSES IDENTIFIED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">3</div>
                <div className="text-sm text-white/70 font-semibold">ACTION STEPS</div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                What You'll <span className="text-primary-red">Get</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Three powerful insights that will change how you approach your transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "3 Biggest Weaknesses",
                  desc: "I'll identify the 3 areas holding you back from your transformation goals.",
                  color: "bg-primary-red"
                },
                {
                  icon: CheckCircle,
                  title: "3 Action Steps",
                  desc: "Get 3 specific, actionable steps you can implement immediately.",
                  color: "bg-primary-gold"
                },
                {
                  icon: Clock,
                  title: "15-Minute Call",
                  desc: "Personal 1-on-1 call to discuss your situation and get personalized advice.",
                  color: "bg-primary-red"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-primary-red/30 transition-all duration-300 hover-lift">
                  <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                How It <span className="text-primary-gold">Works</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Simple process, powerful results.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { 
                  step: "1", 
                  title: "Book Your Spot", 
                  desc: "Click the button below and choose a time that works for you.",
                  icon: ArrowRight
                },
                { 
                  step: "2", 
                  title: "15-Minute Call", 
                  desc: "We'll discuss your current situation, goals, and biggest challenges.",
                  icon: ArrowRight
                },
                { 
                  step: "3", 
                  title: "Get Your Action Plan", 
                  desc: "I'll give you 3 specific weaknesses and 3 actionable steps to start immediately.",
                  icon: null
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-all duration-300 hover-lift">
                  <div className="bg-primary-gold text-black w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                  {item.icon && (
                    <div className="text-primary-gold">
                      <item.icon size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Frequently Asked <span className="text-primary-gold">Questions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Everything you need to know about your free audit.
              </p>
            </div>
            
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
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-red/30 transition-all duration-300 hover-lift">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                  <p className="text-white/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-block bg-primary-red/20 text-primary-red px-6 py-3 rounded-full text-lg font-bold border border-primary-red/30">
                  READY TO START?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Ready to Start Your Transformation?
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                Don't wait. Book your free audit now and get the clarity you need to start your journey.
              </p>
              
              <div className="space-y-4">
                <button className="inline-block bg-primary-gold text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors duration-200">
                  BOOK MY FREE AUDIT NOW
                </button>
                
                <p className="text-white/60 text-sm">
                  Free consultation • No commitment • Start today
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}