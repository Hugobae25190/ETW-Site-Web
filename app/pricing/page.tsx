"use client";

import Header from "@/components/Header";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const packages = [
    {
      name: "ETW Core",
      price: "4 900€",
      period: "90 jours",
      description: "Plan complet avec support personnalisé",
      features: [
        "90 jours de coaching",
        "Plan complet personnalisé",
        "2 calls/semaine",
        "Support par message 5/7",
        "Suivi nutrition & training",
        "Accès communauté privée"
      ],
      cta: "CHOISIR ETW CORE",
      ctaLink: "/etw-core",
      popular: false,
      color: "border-[#C4A84A]"
    },
    {
      name: "ETW Advanced",
      price: "7 500€",
      period: "90 jours",
      description: "Coaching intensif avec adaptations hebdomadaires",
      features: [
        "90 jours de coaching",
        "Daily check-ins",
        "Adaptations hebdo du training + nutrition",
        "Support 7/7",
        "Appels illimités (priorité)",
        "Suivi biofeedback",
        "Accès communauté privée"
      ],
      cta: "CHOISIR ETW ADVANCED",
      ctaLink: "/etw-advanced",
      popular: true,
      color: "border-[#E74C3C]"
    },
    {
      name: "ETW Elite",
      price: "9 900€",
      period: "90 jours",
      description: "Coaching complet avec biofeedback tracking",
      features: [
        "90 jours de coaching",
        "Coaching complet",
        "Daily access + biofeedback tracking",
        "2h onboarding + roadmap de maintenance",
        "Support 7/7 priorité absolue",
        "Appels illimités",
        "Option suivi mensuel prolongé (payant)"
      ],
      cta: "CHOISIR ETW ELITE",
      ctaLink: "/etw-elite",
      popular: false,
      color: "border-[#C4A84A]"
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
              Choose Your <span className="text-[#E74C3C]">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              From a free audit to complete 1-on-1 coaching. Pick the level of support that fits your goals and budget.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative bg-[#212121] p-8 rounded-lg border-2 ${pkg.color} ${pkg.popular ? 'scale-105' : ''} hover:border-opacity-100 transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#E74C3C] text-white px-4 py-2 rounded-full text-sm font-bold">
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
                        <Check className="text-[#C4A84A] flex-shrink-0" size={20} />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={pkg.ctaLink}
                    className={`block w-full text-center py-4 px-6 rounded-md font-bold text-lg transition-colors ${
                      pkg.popular 
                        ? 'bg-[#E74C3C] text-white hover:bg-[#C0392B]' 
                        : 'bg-[#C4A84A] text-[#212121] hover:bg-[#B39840]'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#212121]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Frequently Asked <span className="text-[#C4A84A]">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What if I don't see results?",
                  a: "The protocol is based on proven principles. If you follow it consistently for 90 days and don't see significant improvements in strength, energy, and body composition, I'll work with you to identify what's missing."
                },
                {
                  q: "Do I need a gym membership?",
                  a: "The protocol can be adapted for home workouts, but a gym with basic equipment (barbells, dumbbells) will give you the best results. I'll provide alternatives for every exercise."
                },
                {
                  q: "How much time does it take?",
                  a: "Training: 3 sessions per week, 45-60 minutes each. Nutrition prep: 2-3 hours per week. The rest is about making better choices throughout your day."
                },
                {
                  q: "Is this suitable for beginners?",
                  a: "Absolutely. The protocol starts with fundamentals and progresses systematically. I've worked with complete beginners who've achieved incredible transformations."
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-[#E74C3C] to-[#C0392B] p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Start with a free audit and see what's possible for your transformation.
              </p>
              <Link 
                href="/free-audit"
                className="inline-block bg-[#C4A84A] text-[#212121] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#B39840] transition-colors"
              >
                CLAIM YOUR FREE AUDIT
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}