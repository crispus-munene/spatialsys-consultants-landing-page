import { useState, useEffect, useRef } from "react";
import Img1 from "../assets/topography.webp";
import Img2 from "../assets/drone.webp";

const GREEN = "#73951f";
const ORANGE = "#e77d3a";

// variant: "image" (photo with overlay), "light" (tinted card), "dark" (wide green banner)
const services = [
  {
    title: "Topographical Surveys",
    paragraphs: [
      "We carry out topographical surveys that capture detailed information about natural and man-made features of property, represented in contours, elevations and existing structures, to support effective land development and design.",
      "Our maps support road, bridge and railway construction, architectural design, urban planning and the establishment of legal boundaries and ownership.",
    ],
    tags: ["Total Station", "RTK GNSS", "UAV Mapping"],
    img: Img1,
    alt: "Surveyor capturing terrain and contour data for a topographical survey in Kenya",
    variant: "image",
    tint: "#f1f5e6",
    accent: GREEN,
    layout: "md:col-span-2 lg:col-span-7 lg:row-span-2",
    shape: "rounded-[2rem] max-lg:rounded-br-[4rem] lg:rounded-br-[6rem]",
    description:
      "Topographical surveys mapping terrain, contours and features for planning, design and construction",
  },
  {
    title: "Sectional Title Surveys",
    paragraphs: [
      "We conduct sectional surveys to establish and define the individual units within a development, such as apartment buildings, townhouses or gated communities.",
      "The unit owner holds a sectional title to an individual unit while sharing the common areas and facilities with other unit owners.",
    ],
    variant: "light",
    tint: "#fdf1e9",
    accent: ORANGE,
    layout: "max-md:mr-6 lg:col-span-5",
    shape: "rounded-[2rem] max-lg:rounded-tr-[3.5rem] lg:rounded-tr-[5rem]",
    description:
      "Sectional title surveys defining individual units and shared areas in multi-unit developments",
  },
  {
    title: "Cadastral Surveys",
    paragraphs: [
      "We carry out subdivision of land, establishing and re-establishing the boundaries of fixed boundary property by delineating the boundary and determining the dimensions, area and rights of that property.",
      "The result is clear ownership under a land title or certificate of title.",
    ],
    variant: "light",
    tint: "#f1f5e6",
    accent: GREEN,
    layout: "max-md:ml-6 lg:col-span-5",
    shape: "rounded-[2rem] max-lg:rounded-tl-[3.5rem] lg:rounded-bl-[5rem]",
    description:
      "Cadastral surveys establishing and verifying legal land boundaries and ownership",
  },
  {
    title: "Mutation Surveys",
    paragraphs: [
      "Similarly, we carry out subdivision of general boundary property (freehold) for ownership under a land title deed.",
    ],
    variant: "light",
    tint: "#f3f4f4",
    accent: GREEN,
    layout: "max-md:mr-6 lg:col-span-5",
    shape: "rounded-[2rem] max-lg:rounded-br-[3.5rem] lg:rounded-tl-[5rem]",
    description:
      "Mutation surveys for subdivision of general boundary (freehold) property under a land title deed",
  },
  {
    title: "Engineering Surveys",
    paragraphs: [
      "We conduct precise measurements and mapping of specific construction and engineering sites for the purposes of design, construction and development projects.",
    ],
    variant: "light",
    tint: "#fdf1e9",
    accent: ORANGE,
    layout: "max-md:ml-6 lg:col-span-7",
    shape: "rounded-[2rem] max-lg:rounded-tl-[3.5rem] lg:rounded-br-[5rem]",
    description:
      "Engineering surveys providing precise measurements and mapping for design, construction and development projects",
  },
  {
    title: "UAVs and Aerial Mapping",
    paragraphs: [
      "We utilize Unmanned Aerial Vehicles, also known as drones, equipped with special sensors and cameras to capture high resolution images that give real-time visualization of the project area.",
      "LiDAR data is used in terrain modelling, elevation mapping, infrastructure planning and solar thermal detection, among others.",
    ],
    tags: ["KCAA Licensed", "LiDAR", "High-Res Imagery"],
    img: Img2,
    alt: "KCAA-licensed drone conducting an aerial mapping survey",
    variant: "dark",
    layout: "md:col-span-2 lg:col-span-12",
    shape: "rounded-[2rem] max-lg:rounded-tl-[4rem] max-lg:rounded-br-[4rem] lg:rounded-tl-[6rem] lg:rounded-br-[6rem]",
    description:
      "UAV drone surveys and aerial mapping delivering high-resolution imagery and LiDAR data",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Tags({ tags, light = false }) {
  if (!tags) return null;
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
            light
              ? "border-gray-300 bg-white/70 text-gray-700"
              : "border-white/30 bg-white/10 text-white"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ServiceCard({ s, i }) {
  const number = String(i + 1).padStart(2, "0");

  const meta = (
    <>
      <meta itemProp="name" content={s.title} />
      <meta itemProp="description" content={s.description} />
      <meta itemProp="provider" content="SpatialSys Consultants Limited" />
      <meta itemProp="areaServed" content="Kenya" />
    </>
  );

  const common = `group relative overflow-hidden ${s.shape} transition-shadow duration-500 hover:shadow-2xl`;

  if (s.variant === "image") {
    return (
      <article
        itemScope
        itemType="https://schema.org/Service"
        aria-labelledby={`service-${i}-title`}
        className={`${common} flex flex-col border border-gray-200 flex-1`}
        style={{ backgroundColor: s.tint }}
      >
        {meta}
        {/* Photo sits on its own, text never goes over it */}
        <div className="relative h-56 overflow-hidden md:h-72 lg:h-auto lg:min-h-[300px] lg:flex-1">
          <img
            src={s.img}
            alt={s.alt}
            loading="lazy"
            itemProp="image"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-8 md:p-10">
          <span
            className="text-5xl font-bold leading-none md:text-6xl"
            style={{ color: s.accent }}
            aria-hidden="true"
          >
            {number}
          </span>
          <h3
            id={`service-${i}-title`}
            className="mt-4 text-2xl font-semibold text-gray-800 md:text-3xl"
          >
            {s.title}
          </h3>
          <div
            className="mt-4 h-0.5 w-14"
            style={{ backgroundColor: s.accent }}
          />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {s.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <Tags tags={s.tags} light />
        </div>
      </article>
    );
  }

  if (s.variant === "dark") {
    return (
      <article
        itemScope
        itemType="https://schema.org/Service"
        aria-labelledby={`service-${i}-title`}
        className={`${common} grid bg-gradient-to-br from-[#141c07] via-[#1f2b0c] to-[#141c07] md:grid-cols-2 flex-1`}
      >
        {meta}
        <div className="relative p-8 text-white md:p-12 lg:pl-20">
          <span
            className="text-5xl font-bold leading-none md:text-6xl"
            style={{ color: GREEN }}
            aria-hidden="true"
          >
            {number}
          </span>
          <h3 id={`service-${i}-title`} className="mt-4 text-3xl font-semibold">
            {s.title}
          </h3>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
            {s.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <Tags tags={s.tags} />
        </div>
        <div className="relative min-h-[240px] max-md:order-first">
          <img
            src={s.img}
            alt={s.alt}
            loading="lazy"
            itemProp="image"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent md:from-[#1f2b0c] via-transparent to-[#1f2b0c] md:to-transparent" />
        </div>
      </article>
    );
  }

  // light
  return (
    <article
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby={`service-${i}-title`}
      className={`${common} border border-gray-200 p-8 md:p-10 flex-1`}
      style={{ backgroundColor: s.tint }}
    >
      {meta}
      <span
        className="text-5xl font-bold leading-none md:text-6xl"
        style={{ color: s.accent }}
        aria-hidden="true"
      >
        {number}
      </span>
      <h3
        id={`service-${i}-title`}
        className="mt-4 text-2xl font-semibold text-gray-800 md:text-3xl"
      >
        {s.title}
      </h3>
      <div
        className="mt-4 h-0.5 w-14"
        style={{ backgroundColor: s.accent }}
      />
      <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
        {s.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="services"
      className="scroll-mt-50 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        {/* HEADER */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
            <span
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
            >
              What We Do
            </span>
            <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
          </div>
          <h2
            id="services-heading"
            className="text-4xl font-semibold text-gray-800 md:text-5xl"
          >
            Precision Survey <span style={{ color: GREEN }}>Services</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Accurate, reliable and comprehensive surveying solutions across
            land, engineering, mapping and GIS, delivered by registered
            surveyors and KCAA-licensed drone pilots.
          </p>
        </Reveal>

        {/* SERVICES GRID */}
        <div
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12"
          role="list"
        >
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 2) * 120}
              className={`flex ${s.layout}`}
            >
              <ServiceCard s={s} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}