import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin, Instagram, Youtube } from 'lucide-react'
import { navLinks } from '../../data/services'
import companyLogo from '../../assets/company logo.png'

const WHATSAPP = 'https://wa.me/919999999999?text=Hello%20Pruthvi%20Education%2C%20I%20am%20interested%20in%20MBBS%20Abroad.'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={companyLogo} alt="Pruthvi Education" className="h-12 w-auto" />
              <div>
                <p className="font-bold text-white text-base">PRUTHVI EDUCATION</p>
                <p className="text-brand-gold text-xs tracking-widest">MBBS ABROAD</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted guardians for MBBS Abroad. Not agents. Not consultants. Guardians.
            </p>
            <p className="italic text-brand-gold/80 text-sm font-medium">
              "Your dream is our responsibility."
            </p>
          </div>

          {/* Quick Links + Destinations — always side by side */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-brand-gold text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Destinations</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li>🇷🇺 MBBS in Russia</li>
                <li>🇬🇪 MBBS in Georgia</li>
                <li>🇰🇬 MBBS in Kyrgyzstan</li>
                <li>🇺🇿 MBBS in Uzbekistan</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919999999999" className="flex items-center gap-2 text-white/50 hover:text-brand-gold text-sm transition-colors">
                  <Phone size={14} /><span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-brand-gold text-sm transition-colors">
                  <MessageCircle size={14} /><span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@pruthvieducation.com" className="flex items-center gap-2 text-white/50 hover:text-brand-gold text-sm transition-colors">
                  <Mail size={14} /><span>info@pruthvieducation.com</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Office address — update here</span>
                </span>
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-gold/20 text-white/50 hover:text-brand-gold transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-gold/20 text-white/50 hover:text-brand-gold transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Pruthvi Education. All rights reserved.</p>
          <p>MBBS Abroad | NMC Approved Universities | FMGE / NExT Guidance</p>
        </div>
      </div>
    </footer>
  )
}
