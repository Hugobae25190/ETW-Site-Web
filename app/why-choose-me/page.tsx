"use client";

import Header from "@/components/Header";
import { TrendingUp, Target, Zap, Award } from "lucide-react";

export default function WhyChooseMe() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#212121] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Why Choose <span className="text-[#E74C3C]">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              I've been where you are. Weak, tired, lost. I know exactly what it takes to transform because I've done it myself.
            </p>
          </div>
        </section>

        {/* My Transformation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              My <span className="text-[#E74C3C]">Transformation</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { weight: "108kg", title: "The Starting Point", desc: "Overweight, low energy, brain fog, no direction. Living the same weak routine every day.", color: "#E74C3C" },
                { weight: "70kg", title: "The Cut", desc: "Stripped down the fat. Learned what my body actually needed. Built the foundation.", color: "#C4A84A" },
                { weight: "78kg", title: "The Rebuild", desc: "Added quality muscle. Optimized hormones. Unstoppable energy and confidence.", color: "#C4A84A" }
              ].map((stage, index) => (
                <div key={index} className="bg-[#212121] p-8 rounded-lg border border-white/10 text-center hover:border-[#C4A84A]/50 transition-all duration-300">
                  <div className="text-6xl font-bold mb-4" style={{ color: stage.color }}>{stage.weight}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{stage.title}</h3>
                  <p className="text-white/80">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Me Different */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              What Makes Me <span className="text-[#C4A84A]">Different</span>
            </h2>
            
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
                <div key={index} className="bg-[#212121] p-8 rounded-lg border border-white/10 hover:border-[#E74C3C]/50 transition-colors duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#E74C3C] w-12 h-12 rounded-full flex items-center justify-center">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              My <span className="text-[#E74C3C]">Philosophy</span>
            </h2>
            
            <div className="bg-[#212121] p-8 md:p-12 rounded-lg border border-white/10">
              <div className="text-center mb-8">
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                  "Weakness is not your destiny. It's a choice you make every day when you don't take action."
                </blockquote>
                <p className="text-[#C4A84A] text-lg font-semibold">- My Core Belief</p>
              </div>
              
              <div className="space-y-6 text-lg text-white/80">
                <p>
                  I believe every man has the potential for greatness. The problem isn't that you're weak - it's that you've been given the wrong information and the wrong systems.
                </p>
                <p>
                  Most fitness advice is designed to keep you dependent on supplements, complicated programs, and endless confusion. I cut through the noise and give you what actually works.
                </p>
                <p>
                  My approach is simple: optimize your hormones, build real strength, and create systems that work with your life, not against it. The result? Unstoppable energy, unshakeable confidence, and a body that performs as well as it looks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Results */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Client <span className="text-[#C4A84A]">Results</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: "15kg", label: "Average fat loss", desc: "In 90 days" },
                { metric: "40%", label: "Strength increase", desc: "Across all lifts" },
                { metric: "100%", label: "Energy improvement", desc: "Reported by clients" }
              ].map((result, index) => (
                <div key={index} className="bg-[#212121] p-8 rounded-lg border border-white/10 text-center hover:border-[#C4A84A]/50 transition-colors">
                  <div className="text-5xl font-bold text-[#C4A84A] mb-2">{result.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{result.label}</h3>
                  <p className="text-white/60">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-[#E74C3C] to-[#C0392B] p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Join the hundreds of men who've already escaped weakness and built the strength, energy, and confidence they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/free-audit"
                  className="bg-[#C4A84A] text-[#212121] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#B39840] transition-colors"
                >
                  GET YOUR FREE AUDIT
                </a>
                <a 
                  href="/protocol"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#212121] transition-colors"
                >
                  SEE THE PROTOCOL
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}