"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
              Privacy <span className="text-primary-red">Policy</span>
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect minimal information you provide directly to us through our contact forms 
                    and consultation bookings.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Health and fitness information you choose to share in consultation forms</li>
                    <li>Communication preferences</li>
                  </ul>
                  <p className="mt-4 text-primary-gold">
                    <strong>Note:</strong> We do not collect payment information directly. 
                    All payments are processed securely through third-party providers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                  <p>
                    We may share your information with trusted third parties who assist us in operating our 
                    website and conducting our business, as long as they agree to keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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
