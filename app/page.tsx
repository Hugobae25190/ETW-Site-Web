"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

function FireEffects() {
  const [effects, setEffects] = useState<Array<{id: number, left: number, top: number, delay: number, duration: number, opacity: number, type: string, size: string, zIndex: number, color: string, startProgress: number}>>([]);

  useEffect(() => {
    const generateEffects = () => {
      const newEffects = [];
      
      // Ultra fast tiny embers - scattered everywhere
      for (let i = 0; i < 30; i++) {
        newEffects.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100, // Scattered everywhere
          delay: Math.random() * 0.5, // Very quick start
          duration: 1 + Math.random() * 0.5, // Ultra fast: 1-1.5s
          opacity: 0.8 + Math.random() * 0.2,
          type: 'ember-ultra-fast',
          size: 'w-0.5 h-0.5', // Tiny
          zIndex: Math.random() > 0.85 ? 20 : 10,
          color: '#DC2626', // Bright red
          startProgress: Math.random() * 100 // Random start in animation
        });
      }
      
      // Fast small embers - mostly bottom but some scattered
      for (let i = 0; i < 25; i++) {
        newEffects.push({
          id: 30 + i,
          left: Math.random() * 100,
          top: 60 + Math.random() * 40, // More scattered
          delay: Math.random() * 1,
          duration: 1.5 + Math.random() * 1, // Fast: 1.5-2.5s
          opacity: 0.7 + Math.random() * 0.3,
          type: 'ember-fast',
          size: 'w-0.5 h-0.5', // Very small
          zIndex: Math.random() > 0.8 ? 20 : 10,
          color: '#DC2626', // Red
          startProgress: Math.random() * 100
        });
      }
      
      // Medium speed embers - various positions
      for (let i = 0; i < 20; i++) {
        newEffects.push({
          id: 55 + i,
          left: Math.random() * 100,
          top: 40 + Math.random() * 60, // Scattered middle to top
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2, // Medium: 3-5s
          opacity: 0.6 + Math.random() * 0.4,
          type: 'ember-medium',
          size: 'w-1 h-1', // Small
          zIndex: Math.random() > 0.7 ? 20 : 10,
          color: '#DC2626', // Red
          startProgress: Math.random() * 100
        });
      }
      
      // Slow large embers - mostly top
      for (let i = 0; i < 15; i++) {
        newEffects.push({
          id: 75 + i,
          left: Math.random() * 100,
          top: 20 + Math.random() * 80, // Scattered everywhere
          delay: Math.random() * 3,
          duration: 5 + Math.random() * 3, // Slow: 5-8s
          opacity: 0.4 + Math.random() * 0.4,
          type: 'ember-slow',
          size: 'w-1.5 h-1.5', // Larger
          zIndex: Math.random() > 0.9 ? 20 : 10,
          color: Math.random() > 0.7 ? '#F59E0B' : '#DC2626', // Some orange
          startProgress: Math.random() * 100
        });
      }
      
      // Very slow, almost yellow embers - top only
      for (let i = 0; i < 10; i++) {
        newEffects.push({
          id: 90 + i,
          left: Math.random() * 100,
          top: Math.random() * 50, // Top half only
          delay: Math.random() * 4,
          duration: 8 + Math.random() * 4, // Very slow: 8-12s
          opacity: 0.3 + Math.random() * 0.3,
          type: 'ember-very-slow',
          size: 'w-2 h-2', // Largest
          zIndex: Math.random() > 0.95 ? 20 : 10,
          color: '#FCD34D', // Yellow
          startProgress: Math.random() * 100
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
          className={`absolute ${effect.size} ${
            effect.type === 'ember-ultra-fast' ? 'animate-fire-ember-ultra-fast' :
            effect.type === 'ember-fast' ? 'animate-fire-ember-fast' :
            effect.type === 'ember-slow' ? 'animate-fire-ember-slow' :
            effect.type === 'ember-very-slow' ? 'animate-fire-ember-very-slow' :
            'animate-fire-ember'
          }`}
          style={{
            left: `${effect.left}%`,
            top: `${effect.top}%`,
            animationDelay: `${effect.delay}s`,
            animationDuration: `${effect.duration}s`,
            opacity: effect.opacity,
            zIndex: effect.zIndex,
            backgroundColor: effect.color,
            borderRadius: '50%',
            boxShadow: '0 0 6px currentColor',
            // Start animation from random position
            animationFillMode: 'both',
            animationIterationCount: 'infinite',
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
        {/* Modern Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Clean Background */}
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
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block bg-primary-red/20 text-primary-red px-4 py-2 rounded-full text-sm font-semibold border border-primary-red/30">
                  LOW TESTOSTERONE IS KILLING YOUR POTENTIAL
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                ESCAPE THE<br />
                <span className="text-primary-red relative">
                  WEAKNESS
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                You're tired. Brain fog. No drive. Stuck in a loop of junk food, screens, and zero energy.
                <br />
                <span className="text-primary-gold font-semibold">This ends now.</span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-gold mb-2">90</div>
                  <div className="text-sm text-white/70 font-semibold">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-gold mb-2">30+</div>
                  <div className="text-sm text-white/70 font-semibold">CLIENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-gold mb-2">100%</div>
                  <div className="text-sm text-white/70 font-semibold">NATURAL</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fire Effects */}
          <FireEffects />
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">30+</div>
                <div className="text-sm text-white/70 font-semibold">CLIENTS TRANSFORMED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-red mb-2">+100%</div>
                <div className="text-sm text-white/70 font-semibold">TESTOSTERONE BOOST</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">60-90</div>
                <div className="text-sm text-white/70 font-semibold">DAY PROTOCOL</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">100%</div>
                <div className="text-sm text-white/70 font-semibold">NATURAL METHODS</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem - Dark Background */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                The <span className="text-primary-red">Real Problem</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                You're not weak. You're poisoned. Here's what's really happening to your body.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "You're Poisoned",
                  content: "Soy in everything. Plastics leaching into your food. Seed oils destroying your hormones.",
                  stat: "420 ng/dL",
                  statLabel: "Average testosterone"
                },
                {
                  title: "No Energy",
                  content: "Wake up tired. Brain fog all day. Can't focus. No motivation.",
                  stat: "3-4 hours",
                  statLabel: "Productive time"
                },
                {
                  title: "Weak & Soft",
                  content: "Carrying extra fat. No muscle definition. Weak in the gym.",
                  stat: "15-20kg",
                  statLabel: "Excess weight"
                },
                {
                  title: "No Purpose",
                  content: "Work, home, screens, repeat. No goals. No excitement.",
                  stat: "0%",
                  statLabel: "Life satisfaction"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-red/30 transition-all duration-300 hover-lift"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary-red mb-2">{item.stat}</div>
                    <div className="text-sm text-gray-400 font-semibold">{item.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution - Modern Design */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                The <span className="text-primary-gold">90-Day Solution</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Optimise your lifestyle to lose fat, build muscle and rise your Testosterone 100% naturally and science-backed.
              </p>
              <div className="inline-block bg-primary-gold/20 text-primary-gold px-6 py-3 rounded-lg font-semibold">
                Lost 35kg of fat. Testosterone optimized. Energy through the roof.
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Process */}
              <div className="space-y-8">
                {[
                  { step: "01", title: "Assessment", desc: "Identify your 3 biggest weaknesses and current state" },
                  { step: "02", title: "Protocol", desc: "90-day plan tailored to your specific situation" },
                  { step: "03", title: "Execution", desc: "Daily actions to reclaim your testosterone and energy" },
                  { step: "04", title: "Transformation", desc: "Real results in strength, energy, and confidence" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right - Results */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Real Results</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-white/80">Testosterone</span>
                    <div className="text-right">
                      <div className="text-primary-red font-bold">420 ng/dL</div>
                      <div className="text-primary-gold font-bold">1,150 ng/dL</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-white/80">Body Weight</span>
                    <div className="text-right">
                      <div className="text-primary-red font-bold">108kg</div>
                      <div className="text-primary-gold font-bold">78kg</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-white/80">Bench Press</span>
                    <div className="text-right">
                      <div className="text-primary-red font-bold">60kg</div>
                      <div className="text-primary-gold font-bold">140kg+</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-white/80">Energy Level</span>
                    <div className="text-right">
                      <div className="text-primary-red font-bold">2/10</div>
                      <div className="text-primary-gold font-bold">9/10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link 
                href="/protocol"
                className="inline-block bg-primary-gold text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                LEARN THE FULL PROTOCOL
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA - Modern Design */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              {/* Urgency */}
              <div className="mb-8">
                <span className="inline-block bg-primary-red/20 text-primary-red px-6 py-3 rounded-full text-lg font-bold border border-primary-red/30">
                  3/5 AUDITS LEFT THIS WEEK
                </span>
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Ready to Escape The Weakness?
              </h2>
              
              {/* Subheadline */}
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                Get a free 15-minute audit. I'll identify your 3 biggest weaknesses and give you 3 actions to start your transformation today.
              </p>
              
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-primary-red/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-red text-4xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Personalized Analysis</h3>
                  <p className="text-white/70 text-sm">Custom assessment of your current state</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-red/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-red text-4xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Immediate Actions</h3>
                  <p className="text-white/70 text-sm">3 specific steps you can take today</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-red/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-red text-4xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">No BS Approach</h3>
                  <p className="text-white/70 text-sm">Direct, actionable advice only</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="space-y-4">
                <Link
                  href="/free-audit"
                  className="inline-block bg-primary-gold text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors duration-200"
                >
                  CLAIM YOUR FREE AUDIT NOW
                </Link>
                
                <p className="text-white/60 text-sm">
                  No bullshit • No credit card required • 100% confidential
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Dark Background */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Real <span className="text-primary-red">Transformations</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Don't take my word for it. Here's what real men achieved in just 90 days.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marcus, 34",
                  role: "Software Engineer",
                  before: "108kg, no energy",
                  after: "78kg, benching 140kg",
                  testimonial: "I went from couch potato to gym beast in 90 days. My testosterone levels skyrocketed. My wife can't believe the transformation.",
                  rating: 5,
                  results: ["-30kg fat", "+40% strength", "2x testosterone"]
                },
                {
                  name: "David, 28",
                  role: "Marketing Manager",
                  before: "Brain fog, depression",
                  after: "Sharp focus, confidence",
                  testimonial: "The nutrition protocol changed everything. I feel like a different person. My confidence is through the roof.",
                  rating: 5,
                  results: ["Clear mind", "High energy", "Confident"]
                },
                {
                  name: "Alex, 41",
                  role: "Business Owner",
                  before: "Dad bod, low libido",
                  after: "Shredded, high energy",
                  testimonial: "At 41, I'm stronger than I was at 25. My wife can't keep up with me. This protocol saved my marriage.",
                  rating: 5,
                  results: ["-20kg", "Stronger than 25", "High libido"]
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary-red/30 transition-all duration-300 hover-lift"
                >
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary-gold text-xl">★</span>
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <p className="text-white/80 mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  
                  {/* Results */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, i) => (
                        <span key={i} className="bg-primary-red/20 text-primary-red px-3 py-1 rounded-full text-sm font-semibold">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Author */}
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-bold text-white text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400 mb-3">{testimonial.role}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-red font-semibold">{testimonial.before}</span>
                      <span className="text-gray-500 mx-2">→</span>
                      <span className="text-primary-gold font-semibold">{testimonial.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
