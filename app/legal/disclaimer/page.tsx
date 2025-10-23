"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
              Medical <span className="text-primary-red">Disclaimer</span>
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
                <div className="bg-primary-red/20 border border-primary-red/30 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-primary-red mb-4">⚠️ IMPORTANT MEDICAL DISCLAIMER</h2>
                  <p className="text-white font-semibold">
                    Our fitness and nutrition programs are NOT medical advice and should NOT replace 
                    professional medical consultation, diagnosis, or treatment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Not Medical Advice</h2>
                  <p className="mb-4">
                    The information provided by Escape The Weakness is for educational and informational 
                    purposes only. It is not intended as medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    Always seek the advice of your physician or other qualified health provider with any 
                    questions you may have regarding a medical condition.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Individual Results May Vary</h2>
                  <p className="mb-4">
                    Results shown in testimonials and case studies are not typical and may not be 
                    representative of the results you may achieve.
                  </p>
                  <p>
                    Individual results depend on factors including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Individual genetics and metabolism</li>
                    <li>Adherence to the program</li>
                    <li>Starting fitness level</li>
                    <li>Age and health status</li>
                    <li>Lifestyle factors</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Pre-Existing Conditions</h2>
                  <p className="mb-4">
                    If you have any pre-existing medical conditions, injuries, or are taking medication, 
                    you MUST consult with your healthcare provider before starting any fitness or nutrition program.
                  </p>
                  <p>
                    This includes but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Heart conditions</li>
                    <li>Diabetes</li>
                    <li>High blood pressure</li>
                    <li>Joint problems</li>
                    <li>Eating disorders</li>
                    <li>Any chronic medical condition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Exercise and Nutrition Risks</h2>
                  <p className="mb-4">
                    Physical exercise and dietary changes carry inherent risks. You should:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Start slowly and progress gradually</li>
                    <li>Listen to your body and stop if you experience pain</li>
                    <li>Ensure proper form and technique</li>
                    <li>Stay hydrated during exercise</li>
                    <li>Monitor your body's response to dietary changes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Emergency Situations</h2>
                  <p>
                    If you experience any of the following symptoms during exercise, STOP immediately 
                    and seek medical attention:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Chest pain or pressure</li>
                    <li>Shortness of breath</li>
                    <li>Dizziness or fainting</li>
                    <li>Severe muscle pain</li>
                    <li>Nausea or vomiting</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <p>
                    Escape The Weakness, its coaches, and affiliates are not responsible for any 
                    injuries, health problems, or adverse effects that may result from following 
                    our programs or advice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
                  <p>
                    For medical questions or concerns, please contact your healthcare provider. 
                    For program-related questions, contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> contact@hugobaechler.com<br />
                    <strong>Response time:</strong> Within 24 hours
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
