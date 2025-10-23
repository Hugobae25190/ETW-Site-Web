import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo-scorpion.webp"
                alt="Escape The Weakness"
                className="h-12 w-auto mr-4"
              />
              <span className="text-white font-bold text-xl">Escape The Weakness</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Transform your body, energy, and confidence with our proven 60-90 day protocol. 
              Natural methods, real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                YouTube
              </a>
              <a href="#" className="text-white/60 hover:text-primary-gold transition-colors">
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/protocol" className="text-white/70 hover:text-primary-gold transition-colors">The Protocol</Link></li>
              <li><Link href="/pricing" className="text-white/70 hover:text-primary-gold transition-colors">Pricing</Link></li>
              <li><Link href="/why-choose-me" className="text-white/70 hover:text-primary-gold transition-colors">Why Choose Me</Link></li>
              <li><Link href="/free-audit" className="text-white/70 hover:text-primary-gold transition-colors">Free Audit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contact@hugobaechler.com" className="text-white/70 hover:text-primary-gold transition-colors">contact@hugobaechler.com</a></li>
              <li><span className="text-white/70">Available 24/7</span></li>
              <li><span className="text-white/70">Response within 24h</span></li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Escape The Weakness. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/legal/privacy-policy" className="text-white/60 hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="text-white/60 hover:text-primary-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/disclaimer" className="text-white/60 hover:text-primary-gold transition-colors">
                Disclaimer
              </Link>
              <Link href="/legal/cookies" className="text-white/60 hover:text-primary-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
