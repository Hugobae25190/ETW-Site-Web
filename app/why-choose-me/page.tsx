"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Target, Zap, Award, CheckCircle, Shield, Flame, Trophy, Users, Clock, Star } from "lucide-react";

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
                From <span className="text-primary-red relative">
                  Broken
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span> to <span className="text-primary-gold">Unstoppable</span>
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

        {/* The Real Story */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                The <span className="text-primary-red">Real Story</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                What most trainers won't tell you about transformation.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 mb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">The Truth About Transformation</h3>
                  <div className="space-y-4 text-lg text-white/80">
                    <p className="leading-relaxed">
                      <span className="text-primary-red font-bold">15 years of medication</span> that destroyed my liver, metabolism, and body. First gout attack at 14. Body completely broken.
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-primary-gold font-bold">I've tested everything:</span> OMAD, intermittent fasting, push/pull/legs, 3/7, 4/7, 7/7 training. Every protocol out there.
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-primary-gold font-bold">Now I'm rebuilding everything.</span> At 19, I'm still bulking and becoming massive. I'm living proof this method works.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-red mb-4">37kg</div>
                  <div className="text-2xl font-bold text-white mb-2">LOST</div>
                  <div className="text-white/70">From broken to unstoppable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Why This <span className="text-primary-gold">Works</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The brutal truth about what actually drives transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">I've Been Destroyed</h3>
                    <p className="text-white/80 leading-relaxed">15 years of medication that wrecked my liver, destroyed my metabolism, and left me broken. I know what it's like to be completely destroyed.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Flame className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">I've Rebuilt Everything</h3>
                    <p className="text-white/80 leading-relaxed">From broken to unstoppable. I've done the complete transformation. Every protocol I teach is something I've personally tested and refined.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">I've Tested Everything</h3>
                    <p className="text-white/80 leading-relaxed">OMAD, intermittent fasting, push/pull/legs, 3/7, 4/7, 7/7 training. I've tried every protocol out there. This method delivers results others can't match.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">I'm Still Growing</h3>
                    <p className="text-white/80 leading-relaxed">At 19, I'm still bulking and becoming massive. I'm not done yet. I'm living proof that this method works and keeps working.</p>
                  </div>
                </div>
              </div>
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
                  "If I can rebuild my body after 15 years of medication that destroyed it, you can rebuild yours too."
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