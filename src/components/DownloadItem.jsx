import { DownloadIcon, PillIcon } from './Icons';
import { downloadsPage } from '../data/siteContent';

export default function DownloadItem({ item }) {
  return (
    <article className="card p-5 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-md bg-ttcda-gold/10 text-ttcda-gold flex items-center justify-center">
          <PillIcon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ttcda-charcoal leading-snug">{item.title}</h3>
          <p className="text-xs font-semibold text-ttcda-maroon mt-0.5">
            {item.fileType} · {item.fileSize}
          </p>
        </div>
      </div>
      <p className="text-sm text-ttcda-gray-body mb-5 flex-grow">{item.description}</p>
      <a
        href={item.fileUrl}
        download
        className="btn-primary w-full text-sm py-2.5"
      >
        <DownloadIcon className="w-4 h-4 mr-2" />
        {downloadsPage.downloadLabel}
      </a>
    </article>
  );
}
