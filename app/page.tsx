"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Flame, Zap, Target, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return visibleElements;
}

function MasculineEffects() {
  const [effects, setEffects] = useState<Array<{id: number, left: number, top: number, delay: number, duration: number, opacity: number, type: string, size: string}>>([]);

  useEffect(() => {
    const generateEffects = () => {
      const newEffects = [];
      
      // Sweat drops
      for (let i = 0; i < 30; i++) {
        newEffects.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 4,
          duration: 3 + Math.random() * 2,
          opacity: 0.4 + Math.random() * 0.4,
          type: 'sweat',
          size: 'w-1 h-2'
        });
      }
      
      // Energy pulses
      for (let i = 0; i < 15; i++) {
        newEffects.push({
          id: 30 + i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 1.5 + Math.random() * 1,
          opacity: 0.3 + Math.random() * 0.5,
          type: 'energy',
          size: 'w-3 h-3'
        });
      }
      
      // Muscle fibers
      for (let i = 0; i < 20; i++) {
        newEffects.push({
          id: 45 + i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 1,
          opacity: 0.2 + Math.random() * 0.6,
          type: 'muscle',
          size: 'w-8 h-1'
        });
      }
      
      setEffects(newEffects);
    };

    generateEffects();
  }, []);

  if (effects.length === 0) return null;

  return (
    <>
      {effects.map((effect) => (
        <div
          key={effect.id}
          className={`absolute ${effect.size} animate-${effect.type === 'sweat' ? 'sweat-drop' : effect.type === 'energy' ? 'energy-pulse' : 'muscle-fiber'}`}
          style={{
            left: `${effect.left}%`,
            top: `${effect.top}%`,
            animationDelay: `${effect.delay}s`,
            animationDuration: `${effect.duration}s`,
            opacity: effect.opacity,
            backgroundColor: effect.type === 'sweat' ? '#E74C3C' : effect.type === 'energy' ? '#C4A84A' : '#FFFFFF',
            borderRadius: effect.type === 'muscle' ? '2px' : '50%',
          }}
        />
      ))}
    </>
  );
}

export default function Home() {
  const visibleElements = useScrollAnimation();

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(220,38,38,0.4) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(245,158,11,0.4) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(220,38,38,0.3) 0%, transparent 50%)
                `,
              }}></div>
            </div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Side - Content */}
              <div className="text-left">
                <div className="mb-8">
                  <span className="inline-block bg-gradient-to-r from-primary-red/30 to-primary-red/10 text-primary-red px-6 py-3 rounded-full text-sm font-body-bold border border-primary-red/50 backdrop-blur-sm shadow-lg shadow-primary-red/20">
                ⚠️ LOW TESTOSTERONE IS KILLING YOUR POTENTIAL
              </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display text-white mb-8 leading-tight">
              ESCAPE THE<br />
                  <span className="text-primary-red relative inline-block">
                WEAKNESS
                    <span className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-r from-primary-gold to-primary-red rounded-full shadow-lg shadow-primary-gold/30" />
              </span>
                </h1>
                
                <div className="space-y-6 mb-8">
                  <p className="text-2xl text-white/90 leading-relaxed">
              You're tired. Brain fog. No drive. Stuck in a loop of junk food, screens, and zero energy.
                  </p>
                  
                  <p className="text-2xl text-primary-gold font-body-bold bg-gradient-to-r from-primary-gold/20 to-transparent p-4 rounded-lg border border-primary-gold/30">
                    This ends now.
                  </p>
                  
                  <p className="text-xl text-white/80 leading-relaxed">
              90-day protocol to reclaim your testosterone, build real muscle, and take back control of your life.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/free-audit"
                    className="bg-gradient-to-r from-primary-red to-red-700 text-white px-10 py-5 rounded-lg font-body-bold text-xl hover:from-red-600 hover:to-red-800 transition-all duration-300 hover:scale-105 text-center shadow-2xl shadow-primary-red/30 hover:shadow-primary-red/50"
                  >
                    GET YOUR FREE AUDIT
              </Link>
              <Link 
                href="/protocol"
                    className="bg-gradient-to-r from-transparent to-transparent border-2 border-primary-gold text-primary-gold px-10 py-5 rounded-lg font-body-bold text-xl hover:bg-primary-gold hover:text-black transition-all duration-300 hover:scale-105 text-center shadow-lg shadow-primary-gold/20 hover:shadow-primary-gold/40"
              >
                SEE THE PROTOCOL
              </Link>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                {/* Before/After List */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
                  <h3 className="text-3xl font-body-bold text-white mb-8 text-center">
                    REAL TRANSFORMATION
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Before */}
                    <div className="bg-red-600/20 p-6 rounded-xl border border-red-500/30">
                      <h4 className="text-xl font-bold text-red-300 mb-4">BEFORE</h4>
                      <ul className="space-y-2 text-white/90">
                        <li>• Low energy, brain fog</li>
                        <li>• 420 ng/dL testosterone</li>
                        <li>• Weak, no muscle definition</li>
                        <li>• Stuck in bad habits</li>
                      </ul>
                    </div>
                    
                    {/* After */}
                    <div className="bg-primary-gold/20 p-6 rounded-xl border border-primary-gold/30">
                      <h4 className="text-xl font-bold text-primary-gold mb-4">AFTER 90 DAYS</h4>
                      <ul className="space-y-2 text-white/90">
                        <li>• High energy, sharp focus</li>
                        <li>• 1,150 ng/dL testosterone</li>
                        <li>• Strong, defined muscles</li>
                        <li>• Complete lifestyle change</li>
                      </ul>
                    </div>
                  </div>
          </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                    <div className="text-4xl font-bold text-primary-gold mb-2">90</div>
                    <div className="text-sm text-white/80 font-bold">Days</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                    <div className="text-4xl font-bold text-primary-gold mb-2">200+</div>
                    <div className="text-sm text-white/80 font-bold">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <h2 
              id="problem-title"
              className={`text-4xl md:text-5xl font-heading text-white mb-12 text-center scroll-fade-in ${visibleElements.has('problem-title') ? 'visible' : ''}`}
            >
              The <span className="text-primary-red">Real Problem</span>
              </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "You're Poisoned",
                  content: "Soy in everything. Plastics leaching into your food. Seed oils destroying your hormones. Your testosterone is in the gutter and you don't even know it.",
                },
                {
                  title: "No Energy, No Drive",
                  content: "Wake up tired. Brain fog all day. Can't focus. No motivation. You're just going through the motions. This isn't living.",
                },
                {
                  title: "Weak & Soft",
                  content: "Carrying extra fat. No muscle definition. Weak in the gym (if you even go). You know you're capable of more but can't break through.",
                },
                {
                  title: "Life Without Purpose",
                  content: "Work, home, screens, repeat. No goals. No excitement. Deep down you know you don't want to end up like this.",
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  id={`problem-card-${index}`}
                  className={`bg-[#212121] p-8 rounded-lg border border-white/10 hover:border-primary-red/50 transition-all duration-300 cursor-pointer hover-lift hover-glow scroll-fade-in ${visibleElements.has(`problem-card-${index}`) ? 'visible' : ''}`}
                >
                  <h3 className="text-2xl font-body-bold text-primary-red mb-4 hover:text-primary-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {item.content}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-6xl">
            <h2 
              id="solution-title"
              className={`text-4xl md:text-5xl font-heading text-white mb-6 text-center scroll-fade-in ${visibleElements.has('solution-title') ? 'visible' : ''}`}
            >
              The <span className="text-primary-gold">90-Day Solution</span>
              </h2>

            <p 
              id="solution-description"
              className={`text-xl text-white/70 mb-12 text-center max-w-3xl mx-auto scroll-fade-in ${visibleElements.has('solution-description') ? 'visible' : ''}`}
            >
                I went from 108kg of pure weakness to 70kg shredded, then built back to 78kg of solid muscle. 
                Benching 100kg for reps. Testosterone optimized. Energy through the roof.
              </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Flame, title: "Training", desc: "Build real strength & muscle" },
                { icon: Target, title: "Nutrition", desc: "Fuel your hormones right" },
                { icon: Zap, title: "Hormones", desc: "Optimize testosterone naturally" },
                { icon: TrendingUp, title: "Recovery", desc: "Sleep & stress management" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  id={`solution-icon-${index}`}
                  className={`text-center group cursor-pointer scroll-fade-in ${visibleElements.has(`solution-icon-${index}`) ? 'visible' : ''}`}
                >
                  <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-gold transition-all duration-300 hover-scale">
                      <item.icon className="text-white" size={32} />
                  </div>
                    <h3 className="text-xl font-body-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
            
              <div className="text-center">
                <Link 
                  href="/protocol"
                  className="inline-block bg-primary-gold text-[#212121] px-8 py-4 rounded-md font-body-bold text-lg hover:bg-[#B39840] transition-colors duration-200"
                >
                  LEARN THE FULL PROTOCOL
                </Link>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
          <div className="container mx-auto max-w-4xl">
            <div 
              id="cta-box"
              className={`relative bg-gradient-to-r from-primary-red to-[#C0392B] p-8 rounded-lg text-center hover-lift scroll-fade-in ${visibleElements.has('cta-box') ? 'visible' : ''}`}
            >
              <div className="relative z-10">
                <div className="mb-4 animate-pulse-custom">
                  <span className="inline-block bg-black/30 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    ⚡ 3/5 AUDITS LEFT THIS WEEK
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Escape The Weakness?
                </h3>
                
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Get a free 15-minute audit. I'll identify your 3 biggest weaknesses and give you 3 actions to start your transformation.
                </p>
                
                  <Link
                    href="/free-audit"
                    className="inline-block bg-primary-gold text-[#212121] px-8 py-4 rounded-md font-body-bold text-lg hover:bg-[#B39840] transition-all duration-300 hover-scale hover-glow"
                  >
                  CLAIM YOUR FREE AUDIT NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#212121] to-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <h2 
              id="testimonials-title"
              className={`text-4xl md:text-5xl font-heading text-white mb-12 text-center scroll-fade-in ${visibleElements.has('testimonials-title') ? 'visible' : ''}`}
            >
              Real <span className="text-primary-red">Transformations</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marcus, 34",
                  before: "108kg, no energy",
                  after: "78kg, benching 100kg",
                  testimonial: "I went from couch potato to gym beast in 90 days. My testosterone levels doubled.",
                  rating: 5
                },
                {
                  name: "David, 28",
                  before: "Brain fog, depression",
                  after: "Sharp focus, confidence",
                  testimonial: "The nutrition protocol changed everything. I feel like a different person.",
                  rating: 5
                },
                {
                  name: "Alex, 41",
                  before: "Dad bod, low libido",
                  after: "Shredded, high energy",
                  testimonial: "At 41, I'm stronger than I was at 25. My wife can't keep up with me.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  id={`testimonial-${index}`}
                  className={`bg-[#212121] p-8 rounded-lg border border-white/10 hover:border-primary-red/50 transition-all duration-300 cursor-pointer hover-lift scroll-fade-in ${visibleElements.has(`testimonial-${index}`) ? 'visible' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary-gold text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-body-bold text-white mb-2">{testimonial.name}</h4>
                    <div className="text-sm text-white/60">
                      <span className="text-primary-red">{testimonial.before}</span>
                      <span className="mx-2">→</span>
                      <span className="text-primary-gold">{testimonial.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-6xl">
            <h2 
              id="results-title"
              className={`text-4xl md:text-5xl font-heading text-white mb-12 text-center scroll-fade-in ${visibleElements.has('results-title') ? 'visible' : ''}`}
            >
              What You'll <span className="text-primary-gold">Achieve</span>
              </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "-15kg", label: "Average fat loss in 90 days" },
                { value: "+40%", label: "Strength increase" },
                { value: "100%", label: "Energy & focus restored" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  id={`result-item-${index}`}
                  className={`text-center group cursor-pointer scroll-fade-in ${visibleElements.has(`result-item-${index}`) ? 'visible' : ''}`}
                >
                  <div className="text-5xl font-bold text-primary-gold mb-2 group-hover:text-primary-red transition-all duration-300 hover-scale">
                      {item.value}
                  </div>
                    <p className="text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#212121] border-t border-white/10">
          <div className="container mx-auto text-center">
            <p className="text-white/60">© 2025 Escape The Weakness. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
