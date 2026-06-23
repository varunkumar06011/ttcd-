import { Link } from 'react-router-dom';
import { siteMeta, footer, logo } from '../data/siteContent';
import { PhoneIcon, EmailIcon, MapPinIcon, FacebookIcon, TwitterIcon, WhatsAppIcon } from './Icons';

const iconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsAppIcon,
};

export default function Footer() {
  return (
    <footer className="bg-ttcda-charcoal text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="block text-lg font-extrabold leading-tight">{siteMeta.shortName}</span>
                <span className="block text-xs text-ttcda-gold-light font-medium uppercase tracking-wide">
                  {siteMeta.affiliation}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {siteMeta.fullName} represents pharmacy professionals across Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-ttcda-gold-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-ttcda-gold-light mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-ttcda-gold flex-shrink-0 mt-0.5" />
                <span>{footer.contactSummary.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-ttcda-gold flex-shrink-0" />
                <span>{footer.contactSummary.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="w-5 h-5 text-ttcda-gold flex-shrink-0" />
                <a href={`mailto:${footer.contactSummary.email}`} className="hover:text-white hover:underline">
                  {footer.contactSummary.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-bold text-ttcda-gold-light mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              {footer.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:text-left">
          <p className="text-sm text-gray-300">{footer.copyright}</p>
          <p className="text-xs text-gray-400 mt-1">{footer.bottomText}</p>
        </div>
      </div>
    </footer>
  );
}
