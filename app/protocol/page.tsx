"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Dumbbell, Apple, Zap, Moon, CheckCircle, ArrowRight } from "lucide-react";

export default function Protocol() {
  const pillars = [
    {
      icon: Dumbbell,
      title: "Training Protocol",
      subtitle: "Build Real Strength",
      description: "Progressive overload system. Compound movements. Strength-focused programming that builds functional muscle.",
      details: [
        "3x per week compound movements",
        "Progressive overload tracking",
        "Form-first approach",
        "Recovery-based programming"
      ],
      color: "red"
    },
    {
      icon: Apple,
      title: "Nutrition Protocol", 
      subtitle: "Fuel Your Hormones",
      description: "Hormone-optimizing nutrition. Real food. Strategic timing. No more energy crashes or brain fog.",
      details: [
        "Hormone-supporting macros",
        "Strategic meal timing",
        "Real food focus",
        "Supplement optimization"
      ],
      color: "gold"
    },
    {
      icon: Zap,
      title: "Hormone Optimization",
      subtitle: "Natural Testosterone Boost",
      description: "Lifestyle factors that naturally boost testosterone. Sleep, stress, environment - the complete picture.",
      details: [
        "Sleep optimization protocols",
        "Stress management systems",
        "Environmental toxin reduction",
        "Natural T-boosting strategies"
      ],
      color: "red"
    },
    {
      icon: Moon,
      title: "Recovery Protocol",
      subtitle: "Sleep & Stress Mastery", 
      description: "Recovery is where growth happens. Master your sleep, manage stress, optimize your environment.",
      details: [
        "Sleep hygiene protocols",
        "Stress reduction techniques",
        "Recovery tracking",
        "Environment optimization"
      ],
      color: "gold"
    }
  ];

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
                  THE COMPLETE SYSTEM
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                The <span className="text-primary-red relative">
                  60-90 Day Protocol
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                The complete system I used to transform from 108kg of weakness to 78kg of solid muscle.
                <br />
                <span className="text-primary-gold font-semibold">Benching 100kg for reps. Testosterone optimized. Energy through the roof.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/free-audit"
                  className="bg-primary-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200"
                >
                  GET YOUR FREE AUDIT
                </Link>
                <Link 
                  href="/pricing"
                  className="border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-gold hover:text-black transition-colors duration-200"
                >
                  SEE PRICING
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">60-90</div>
                <div className="text-sm text-white/70 font-semibold">DAYS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-red mb-2">+200%</div>
                <div className="text-sm text-white/70 font-semibold">TESTOSTERONE</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100kg</div>
                <div className="text-sm text-white/70 font-semibold">BENCH PRESS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">100%</div>
                <div className="text-sm text-white/70 font-semibold">NATURAL</div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Pillars */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                The 4 <span className="text-primary-red">Pillars</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Four essential components that work together to transform your body, energy, and life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-red/30 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                      pillar.color === 'red' ? 'bg-primary-red' : 'bg-primary-gold'
                    }`}>
                      <pillar.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                      <p className="text-primary-gold text-lg font-semibold mb-4">{pillar.subtitle}</p>
                      <p className="text-white/80 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {pillar.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-gold flex-shrink-0" size={20} />
                        <span className="text-white/90">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Your <span className="text-primary-gold">60-90 Day Journey</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Here's exactly what to expect during your transformation journey.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { 
                  week: "Weeks 1-3", 
                  title: "Foundation Building", 
                  desc: "Establish habits, learn the basics, start seeing initial changes in energy and strength.",
                  results: ["+20% energy", "Better sleep", "Initial strength gains"]
                },
                { 
                  week: "Weeks 4-6", 
                  title: "Acceleration Phase", 
                  desc: "Rapid progress. Strength gains accelerate. Body composition changes become visible.",
                  results: ["+40% strength", "Visible muscle", "Mental clarity"]
                },
                { 
                  week: "Weeks 7-9", 
                  title: "Transformation Complete", 
                  desc: "Peak performance. Optimal body composition. Unstoppable energy and confidence.",
                  results: ["Peak testosterone", "Maximum strength", "Unstoppable confidence"]
                }
              ].map((phase, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-gold/30 transition-all duration-300 hover-lift">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-gold text-black px-4 py-2 rounded-lg font-bold text-lg">
                        {phase.week}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <ArrowRight className="text-primary-gold" size={24} />
                  </div>
                  
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">{phase.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {phase.results.map((result, i) => (
                      <span key={i} className="bg-primary-red/20 text-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                        {result}
                      </span>
                    ))}
                  </div>
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
                Get the complete protocol and start your 90-day journey to strength, energy, and confidence.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/free-audit"
                  className="inline-block bg-primary-gold text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors duration-200"
                >
                  GET YOUR FREE AUDIT NOW
                </Link>
                
                <p className="text-white/60 text-sm">
                  Free consultation • No commitment • Start today
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <img
                    src="/logo-scorpion.webp"
                    alt="Escape The Weakness"
                    className="h-12 w-auto mr-4"
                  />
                  <span className="text-white font-bold text-xl">Escape The Weakness</span>
                </div>
                <p className="text-white/70 mb-4 max-w-md">
                  Transform your body, energy, and confidence with our proven 60-90 day protocol. 
                  Natural methods, real results.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                    YouTube
                  </a>
                  <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                    TikTok
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/protocol" className="text-white/70 hover:text-primary-gold transition-colors">The Protocol</Link></li>
                  <li><Link href="/pricing" className="text-white/70 hover:text-primary-gold transition-colors">Pricing</Link></li>
                  <li><Link href="/why-choose-me" className="text-white/70 hover:text-primary-gold transition-colors">Why Choose Me</Link></li>
                  <li><Link href="/free-audit" className="text-white/70 hover:text-primary-gold transition-colors">Free Audit</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:contact@escapetheweakness.com" className="text-white/70 hover:text-primary-gold transition-colors">contact@escapetheweakness.com</a></li>
                  <li><span className="text-white/70">Available 24/7</span></li>
                  <li><span className="text-white/70">Response within 24h</span></li>
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/60 text-sm">
                  © 2025 Escape The Weakness. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                  <Link href="/legal/privacy-policy" className="text-white/60 hover:text-primary-gold transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/legal/terms-of-service" className="text-white/60 hover:text-primary-gold transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/legal/disclaimer" className="text-white/60 hover:text-primary-gold transition-colors">
                    Disclaimer
                  </Link>
                  <Link href="/legal/cookies" className="text-white/60 hover:text-primary-gold transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </main>
    </>
  );
}