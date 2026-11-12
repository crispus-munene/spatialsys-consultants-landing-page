import { useState, useEffect, useRef } from "react";
import { Route, GraduationCap, MapPin, Ruler, Plane } from "lucide-react";

const GREEN = "#73951f";
const ORANGE = "#e77d3a";

const stats = [
  { value: "170.5", unit: "km", label: "Road corridors surveyed" },
  { value: "3", unit: "", label: "KeRRA road projects" },
  { value: "2", unit: "", label: "Education campuses" },
  { value: "6", unit: "", label: "Featured projects" },
];
const projects = [
  {
    title: "Kibichoi–Mundoro and Loop Roads",
    client: "KeRRA",
    scope: "Topographical and engineering surveys",
    size: "67.5 km",
  },
  {
    title: "Gatundu–Juja–Karinga and Loop Roads",
    client: "KeRRA",
    scope: "Topographical and engineering surveys",
    size: "75 km",
  },
  {
    title: "Ruburi–Wanugu–Flyover",
    client: "KeRRA",
    scope: "Topographical and engineering surveys",
    size: "28 km",
  },
  {
    title: "M-Pesa Foundation Academy, Thika",
    client: "M-Pesa Foundation",
    scope: "Topographical and engineering surveys",
    size: "",
  },
  {
    title: "PCEA Sukari Senior School",
    client: "PCEA",
    scope: "Topographical and setting out surveys",
    size: "",
  },
  {
    title: "Windsor, LR. No. ---",
    client: "Private",
    scope: "Land survey",
    size: "1 acre",
  },
];

export default function Projects() {
return (
  <section
    id="projects"
    className="scroll-mt-50 bg-white"
    aria-labelledby="projects-heading"
  >
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
          <span
            className="text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: ORANGE }}
          >
            Our Work
          </span>
          <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
        </div>
        <h2
          id="projects-heading"
          className="text-4xl font-semibold text-gray-800 md:text-5xl"
        >
          Projects We Have <span style={{ color: GREEN }}>Delivered</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Road corridors, schools and land parcels surveyed across Kenya.
        </p>
      </div>

      {/* PROJECT LIST */}
      <ul className="mt-16 border-t border-gray-200" role="list">
        {projects.map((p) => (
          <li
            key={p.title}
            className="group grid grid-cols-1 gap-2 border-b border-gray-200 py-7 transition-colors hover:bg-gray-50 sm:grid-cols-12 sm:items-center sm:px-4"
            itemScope
            itemType="https://schema.org/Service"
          >
            <meta itemProp="provider" content="SpatialSys Consultants Limited" />
            <div className="sm:col-span-8">
              <h3
                className="text-xl font-semibold text-gray-800 transition-colors group-hover:text-[#73951f]"
                itemProp="name"
              >
                {p.title}
              </h3>
              <p className="mt-1 text-gray-600" itemProp="serviceType">
                {p.scope}
              </p>
            </div>
            <div className="sm:col-span-4 sm:text-right">
              <p className="text-sm text-gray-500">{p.client}</p>
              {p.size && (
                <p className="mt-1 text-lg font-semibold text-[#73951f]">
                  {p.size}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
}