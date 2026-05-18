import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import InquiryForm from '../../components/ui/InquiryForm'
import CTARow from '../../components/ui/CTARow'

const WHATSAPP = 'https://wa.me/919999999999?text=Hello%20Pruthvi%20Education%2C%20I%20am%20interested%20in%20MBBS%20Abroad.'

const contactInfo = [
  { icon: Phone,          label: 'Phone',        value: '+91 99999 99999',           href: 'tel:+919999999999' },
  { icon: MessageCircle,  label: 'WhatsApp',     value: 'Chat with us instantly',    href: WHATSAPP },
  { icon: Mail,           label: 'Email',        value: 'info@pruthvieducation.com', href: 'mailto:info@pruthvieducation.com' },
  { icon: MapPin,         label: 'Address',      value: 'Office address — to be updated', href: '#' },
  { icon: Clock,          label: 'Office Hours', value: 'Mon–Sat: 9am – 7pm IST',   href: '#' },
]

export default function Contact() {
  return (
    <main className="pt-16">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Contact Us"
            subtitle="We're just one message away. Talk to our expert counselors today — for free."
          />
        </div>
      </section>

      {/* ── Main contact section ─────────────────────── */}
      <section className="bg-section-dark py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: contact info + CTA */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Get in <span className="gold-text">Touch</span>
              </h3>

              {/* Contact details */}
              <div className="space-y-4 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 glass rounded-xl px-5 py-4 hover:glow-border-gold transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <Icon size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{label}</p>
                      <p className="text-white font-medium text-sm">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3 mb-10">
                <a href="#" className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-white/60 hover:text-brand-gold transition-colors text-sm font-medium">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-white/60 hover:text-brand-gold transition-colors text-sm font-medium">
                  <Youtube size={16} /> YouTube
                </a>
              </div>

              <CTARow size="lg" />
            </div>

            {/* Right: inquiry form */}
            <InquiryForm variant="dark" title="Send Us a Message" />
          </div>
        </div>
      </section>

      {/* ── Google Map placeholder ───────────────────── */}
      <section className="bg-section-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center mb-6">
            Find Our Office
          </p>
          <div className="glass rounded-3xl overflow-hidden h-72 md:h-96 flex items-center justify-center">
            {/* Replace the div below with an actual Google Maps iframe embed */}
            <div className="text-center text-white/20">
              <MapPin size={36} className="mx-auto mb-3" />
              <p className="text-sm">Google Maps embed will appear here.</p>
              <p className="text-xs mt-1">Replace with: &lt;iframe src="your-google-maps-embed-url" /&gt;</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
