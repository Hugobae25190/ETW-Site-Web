"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
              Cookie <span className="text-primary-red">Policy</span>
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    analyzing how you use our site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                      <p className="mb-2">
                        These cookies are necessary for the website to function properly. They enable basic 
                        functions like page navigation and access to secure areas of the website.
                      </p>
                      <p className="text-sm text-white/60">
                        <strong>Duration:</strong> Session cookies (deleted when you close your browser)
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                      <p className="mb-2">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                      <p className="text-sm text-white/60">
                        <strong>Duration:</strong> Up to 2 years
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                      <p className="mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering 
                        your preferences and settings.
                      </p>
                      <p className="text-sm text-white/60">
                        <strong>Duration:</strong> Up to 1 year
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
                  <p className="mb-4">
                    We may use third-party services that set their own cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing</li>
                    <li><strong>Social Media:</strong> For social media integration and sharing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                  <p className="mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use your browser settings to block or delete cookies</li>
                    <li>Set your browser to notify you when cookies are being set</li>
                    <li>Use browser extensions to manage cookie preferences</li>
                    <li>Opt out of specific third-party cookies through their websites</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Browser Settings</h2>
                  <p className="mb-4">
                    Most web browsers allow you to control cookies through their settings. Here are links 
                    to cookie management for popular browsers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-gold hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary-gold hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-gold hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary-gold hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Impact of Disabling Cookies</h2>
                  <p>
                    If you disable cookies, some features of our website may not function properly. 
                    This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Inability to save your preferences</li>
                    <li>Reduced website performance</li>
                    <li>Limited access to certain features</li>
                    <li>Need to re-enter information repeatedly</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time. We will notify you of any changes 
                    by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
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
