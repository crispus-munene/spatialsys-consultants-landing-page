import { useState, useEffect, useRef } from "react";
import ImageScreen from "../assets/hero-image.webp"; // Large screens
import ImagePhone from "../assets/hero-phone-2.webp"; // small screens

const headers = [
  "Topographical Surveys",
  "Engineering Surveys",
  "And More..."
];

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine(prev => (prev + 1) % headers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-start overflow-hidden"
      aria-label="SpatialSys Consultants Limited - Land and Engineering Survey Hero Section"
    >
      {/* Large screen image with SEO-optimized alt text */}
      <img
        src={ImageScreen}
        alt="SpatialSys Consultants Hero Image"
        className={`
          hidden lg:block absolute inset-0 w-full h-full object-cover transition-all duration-1500
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
        style={{ objectPosition: "75% 50%" }}
        loading="eager"
        fetchpriority="high"
      />

      {/* Small screen image with SEO-optimized alt text */}
      <img
        src={ImagePhone}
        alt="SpatialSys consulting services - for all your land and engineering survey, mapping and GIS services."
        className={`
          block lg:hidden absolute inset-0 w-full h-full object-cover transition-all duration-1500
          ${isVisible ? "opacity-100 scale-100" : "opacity-80 scale-105"}
        `}
        style={{ objectPosition: "50% 50%" }}
        loading="eager"
        fetchpriority="high"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />

      {/* Text Content with proper semantic structure */}
      <div className="relative z-10 w-full max-w-7xl px-8 lg:px-12 xl:m-auto text-white">
        {/* H1 with screen-reader accessible text and animated visual text */}
        <h1 className="mb-0 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight h-32 overflow-hidden relative">
          {/* Hidden but SEO-friendly complete heading */}
          <span className="sr-only">
            SpatialSys consulting services - land and engineering survey, mapping and GIS services.
          </span>

          {/* Animated visible headings */}
          {headers.map((line, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={`absolute left-0 w-full transition-all duration-1000 ease-in-out ${
                index === activeLine
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Main value proposition with keyword-rich content */}
        <p
          className={`
            text-lg sm:text-xl transition-all duration-1200 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "500ms" }}
        >
          Precision surveying for every project, across Kenya.<br />
          Registered surveyors. KCAA-licensed drone pilots. State-of-the-art technology.<br />
          Accurate land and engineering survey, mapping and GIS, delivered in outputs you can easily understand and use.
        </p>

        {/* CTA */}
        <div
          className={`
            mt-8 transition-all duration-1200 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="mailto:spatialsysconsultantlimited@gmail.com"
            className="inline-block bg-white text-[#e77d3a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Email SpatialSys Consultants Limited"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;