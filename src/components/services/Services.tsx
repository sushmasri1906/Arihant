"use client";

export default function ServiceCategories() {
  const services = [
    {
      title: "Substation Up to 33 KV",
      desc:
        "We design, install, and commission substations up to 33KV, ensuring reliable power distribution for industries, commercial complexes, and infrastructure projects.",
    },
    {
      title: "LT Distribution System",
      desc:
        "Our LT distribution systems deliver safe and efficient low-tension power to industries, commercial facilities, and residential projects with maximum uptime.",
    },
    {
      title: "HT & LT Cable Laying",
      desc:
        "We provide professional HT & LT underground cable laying services with precision trenching, safe jointing, and compliance with all safety standards.",
    },
    {
      title: "HT & LT Termination",
      desc:
        "Our skilled engineers ensure secure HT & LT cable terminations using high-quality kits, preventing faults and ensuring long-term performance.",
    },
    {
      title: "Internal & External Lighting",
      desc:
        "From industrial sheds to street lighting, we deliver complete internal and external lighting solutions with energy-efficient designs and advanced control systems.",
    },
    {
      title: "Overhead Transmission Towers",
      desc:
        "We design and erect overhead transmission towers with robust engineering, ensuring long-distance, uninterrupted power transmission.",
    },
    {
      title: "Overhead Transmission Lines",
      desc:
        "Our expertise includes planning and installation of HT/LT overhead lines, with strict adherence to safety standards and reliable operations.",
    },
  ];

  const ORANGE = "#FF7A1A";
  const BLUE = "#0056A6";

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our <span style={{ color: ORANGE }}>Service Categories</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            Delivering end-to-end electrical contracting and engineering with safety, efficiency, and reliability at the core.
          </p>
          <div
            className="mx-auto mt-5 h-1 w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})` }}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${ORANGE})` }}
              />

              <div className="p-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background:
                    `radial-gradient(1200px 400px at 50% 0%, ${BLUE}10, transparent 60%)`,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
