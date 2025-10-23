"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
              Terms of <span className="text-primary-red">Service</span>
            </h1>
            <p className="text-white/70 text-lg">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-white/80">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using Escape The Weakness services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
                  <p className="mb-4">
                    Escape The Weakness provides fitness coaching, nutrition guidance, and lifestyle 
                    transformation services through various programs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>ETW Core (60-day program)</li>
                    <li>ETW Advanced (90-day program)</li>
                    <li>ETW Elite (90-day program)</li>
                    <li>Free consultation services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                  <p className="mb-4">As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Follow all program guidelines and instructions</li>
                    <li>Consult with healthcare providers before starting any fitness program</li>
                    <li>Use services only for personal, non-commercial purposes</li>
                    <li>Not share account credentials with others</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                  <p className="mb-4">
                    Payment options are flexible to accommodate your needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Option 1:</strong> 50% upfront, 50% at day 30</li>
                    <li><strong>Option 2:</strong> 50% upfront, 25% at day 30, 25% at day 60 (only for 90 days protocol)</li>
                  </ul>
                  <p className="mb-4">
                    All payments are processed securely through third-party providers. 
                    We accept major credit cards and other secure payment methods.
                  </p>
                  <p className="text-primary-gold">
                    <strong>Refund Policy:</strong> If you don't see results after 30 days of following 
                    the program, you may request a refund.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Health Disclaimer</h2>
                  <p className="mb-4">
                    <strong>IMPORTANT:</strong> Our services are not intended to diagnose, treat, cure, 
                    or prevent any disease or medical condition.
                  </p>
                  <p className="mb-4">
                    Before starting any fitness or nutrition program, consult with your healthcare provider, 
                    especially if you have any medical conditions or concerns.
                  </p>
                  <p>
                    Results may vary based on individual commitment, genetics, and adherence to the program.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <p>
                    Escape The Weakness shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages resulting from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                  <p>
                    All content, including but not limited to text, graphics, logos, and program materials, 
                    is the property of Escape The Weakness and is protected by copyright laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> contact@hugobaechler.com<br />
                    <strong>Response time:</strong> Within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="container mx-auto max-w-4xl text-center">
            <Link
              href="/"
              className="inline-block bg-primary-gold text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
