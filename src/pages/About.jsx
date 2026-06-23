import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import CommitteeCard from '../components/CommitteeCard';
import { siteMeta, aboutPage, officeBearers, missionItems } from '../data/siteContent';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — {siteMeta.shortName}</title>
        <meta name="description" content={`Learn about ${siteMeta.fullName} and its mission. ${siteMeta.fullAffiliation}.`} />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={aboutPage.heading}
            subtitle={`${siteMeta.fullName} (${siteMeta.shortName}) — ${siteMeta.fullAffiliation}.`}
            centered
          />
        </div>
      </div>

      {/* History / Purpose */}
      <section className="py-14 md:py-20" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="history-heading" className="section-heading">{aboutPage.history.heading}</h2>
            <div className="mt-6 space-y-4 text-ttcda-gray-body leading-relaxed">
              {aboutPage.history.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-14 md:py-20 bg-ttcda-off-white" aria-labelledby="affiliation-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="affiliation-heading" className="section-heading">{aboutPage.affiliation.heading}</h2>
              <p className="mt-5 text-ttcda-gray-body leading-relaxed">{aboutPage.affiliation.paragraph}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ttcda-charcoal mb-2">AIOCD</h3>
              <p className="text-sm font-semibold text-ttcda-gold mb-3">National Federation</p>
              <p className="text-sm text-ttcda-gray-body">
                All India Organisation of Chemists & Druggists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="mission-heading" className="section-heading text-center">{aboutPage.mission.heading}</h2>
            <ul className="mt-8 space-y-4">
              {missionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-ttcda-gold" />
                  <span className="text-ttcda-gray-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Office Bearers */}
      <section id="office-bearers" className="py-14 md:py-20 bg-ttcda-off-white" aria-labelledby="committee-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Office Bearers & Committee"
            subtitle="Current executive committee of TTCDA."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeBearers.map((member) => (
              <CommitteeCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
