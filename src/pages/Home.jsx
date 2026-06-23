import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import {
  siteMeta,
  homePage,
  leadershipPreview,
  teluguPage,
} from '../data/siteContent';

function PageTitle() {
  return (
    <Helmet>
      <title>{siteMeta.seo.defaultTitle}</title>
      <meta name="description" content={siteMeta.seo.defaultDescription} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Helmet>
  );
}

export default function Home() {
  return (
    <>
      <PageTitle />
      <Hero />

      {/* Who We Are — Telugu */}
      <section className="py-14 md:py-20" aria-labelledby="who-we-are-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="who-we-are-heading"
            className="section-heading"
            style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}
          >
            {teluguPage.whoWeAre.heading}
          </h2>
          <div
            className="mt-5 space-y-4 text-ttcda-gray-body"
            style={{ fontFamily: "'Noto Sans Telugu', sans-serif" }}
          >
            {teluguPage.whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/telugu"
              className="inline-flex items-center gap-2 text-sm font-bold text-ttcda-maroon hover:text-ttcda-maroon-light hover:underline"
            >
              View full story / పూర్తి కథనాన్ని చూడండి →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-14 md:py-20 bg-ttcda-off-white" aria-labelledby="leadership-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 id="leadership-heading" className="section-heading">{leadershipPreview.heading}</h2>
            </div>
            <Link
              to={leadershipPreview.cta.path}
              className="text-sm font-bold text-ttcda-maroon hover:text-ttcda-maroon-light hover:underline"
            >
              {leadershipPreview.cta.label} →
            </Link>
          </div>
          <img
            src={leadershipPreview.groupPhoto.src}
            alt={leadershipPreview.groupPhoto.alt}
            loading="eager"
            decoding="async"
            className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      </section>

      {/* TTCD_FLYER_2026 */}
      <section className="py-14 md:py-20" aria-labelledby="flyer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div>
              <h2 id="flyer-heading" className="section-heading">{homePage.flyerSection.heading}</h2>
              <p className="text-ttcda-gray-body mt-2 max-w-2xl">{homePage.flyerSection.description}</p>
            </div>
            <a
              href={homePage.flyerSection.fileUrl}
              download={homePage.flyerSection.fileName}
              className="btn-primary whitespace-nowrap"
            >
              {homePage.flyerSection.downloadLabel}
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
