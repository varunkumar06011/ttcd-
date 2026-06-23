import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, EmailIcon } from '../components/Icons';
import { siteMeta, contact } from '../data/siteContent';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — {siteMeta.shortName}</title>
        <meta name="description" content={`Contact the office of ${siteMeta.fullName}.`} />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={contact.heading}
            subtitle={contact.subheading}
            centered
          />
        </div>
      </div>

      <section className="py-14 md:py-20" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2 id="contact-heading" className="section-heading mb-8">Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-ttcda-gold/10 flex items-center justify-center text-ttcda-gold">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ttcda-charcoal">{contact.address.label}</h3>
                    <address className="not-italic text-ttcda-gray-body mt-1 space-y-0.5">
                      {contact.address.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-ttcda-gold/10 flex items-center justify-center text-ttcda-gold">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ttcda-charcoal">{contact.phone.label}</h3>
                    <div className="text-ttcda-gray-body mt-1 space-y-0.5">
                      {contact.phone.numbers.map((number, i) => (
                        <p key={i}>{number}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-ttcda-gold/10 flex items-center justify-center text-ttcda-gold">
                    <EmailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ttcda-charcoal">{contact.email.label}</h3>
                    <div className="text-ttcda-gray-body mt-1 space-y-0.5">
                      {contact.email.addresses.map((email, i) => (
                        <p key={i}>
                          <a href={`mailto:${email}`} className="hover:text-ttcda-maroon hover:underline">
                            {email}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-ttcda-maroon/5 rounded-md p-4 border border-ttcda-maroon/10">
                  <p className="text-sm font-semibold text-ttcda-maroon">
                    {contact.hours.label}: {contact.hours.value}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="section-heading mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-14 md:mt-20">
            <h2 className="section-heading mb-6">Office Location</h2>
            <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="TTCDA office location"
                src={contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
