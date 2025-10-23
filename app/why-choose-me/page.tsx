"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Target, Zap, Award, CheckCircle } from "lucide-react";

export default function WhyChooseMe() {
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
                  WHY CHOOSE ME
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                Why Choose <span className="text-primary-red relative">
                  Me
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                I've been where you are. Weak, tired, lost. I know exactly what it takes to transform because I've done it myself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/free-audit"
                  className="bg-primary-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200"
                >
                  GET YOUR FREE AUDIT
                </Link>
                <Link 
                  href="/protocol"
                  className="border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-gold hover:text-black transition-colors duration-200"
                >
                  SEE THE PROTOCOL
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
                <div className="text-4xl font-bold text-primary-gold mb-2">200+</div>
                <div className="text-sm text-white/70 font-semibold">MEN TRANSFORMED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-red mb-2">15kg</div>
                <div className="text-sm text-white/70 font-semibold">AVERAGE FAT LOSS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-sm text-white/70 font-semibold">STRENGTH INCREASE</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">100%</div>
                <div className="text-sm text-white/70 font-semibold">ENERGY IMPROVEMENT</div>
              </div>
            </div>
          </div>
        </section>

        {/* My Transformation */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                My <span className="text-primary-red">Transformation</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                I've walked the path from weakness to strength. Here's my journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  weight: "108kg", 
                  title: "The Starting Point", 
                  desc: "Overweight, low energy, brain fog, no direction. Living the same weak routine every day.",
                  color: "text-primary-red",
                  bgColor: "bg-primary-red/20"
                },
                { 
                  weight: "70kg", 
                  title: "The Cut", 
                  desc: "Stripped down the fat. Learned what my body actually needed. Built the foundation.",
                  color: "text-primary-gold",
                  bgColor: "bg-primary-gold/20"
                },
                { 
                  weight: "78kg", 
                  title: "The Rebuild", 
                  desc: "Added quality muscle. Optimized hormones. Unstoppable energy and confidence.",
                  color: "text-primary-gold",
                  bgColor: "bg-primary-gold/20"
                }
              ].map((stage, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-primary-red/30 transition-all duration-300 hover-lift">
                  <div className={`text-6xl font-bold mb-4 ${stage.color}`}>{stage.weight}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{stage.title}</h3>
                  <p className="text-white/80 leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Me Different */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                What Makes Me <span className="text-primary-gold">Different</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Four key factors that set my approach apart from everything else.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Real Results, Not Theory",
                  content: "I don't just study fitness - I live it. Every protocol I teach is something I've personally tested and refined through my own transformation."
                },
                {
                  icon: Target,
                  title: "Hormone-First Approach",
                  content: "Most trainers ignore hormones. I focus on optimizing testosterone, cortisol, and other key hormones that drive real transformation."
                },
                {
                  icon: Zap,
                  title: "Energy & Performance Focus",
                  content: "It's not just about looking good - it's about feeling unstoppable. My clients report massive improvements in energy, focus, and confidence."
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  content: "I've helped hundreds of men break free from weakness and build the strength, energy, and confidence they thought was impossible."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-red/30 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Philosophy */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                My <span className="text-primary-red">Philosophy</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The core beliefs that drive everything I do.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700">
              <div className="text-center mb-8">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                  "Weakness is not your destiny. It's a choice you make every day when you don't take action."
                </blockquote>
                <p className="text-primary-gold text-lg font-semibold">- My Core Belief</p>
              </div>
              
              <div className="space-y-6 text-lg text-white/80">
                <p className="leading-relaxed">
                  I believe every man has the potential for greatness. The problem isn't that you're weak - it's that you've been given the wrong information and the wrong systems.
                </p>
                <p className="leading-relaxed">
                  Most fitness advice is designed to keep you dependent on supplements, complicated programs, and endless confusion. I cut through the noise and give you what actually works.
                </p>
                <p className="leading-relaxed">
                  My approach is simple: optimize your hormones, build real strength, and create systems that work with your life, not against it. The result? Unstoppable energy, unshakeable confidence, and a body that performs as well as it looks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Results */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Client <span className="text-primary-gold">Results</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Real numbers from real transformations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: "15kg", label: "Average fat loss", desc: "In 60-90 days" },
                { metric: "40%", label: "Strength increase", desc: "Across all lifts" },
                { metric: "100%", label: "Energy improvement", desc: "Reported by clients" }
              ].map((result, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center hover:border-primary-gold/30 transition-all duration-300 hover-lift">
                  <div className="text-5xl font-bold text-primary-gold mb-2">{result.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{result.label}</h3>
                  <p className="text-white/60">{result.desc}</p>
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
                Join the hundreds of men who've already escaped weakness and built the strength, energy, and confidence they deserve.
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

        <Footer />
      </main>
    </>
  );
}