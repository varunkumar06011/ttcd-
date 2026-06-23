import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import NewsItem from '../components/NewsItem';
import { siteMeta, newsPage, newsItems } from '../data/siteContent';

export default function News() {
  const sortedNews = [...newsItems].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>News & Circulars — {siteMeta.shortName}</title>
        <meta name="description" content={`Official notices and circulars from ${siteMeta.shortName}.`} />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={newsPage.heading}
            subtitle={newsPage.subheading}
            centered
          />
        </div>
      </div>

      <section className="py-14 md:py-20" aria-labelledby="news-list-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="news-list-heading" className="sr-only">News list</h2>
          <div className="space-y-4">
            {sortedNews.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
