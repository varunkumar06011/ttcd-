import { DownloadIcon, CalendarIcon } from './Icons';
import { newsPage } from '../data/siteContent';

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
}

export default function NewsItem({ item }) {
  return (
    <article className="card p-5 flex flex-col sm:flex-row sm:items-start gap-4">
      <div className="flex-shrink-0 w-full sm:w-28 text-center sm:text-left">
        <div className="inline-flex sm:flex items-center gap-2 text-sm font-semibold text-ttcda-gold bg-ttcda-gold/10 rounded-md px-3 py-1.5">
          <CalendarIcon className="w-4 h-4" />
          {formatDate(item.date)}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-ttcda-charcoal leading-snug">{item.title}</h3>
        <p className="text-sm text-ttcda-gray-body mt-1">{item.description}</p>
      </div>
      <div className="flex-shrink-0">
        <a
          href={item.pdfUrl}
          download
          className="inline-flex items-center gap-2 text-sm font-semibold text-ttcda-maroon hover:text-ttcda-maroon-light hover:underline"
        >
          <DownloadIcon className="w-4 h-4" />
          {newsPage.downloadLabel}
        </a>
      </div>
    </article>
  );
}
