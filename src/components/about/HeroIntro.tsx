// "use client";

// import React from "react";

// export default function HeroIntro() {
//   return (
//     <section className="relative overflow-hidden bg-[#0056A6] text-white">
//       {/* Subtle depth: grid + glow (pure CSS, brand colors only) */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10"
//         style={{
//           background: `
//             radial-gradient(800px 400px at 80% 10%, rgba(255,125,40,0.18), transparent 60%),
//             radial-gradient(700px 380px at 10% 80%, rgba(255,125,40,0.12), transparent 60%)
//           `,
//         }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10 opacity-[0.085]"
//         style={{
//           backgroundImage:
//             "linear-gradient(transparent 95%, rgba(255,255,255,0.5) 96%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.5) 96%)",
//           backgroundSize: "36px 36px, 36px 36px",
//         }}
//       />

//       {/* Orange mist accent */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF7D28]/15 via-transparent to-[#FF7D28]/20"
//       />

//       <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 py-20 md:py-24">
//         <div className="text-center space-y-6">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm ring-1 ring-white/20">
//             <span className="inline-block h-2 w-2 rounded-full bg-[#FF7D28]" />
//             Since 1989 • Trusted Electrical Engineering Partner
//           </div>

//           {/* Headline with accent underline */}
//           <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl font-bold leading-tight">
//             Arihant Control Systems –{" "}
//             <span className="relative">
//               <span className="text-[#FF7D28]">Engineering Excellence</span>
//               <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-10/12 rounded bg-[#FF7D28] md:w-8/12" />
//             </span>{" "}
//             Since 1989
//           </h1>

//           {/* Sub-headline */}
//           <p className="mx-auto max-w-3xl text-lg md:text-xl font-medium text-white/90">
//             We are a leading electrical engineering company, dedicated to delivering
//             safe, reliable, and cost-effective solutions for industries across India.
//           </p>

//           {/* Paragraph */}
//           <p className="mx-auto max-w-3xl text-base md:text-lg text-white/85">
//             Founded in 1989, Arihant Control Systems is one of the most promising
//             companies in the electrical sector. We constantly adapt to new technologies
//             and trends in business management, ensuring our clients benefit from the
//             latest advancements in electrical engineering.
//           </p>

//           {/* CTAs */}
//           <div className="pt-4 flex items-center justify-center gap-3">
//             <button
//               className="px-6 py-3 rounded-xl font-semibold bg-[#FF7D28] text-white shadow-md transition hover:shadow-lg hover:brightness-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
//               aria-label="Learn more about Arihant Control Systems"
//             >
//               Learn More
//             </button>
//             <button
//               className="px-6 py-3 rounded-xl font-semibold bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
//               aria-label="View services"
//             >
//               Our Services
//             </button>
//           </div>
//         </div>

//         {/* Stats / Trust strip */}
//         <div className="mt-10 md:mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
//           <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-sm ring-1 ring-white/15">
//             <div className="text-2xl md:text-3xl font-extrabold">35+ yrs</div>
//             <div className="text-sm text-white/85">Industry Experience</div>
//           </div>
//           <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-sm ring-1 ring-white/15">
//             <div className="text-2xl md:text-3xl font-extrabold">PAN-India</div>
//             <div className="text-sm text-white/85">Projects & Support</div>
//           </div>
//           <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur-sm ring-1 ring-white/15">
//             <div className="text-2xl md:text-3xl font-extrabold">24/7</div>
//             <div className="text-sm text-white/85">Engineer Assistance</div>
//           </div>
//         </div>
//       </div>

//       {/* Soft curved divider in brand orange (kept minimal) */}
//       <div className="relative">
//         <div
//           aria-hidden
//           className="mx-auto h-2 w-[92%] max-w-6xl rounded-full bg-[#FF7D28]/70 blur-[6px] opacity-80"
//         />
//       </div>
//     </section>
//   );
// }
export default function HeroIntro() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 10% 20%, rgba(255,125,40,0.18), transparent 60%), radial-gradient(700px 500px at 90% 10%, rgba(0,86,166,0.45), transparent 70%), radial-gradient(900px 600px at 100% 100%, rgba(255,125,40,0.14), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 text-xs font-medium tracking-wide text-orange-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
              Since 1989 • PAN-India
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Arihant Control Systems –{" "}
              <span className="text-[#FF7D28]">Engineering Excellence</span> Since
              1989
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
              We are a leading electrical engineering company, dedicated to
              delivering safe, reliable, and cost-effective solutions for industries
              across India.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-blue-200/90 sm:text-base">
              Founded in 1989, Arihant Control Systems is one of the most promising
              companies in the electrical sector. We constantly adapt to new
              technologies and trends in business management, ensuring our clients
              benefit from the latest advancements in electrical engineering.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#FF7D28] px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-orange-500/60 transition hover:brightness-[0.96] active:translate-y-[1px]"
              >
                Get a Quote
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                Our Solutions
              </a>
            </div>

            <ul className="mt-7 grid max-w-md grid-cols-1 gap-3 text-sm text-blue-100/90 sm:grid-cols-2">
              {[
                "Safe & compliant engineering",
                "Cost-effective maintenance",
                "24/7 engineer support",
                "Transparent T&C",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 text-[#FF7D28]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.22-.88l-3.517 4.874-1.544-1.544a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.138-.094l3.013-4.666.94-1.001Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E1A30] to-[#0B1220] p-5 shadow-2xl sm:max-w-lg">
              <div className="rounded-xl border border-white/10 bg-[#0B1220]/60 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    Control Panel Suite
                  </div>
                  <span className="rounded-full bg-[#FF7D28]/15 px-2 py-1 text-xs font-medium text-[#FF7D28]">
                    ISO-grade
                  </span>
                </div>

                {/* Replaced gradient with image */}
                <div className="mt-4 h-40 overflow-hidden rounded-lg ring-1 ring-inset ring-white/10">
                  <img
                    src="https://res.cloudinary.com/dk0smdu0d/image/upload/v1756989444/engineer-monitoring-controls-stockcake_ue5jqs.jpg"
                    alt="Control Panel"
                    className="h-full w-full object-cover"
                  />
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-blue-100/80">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <dt className="font-semibold text-white">Since</dt>
                    <dd className="mt-1 text-[#FF7D28]">1989</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <dt className="font-semibold text-white">Projects</dt>
                    <dd className="mt-1">PAN-India</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <dt className="font-semibold text-white">Support</dt>
                    <dd className="mt-1">24/7</dd>
                  </div>
                </dl>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#FF7D28]/25 blur-2xl sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-[#0056A6]/30 blur-2xl sm:-bottom-12 sm:-left-10 sm:h-36 sm:w-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


