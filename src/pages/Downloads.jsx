import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import DownloadItem from '../components/DownloadItem';
import { siteMeta, downloadsPage, downloads } from '../data/siteContent';

export default function Downloads() {
  return (
    <>
      <Helmet>
        <title>Downloads — {siteMeta.shortName}</title>
        <meta name="description" content={`Downloadable forms, checklists, and certificates from ${siteMeta.shortName}.`} />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={downloadsPage.heading}
            subtitle={downloadsPage.subheading}
            centered
          />
        </div>
      </div>

      <section className="py-14 md:py-20" aria-labelledby="downloads-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="downloads-heading" className="sr-only">Downloads list</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item) => (
              <DownloadItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
