export default function ProjectHero() {
  const BLUE = "#0056A6";
  const ORANGE = "#FF7A1A";

  return (
    <section
      className="relative h-[55vh] sm:h-[65vh] lg:h-[75vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dk0smdu0d/image/upload/v1756907857/bg-substation-maintenance_i2f8qr.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Get <span style={{ color: ORANGE }}>in Touch</span>
        </h1>

        <p className="mt-4 max-w-3xl text-base text-blue-100/95 sm:text-lg md:text-xl">
          We’re here to power your projects with reliable electrical solutions.
          Reach out to us for inquiries, quotations, or support - our team will
          respond promptly.
        </p>

        {/* Quick contact chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {[
            { label: "24×7 Response", color: BLUE },
            { label: "PAN-India Service", color: ORANGE },
            { label: "Class 1/A Certified", color: BLUE },
          ].map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center rounded-full border bg-white/95 px-3 py-1 text-xs font-medium shadow-sm"
              style={{ borderColor: c.color, color: c.color }}
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
            style={{ backgroundColor: BLUE }}
          >
            Send an Inquiry
          </a>
          <a
            href="mailto:info@arihantcontrols.in"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-95"
            style={{ backgroundColor: ORANGE }}
          >
            Email Us
          </a>
        </div>

        {/* Helper links */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/90">
          <a href="#map" className="underline-offset-4 hover:underline">
            View Location
          </a>
          <span className="opacity-50">•</span>
          <a href="#support" className="underline-offset-4 hover:underline">
            24×7 Support
          </a>
        </div>
      </div>

      {/* Bottom brand divider */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${ORANGE}, ${BLUE})` }}
      />
    </section>
  );
}
