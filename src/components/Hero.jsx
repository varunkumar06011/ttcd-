import { Link } from 'react-router-dom';
import { heroContent, logo } from '../data/siteContent';

export default function Hero() {
  return (
    <section
      className="bg-white border-b border-gray-100"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-ttcda-gold mb-4">
              {heroContent.affiliation}
            </p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ttcda-charcoal leading-[1.1]"
            >
              {heroContent.heading}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ttcda-gray-body max-w-2xl mx-auto lg:mx-0">
              {heroContent.subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to={heroContent.primaryCta.path} className="btn-primary w-full sm:w-auto">
                {heroContent.primaryCta.label}
              </Link>
              <Link to={heroContent.secondaryCta.path} className="btn-secondary w-full sm:w-auto">
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Logo display */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="eager"
              decoding="async"
              className="h-48 w-auto md:h-64 lg:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
