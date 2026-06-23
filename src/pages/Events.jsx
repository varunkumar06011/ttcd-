import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import { siteMeta, eventsPage } from '../data/siteContent';

export default function Events() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Events & Gallery — {siteMeta.shortName}</title>
        <meta name="description" content={`Photo gallery from ${siteMeta.shortName}.`} />
      </Helmet>

      <div className="bg-ttcda-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={eventsPage.heading}
            subtitle={eventsPage.subheading}
            centered
          />
        </div>
      </div>

      {/* Gallery */}
      <section className="py-14 md:py-20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="sr-only">{eventsPage.galleryHeading}</h2>
          {eventsPage.galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {eventsPage.galleryImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className="relative aspect-[3/2] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ttcda-gold"
                  onClick={() => setLightboxImage(image.src)}
                  aria-label={`View ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-ttcda-gray-body">{eventsPage.noPhotosLabel}</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-ttcda-gold rounded"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
