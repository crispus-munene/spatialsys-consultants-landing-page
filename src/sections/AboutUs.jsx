import { Target } from "lucide-react";

const GREEN = "#73951f";
const ORANGE = "#e77d3a";

const mission = [
  "To deliver exceptional surveying services with a high level of accuracy, efficiency and professionalism.",
  "To provide solutions that meet clients' specific needs and are user friendly.",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-50 bg-white"
      aria-labelledby="about-heading"
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
              About Us
            </span>
            <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
          </div>
          <h2
            id="about-heading"
            className="text-4xl font-semibold text-gray-800 md:text-5xl"
          >
            Who <span style={{ color: GREEN }}>We Are</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* WHO WE ARE */}
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-gray-600">
              SpatialSys Consultants Limited is a registered survey company in
              Kenya offering land and engineering survey, mapping and GIS
              services. It is dedicated to providing accurate, reliable and
              comprehensive surveying services to our clients across various
              sectors.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Our team consists of skilled registered surveyors and KCAA
              licensed UAV (drone) pilots with vast years of experience, using
              state of the art technologies to deliver precise surveying
              solutions tailored to meet the needs of each project.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We also aim at giving products and outputs that clients can easily
              understand, relate to and use.
            </p>
          </div>

          {/* MISSION */}
          <aside
            className="rounded-3xl border border-gray-200 bg-[#f1f5e6] p-8 md:p-10 lg:col-span-5"
            aria-labelledby="mission-heading"
          >
            <div className="flex items-center gap-3">
              <Target className="h-7 w-7" style={{ color: GREEN }} aria-hidden="true" />
              <h3
                id="mission-heading"
                className="text-2xl font-semibold text-gray-800"
              >
                Our Mission
              </h3>
            </div>
            <div className="mt-5 h-px w-full bg-gray-300" />

            <ul className="mt-6 space-y-5">
              {mission.map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                    aria-hidden="true"
                  />
                  <p className="text-lg leading-relaxed text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}