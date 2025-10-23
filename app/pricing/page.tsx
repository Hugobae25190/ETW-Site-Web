"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const packages = [
    {
      name: "ETW Core",
      price: "4 900€",
      period: "60 days",
      description: "Complete plan with personalized support",
      features: [
        "60 days of coaching",
        "Complete personalized plan",
        "2 calls per week",
        "Message support 5/7",
        "Nutrition & training tracking",
        "Private community access"
      ],
      cta: "CHOOSE ETW CORE",
      ctaLink: "/etw-core",
      popular: false,
      color: "border-primary-gold"
    },
    {
      name: "ETW Advanced",
      price: "7 500€",
      period: "90 days",
      description: "Intensive coaching with weekly adaptations",
      features: [
        "90 days of coaching",
        "Daily check-ins",
        "Weekly training + nutrition adaptations",
        "24/7 support",
        "Unlimited calls (priority)",
        "Biofeedback tracking",
        "Private community access"
      ],
      cta: "CHOOSE ETW ADVANCED",
      ctaLink: "/etw-advanced",
      popular: true,
      color: "border-primary-red"
    },
    {
      name: "ETW Elite",
      price: "9 900€",
      period: "90 days",
      description: "Complete coaching with biofeedback tracking",
      features: [
        "90 days of coaching",
        "Complete coaching program",
        "Daily access + biofeedback tracking",
        "2h onboarding + maintenance roadmap",
        "24/7 absolute priority support",
        "Unlimited calls",
        "Extended monthly follow-up option (paid)"
      ],
      cta: "CHOOSE ETW ELITE",
      ctaLink: "/etw-elite",
      popular: false,
      color: "border-primary-gold"
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
                  CHOOSE YOUR TRANSFORMATION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                Choose Your <span className="text-primary-red relative">
                  Transformation
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-gold" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                From a free audit to complete 1-on-1 coaching. Pick the level of support that fits your goals and budget.
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
                <div className="text-4xl font-bold text-primary-gold mb-2">30+</div>
                <div className="text-sm text-white/70 font-semibold">CLIENTS TRANSFORMED</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-red mb-2">60-90</div>
                <div className="text-sm text-white/70 font-semibold">DAYS PROGRAM</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white/70 font-semibold">NATURAL METHODS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-gold mb-2">24/7</div>
                <div className="text-sm text-white/70 font-semibold">SUPPORT</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Choose Your <span className="text-primary-red">Package</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Three levels of support to match your commitment and goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative bg-gray-800 p-8 rounded-xl border-2 ${pkg.color} ${pkg.popular ? 'scale-105 shadow-2xl' : ''} hover:border-opacity-100 transition-all duration-300 hover-lift`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-red text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star size={16} />
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
                      {pkg.period && <span className="text-white/60 ml-2">/{pkg.period}</span>}
                    </div>
                    <p className="text-white/80">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="text-primary-gold flex-shrink-0" size={20} />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={pkg.ctaLink}
                    className={`block w-full text-center py-4 px-6 rounded-lg font-bold text-lg transition-colors ${
                      pkg.popular 
                        ? 'bg-primary-red text-white hover:bg-red-700' 
                        : 'bg-primary-gold text-black hover:bg-yellow-400'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Frequently Asked <span className="text-primary-gold">Questions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Everything you need to know before starting your transformation.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "What are the payment options?",
                  a: "We offer flexible payment plans: 50% upfront + 50% at day 30, or 50% upfront + 25% at day 30 + 25% at day 60. All payments are processed securely through third-party providers."
                },
                {
                  q: "What if I don't see results?",
                  a: "If you don't see results after 30 days of following the program, you may request a refund. We're confident in our methods, but we want you to be satisfied."
                },
                {
                  q: "Do I need a gym membership?",
                  a: "The protocol can be adapted for home workouts, but a gym with basic equipment (barbells, dumbbells) will give you the best results. I'll provide alternatives for every exercise."
                },
                {
                  q: "How much time does it take?",
                  a: "Training: 3 to 4 sessions per week, 45-60 minutes each. Nutrition prep: 2-3 hours per week. The rest is about making better choices throughout your day."
                },
                {
                  q: "Is this suitable for beginners?",
                  a: "Absolutely. The protocol starts with fundamentals and progresses systematically. I've worked with complete beginners who've achieved incredible transformations."
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
                  READY TO TRANSFORM?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Ready to Transform?
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                Start with a free audit and see what's possible for your transformation.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/free-audit"
                  className="inline-block bg-primary-gold text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors duration-200"
                >
                  CLAIM YOUR FREE AUDIT
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