import { CalendarIcon, LocationIcon } from './Icons';

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
}

export default function EventCard({ event }) {
  return (
    <article className="card p-5">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-14 h-14 rounded-md bg-ttcda-gold/10 text-ttcda-gold flex flex-col items-center justify-center font-bold">
          <span className="text-xs uppercase">{new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}</span>
          <span className="text-lg leading-none">{new Date(event.date).getDate()}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-ttcda-charcoal leading-snug">{event.title}</h3>
          <p className="flex items-center gap-2 text-sm text-ttcda-gray-body mt-1">
            <LocationIcon className="w-4 h-4 text-ttcda-maroon" />
            {event.location}
          </p>
          <p className="flex items-center gap-2 text-sm text-ttcda-gray-body mt-0.5">
            <CalendarIcon className="w-4 h-4 text-ttcda-maroon" />
            {formatDate(event.date)}
          </p>
          <p className="text-sm text-ttcda-gray-body mt-3">{event.description}</p>
        </div>
      </div>
    </article>
  );
}
