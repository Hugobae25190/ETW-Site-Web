"use client";

import Header from "@/components/Header";
import { Dumbbell, Apple, Zap, Moon, CheckCircle } from "lucide-react";

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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#212121] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The <span className="text-[#E74C3C]">90-Day Protocol</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              The complete system I used to transform from 108kg of weakness to 78kg of solid muscle.
              Benching 100kg for reps. Testosterone optimized. Energy through the roof.
            </p>
            <div className="bg-[#E74C3C]/20 text-[#E74C3C] px-6 py-3 rounded-full text-lg font-bold border border-[#E74C3C]/30 inline-block">
              ⚡ PROVEN RESULTS • 90 DAYS • LIFETIME TRANSFORMATION
            </div>
          </div>
        </section>

        {/* The 4 Pillars */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              The 4 <span className="text-[#E74C3C]">Pillars</span>
            </h2>
            
            {pillars.map((pillar, index) => (
              <div key={index} className={`${index < pillars.length - 1 ? 'mb-16' : ''} bg-[#212121] p-8 md:p-12 rounded-lg border border-white/10 hover:border-[#E74C3C]/50 transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center">
                    <pillar.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-[#C4A84A] text-lg font-semibold">{pillar.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {pillar.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="text-[#C4A84A] flex-shrink-0" size={20} />
                      <span className="text-white/90">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Your <span className="text-[#C4A84A]">90-Day Journey</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { week: "Weeks 1-4", title: "Foundation Building", desc: "Establish habits, learn the basics, start seeing initial changes in energy and strength." },
                { week: "Weeks 5-8", title: "Acceleration Phase", desc: "Rapid progress. Strength gains accelerate. Body composition changes become visible." },
                { week: "Weeks 9-12", title: "Transformation Complete", desc: "Peak performance. Optimal body composition. Unstoppable energy and confidence." }
              ].map((phase, index) => (
                <div key={index} className="bg-[#212121] p-8 rounded-lg border border-white/10 hover:border-[#C4A84A]/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#C4A84A] text-[#212121] px-4 py-2 rounded-full font-bold text-lg">
                      {phase.week}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-white/80 text-lg">{phase.desc}</p>
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
                Get the complete protocol and start your 90-day journey to strength, energy, and confidence.
              </p>
              <button className="bg-[#C4A84A] text-[#212121] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#B39840] transition-colors">
                GET THE COMPLETE PROTOCOL
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}