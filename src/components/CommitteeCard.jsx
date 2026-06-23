import { PhoneIcon, EmailIcon } from './Icons';

export default function CommitteeCard({ member }) {
  return (
    <article className="card p-6 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <img
          src={member.photo}
          alt={`Photo of ${member.name}`}
          className="h-28 w-28 rounded-full object-cover border-4 border-ttcda-gold/20 bg-gray-100"
        />
        <div className="absolute bottom-0 right-0 bg-ttcda-maroon text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {member.designation}
        </div>
      </div>
      <h3 className="text-lg font-bold text-ttcda-charcoal">{member.name}</h3>
      <p className="text-sm font-medium text-ttcda-gold mb-3">{member.designation}</p>
      {(member.phone || member.email) && (
        <div className="mt-auto space-y-1 text-sm text-ttcda-gray-body">
          {member.phone && (
            <p className="flex items-center justify-center gap-2">
              <PhoneIcon className="w-4 h-4 text-ttcda-maroon" />
              {member.phone}
            </p>
          )}
          {member.email && (
            <p className="flex items-center justify-center gap-2">
              <EmailIcon className="w-4 h-4 text-ttcda-maroon" />
              <a href={`mailto:${member.email}`} className="hover:text-ttcda-maroon hover:underline">
                {member.email}
              </a>
            </p>
          )}
        </div>
      )}
    </article>
  );
}
