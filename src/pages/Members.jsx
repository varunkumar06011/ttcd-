import { Helmet } from 'react-helmet-async';
import { siteMeta, districtAssociations } from '../data/siteContent';

export default function Members() {
  return (
    <>
      <Helmet>
        <title>Members — {siteMeta.shortName}</title>
        <meta name="description" content="District Associations of Telangana State — presidents, secretaries, and treasurers." />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading">District Associations of Telangana State</h1>
          <p className="section-subheading mx-auto mt-3">
            Presidents, Secretaries & Treasurers — All 34 District Chemists & Druggists Associations
          </p>
        </div>
      </div>

      <section className="py-14 md:py-20" aria-labelledby="members-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="members-heading" className="sr-only">District associations table</h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-ttcda-off-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-ttcda-charcoal uppercase tracking-wider">
                    District
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-ttcda-charcoal uppercase tracking-wider">
                    President
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-ttcda-charcoal uppercase tracking-wider">
                    Secretary
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-ttcda-charcoal uppercase tracking-wider">
                    Treasurer
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {districtAssociations.map((row) => (
                  <tr key={row.district} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-ttcda-charcoal">{row.district}</td>
                    <td className="px-6 py-4 text-sm text-ttcda-gray-body">{row.president}</td>
                    <td className="px-6 py-4 text-sm text-ttcda-gray-body">{row.secretary}</td>
                    <td className="px-6 py-4 text-sm text-ttcda-gray-body">{row.treasurer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {districtAssociations.map((row) => (
              <div key={row.district} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-base font-bold text-ttcda-charcoal border-b border-gray-100 pb-3 mb-3">
                  {row.district}
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs font-semibold text-ttcda-gray-body uppercase tracking-wide">President</dt>
                    <dd className="text-sm text-ttcda-charcoal">{row.president}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-ttcda-gray-body uppercase tracking-wide">Secretary</dt>
                    <dd className="text-sm text-ttcda-charcoal">{row.secretary}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-ttcda-gray-body uppercase tracking-wide">Treasurer</dt>
                    <dd className="text-sm text-ttcda-charcoal">{row.treasurer}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
