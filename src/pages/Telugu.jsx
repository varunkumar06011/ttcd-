import { Helmet } from 'react-helmet-async';
import { teluguPage } from '../data/siteContent';

export default function Telugu() {
  return (
    <>
      <Helmet>
        <title>{teluguPage.seo.title}</title>
        <meta name="description" content={teluguPage.seo.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>
            {teluguPage.title}
          </h1>
        </div>
      </div>

      <section className="py-10 md:py-16" aria-labelledby="telugu-letterhead">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="telugu-letterhead" className="sr-only">Letterhead</h2>
          <img
            src={teluguPage.letterheadImage}
            alt={teluguPage.letterheadAlt}
            className="w-full rounded-lg border border-gray-200 shadow-sm"
          />
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white" aria-labelledby="telugu-body">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="telugu-body" className="sr-only">Telugu message</h2>
          <div className="space-y-6 text-lg leading-relaxed text-ttcda-charcoal" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>
            {teluguPage.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-ttcda-off-white" aria-labelledby="bank-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <h2 id="bank-heading" className="text-xl md:text-2xl font-bold text-ttcda-maroon mb-6" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>
              {teluguPage.bankDetails.heading}
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teluguPage.bankDetails.rows.map((row, i) => (
                <div key={i} className="sm:col-span-2">
                  <dt className="text-sm font-semibold text-ttcda-gray-body uppercase tracking-wide">{row.label}</dt>
                  <dd className="mt-1 text-base font-medium text-ttcda-charcoal">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white" aria-labelledby="signatures-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="signatures-heading" className="section-heading text-center mb-10" style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}>
            {teluguPage.signatures.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teluguPage.signatures.members.map((member, i) => (
              <div key={i} className="bg-ttcda-off-white border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-lg font-bold text-ttcda-charcoal">{member.name}</p>
                <p className="text-sm font-semibold text-ttcda-gold mt-1">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-ttcda-off-white" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="section-heading text-center mb-8">
            {teluguPage.buildingGallery.heading}
          </h2>
          <img
            src={teluguPage.buildingGallery.heroImage}
            alt={teluguPage.buildingGallery.heroAlt}
            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm mb-6"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teluguPage.buildingGallery.gridImages.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Office interior ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg border border-gray-200"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
