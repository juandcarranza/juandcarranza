"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [portraitMode, setPortraitMode] = useState<"professional" | "field">(
  "professional"
);
const [mdhImage, setMdhImage] = useState(0);
const [mdhDirection, setMdhDirection] = useState<"left" | "right">("right");
const [mdhPreviousImage, setMdhPreviousImage] = useState<number | null>(null);
const [mdhManualPause, setMdhManualPause] = useState(false);
const [amazonasImage, setAmazonasImage] = useState(0);
const [amazonasDirection, setAmazonasDirection] = useState<"left" | "right">("right");
const [amazonasPreviousImage, setAmazonasPreviousImage] = useState<number | null>(null);
const [amazonasManualPause, setAmazonasManualPause] = useState(false);
const [walkerImage, setWalkerImage] = useState(0);
const [walkerDirection, setWalkerDirection] = useState<"left" | "right">("right");
const [walkerPreviousImage, setWalkerPreviousImage] = useState<number | null>(null);
const [walkerManualPause, setWalkerManualPause] = useState(false);
const [experienceVisible, setExperienceVisible] = useState(false);
useEffect(() => {
  if (mdhManualPause) return;

  const timer = setInterval(() => {
    setMdhDirection("right");

    setMdhImage((currentImage) => {
      setMdhPreviousImage(currentImage);
      return (currentImage + 1) % mdhImages.length;
    });
  }, 5300);

  return () => clearInterval(timer);
}, [mdhManualPause]);
useEffect(() => {
  if (!mdhManualPause) return;

  const resumeTimer = setTimeout(() => {
    setMdhManualPause(false);
  }, 10000);

  return () => clearTimeout(resumeTimer);
}, [mdhManualPause, mdhImage]);

useEffect(() => {
  if (amazonasManualPause) return;

  const timer = setInterval(() => {
    setAmazonasDirection("right");

    setAmazonasImage((currentImage) => {
      setAmazonasPreviousImage(currentImage);
      return (currentImage + 1) % amazonasImages.length;
    });
  }, 5300);

  return () => clearInterval(timer);
}, [amazonasManualPause]);

useEffect(() => {
  if (!amazonasManualPause) return;

  const resumeTimer = setTimeout(() => {
    setAmazonasManualPause(false);
  }, 10000);

  return () => clearTimeout(resumeTimer);
}, [amazonasManualPause, amazonasImage]);
useEffect(() => {
  if (walkerManualPause) return;

  const timer = setInterval(() => {
    setWalkerDirection("right");

    setWalkerImage((currentImage) => {
      setWalkerPreviousImage(currentImage);
      return (currentImage + 1) % walkerImages.length;
    });
  }, 5300);

  return () => clearInterval(timer);
}, [walkerManualPause]);

useEffect(() => {
  if (!walkerManualPause) return;

  const resumeTimer = setTimeout(() => {
    setWalkerManualPause(false);
  }, 10000);

  return () => clearTimeout(resumeTimer);
}, [walkerManualPause, walkerImage]);

const mdhImages = [
  {
    src: "/images/projects/mini-design-house/01-construction.jpg",
    label: "CONSTRUCTION",
  },
  {
    src: "/images/projects/mini-design-house/02-supervision.jpg",
    label: "SUPERVISION",
  },
  {
    src: "/images/projects/mini-design-house/03-closeout.jpg",
    label: "CLOSEOUT",
  },
  {
    src: "/images/projects/mini-design-house/04-completed.jpg",
    label: "DELIVERY",
  },
];

const amazonasImages = [
  {
    src: "/images/projects/amazonas/01-existing-conditions.jpeg",
    label: "EXISTING CONDITIONS",
  },
  {
    src: "/images/projects/amazonas/02-site-preparation.jpg",
    label: "SITE PREPARATION",
  },
  {
    src: "/images/projects/amazonas/03-piling.jpg",
    label: "PILING",
  },
  {
    src: "/images/projects/amazonas/04-supervision.jpg",
    label: "SUPERVISION",
  },
];

const walkerImages = [
  {
    src: "/images/projects/the-walker/01-structure.jpg",
    label: "STRUCTURE",
    labelOffset: "12.5%",
  },
  {
    src: "/images/projects/the-walker/02-coordination.jpg",
    label: "COORDINATION",
    labelOffset: "21.875%",
  },
  {
    src: "/images/projects/the-walker/03-field-leadership.jpg",
    label: "FIELD LEADERSHIP",
    labelOffset: "12.5%",
  },
  {
    src: "/images/projects/the-walker/04-production.jpg",
    label: "PRODUCTION",
    labelOffset: "0",
  },
  {
    src: "/images/projects/the-walker/05-progress.jpg",
    label: "PROGRESS",
    labelOffset: "12.5%",
  },
];
      function toggleTheme() {
  const nextTheme = theme === "dark" ? "light" : "dark";

  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
}
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setExperienceVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main
  id="top"
  data-theme={theme}
  className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500"
>
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--background)]/80 px-6 py-4 backdrop-blur-md md:px-10 md:py-5 lg:px-16">
       <a
  href="#"
  className="text-lg font-semibold tracking-[-0.02em] md:text-xl"
>
  JUAN D. CARRANZA
</a>

        <div className="hidden items-center gap-4 text-[9px] tracking-[0.08em] md:flex lg:gap-6 lg:text-[10px] lg:tracking-[0.1em] xl:gap-8 xl:text-xs xl:tracking-[0.12em]">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#ai">AI + CONSTRUCTION</a>
          <a href="#contact">CONTACT</a>
        </div>

        <button
  type="button"
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-base transition-all duration-300 hover:scale-105"
>
  {theme === "dark" ? (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
) : (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
  </svg>
)}
</button>
      </nav>

                       {/* Hero */}
      <section className="relative min-h-[calc(100svh-69px)] overflow-hidden border-b border-[var(--line)] md:min-h-[calc(100vh-80px)]">

        {/* Full-background image */}
        <img
  src={
    theme === "dark"
      ? "/images/hero/hero-construction-dark.jpg"
      : "/images/hero/hero-construction-light.jpg"
  }
  alt=""
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
/>
{/* Theme-aware photo treatment */}
<div
  className={`absolute inset-0 transition-colors duration-700 ${
    theme === "dark" ? "bg-black/25" : "bg-[#f1efe9]/10"
  }`}
/>

{/* Theme-aware readability gradient */}
<div
  className="absolute inset-0 transition-all duration-700"
  style={{
    background:
      theme === "dark"
        ? "linear-gradient(90deg, rgba(15,17,16,0.96) 0%, rgba(15,17,16,0.88) 34%, rgba(15,17,16,0.48) 58%, rgba(15,17,16,0.08) 78%, rgba(15,17,16,0.02) 100%)"
        : "linear-gradient(90deg, rgba(241,239,233,0.97) 0%, rgba(241,239,233,0.92) 30%, rgba(241,239,233,0.72) 48%, rgba(241,239,233,0.30) 68%, rgba(241,239,233,0.05) 88%, rgba(241,239,233,0.00) 100%)",
  }}
/>
        {/* Hero content */}
        <div className="relative z-10 flex min-h-[calc(100svh-69px)] flex-col px-6 py-5 text-[var(--foreground)] md:min-h-[calc(100vh-80px)] md:px-10 md:py-10 lg:px-16">

       

          {/* Main statement */}
          <div className="pb-8 pt-8 md:my-auto md:py-12">
            <h1 className="max-w-5xl text-[2.85rem] font-semibold leading-[0.86] tracking-[-0.055em] sm:text-[3.15rem] md:text-[clamp(3.3rem,7.2vw,8rem)] md:leading-[0.82] md:tracking-[-0.065em]">
              <span className="block">CONSTRUCTION.</span>
              <span className="block">MANAGEMENT.</span>
              <span className="block">TECHNOLOGY.</span>
            </h1>

            {/* Better Together */}
            <div className="mt-8 border-l-2 border-[#b7975d] pl-5 md:mt-10">
              <p
                className={`text-sm tracking-[0.05em] sm:text-base md:text-lg ${
                  theme === "dark" ? "text-[#b4b5b1]" : "text-[#777a76]"
                }`}
              >
                GREAT ON THEIR OWN.
              </p>

              <p className="mt-1 text-[1.7rem] font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl">
                BETTER TOGETHER.
              </p>
            </div>

            {/* Intro */}
            <p
              className={`mt-7 max-w-md text-sm leading-6 ${
                theme === "dark" ? "text-[#d2d3cf] md:text-[#b4b5b1]" : "text-[#555955] md:text-[#777a76]"
              }`}
            >
              Civil Engineer pursuing an M.S. in Construction Management and
              Technology at Arizona State University.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
              <a
                href="#projects"
                className="border border-[#b7975d] bg-[#b7975d] px-5 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#171918] transition-opacity hover:opacity-80"
              >
                VIEW PROJECTS →
              </a>

              <a
                href="#contact"
                className="border border-white/25 px-5 py-3 text-[10px] font-semibold tracking-[0.16em] transition-colors hover:bg-[#f1efe9] hover:text-[#171918]"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-end">
            <a
              href="#about"
              className={`text-[9px] tracking-[0.2em] ${
                theme === "dark" ? "text-[#b4b5b1]" : "text-[#777a76]"
              }`}
            >
              SCROLL ↓
            </a>
          </div>

        </div>
      </section>
                  {/* About */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-[var(--line)] px-6 py-14 md:px-10 md:py-24 lg:px-16"
      >
        {/* Subtle background detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-12">

          {/* Future portrait area */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              01 / ABOUT
            </p>

            {/* Mobile portrait + statement */}
            <div className="mt-8 grid grid-cols-[0.78fr_1.22fr] items-center gap-5 lg:hidden">
              <button
                type="button"
                onClick={() => setPortraitMode((mode) => mode === "professional" ? "field" : "professional")}
                aria-label="Switch About portrait"
                className="relative aspect-[4/5] overflow-hidden text-left"
              >
                <img
                  src="/images/about/about-professional.jpeg"
                  alt="Juan D. Carranza"
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ${portraitMode === "professional" ? "opacity-100" : "opacity-0"} ${theme === "dark" ? "brightness-[0.82] saturate-[0.65] contrast-[1.05]" : "brightness-[0.98] saturate-[0.9]"}`}
                />
                <img
                  src="/images/about/about-field.jpg"
                  alt="Juan D. Carranza on a construction site in Panama City"
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${portraitMode === "field" ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <h2 className="text-[1.8rem] font-semibold leading-[0.98] tracking-[-0.045em] md:text-[2.7rem]">
                BUILT THROUGH
                <br />
                EXPERIENCE.
                <br />
                DRIVEN BY WHAT&apos;S NEXT.
              </h2>
            </div>

            <div
  onMouseEnter={() => setPortraitMode("field")}
onMouseLeave={() => setPortraitMode("professional")}
onClick={() => setPortraitMode((mode) => mode === "professional" ? "field" : "professional")}
  role="button"
  tabIndex={0}
  aria-label="Switch About portrait"
  className="relative mt-10 hidden aspect-[4/5] cursor-pointer overflow-hidden lg:block"
>
  <img
    src="/images/about/about-professional.jpeg"
    alt="Juan D. Carranza"
    className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ${
  portraitMode === "professional" ? "opacity-100" : "opacity-0"
} ${
  theme === "dark"
    ? "brightness-[0.82] saturate-[0.65] contrast-[1.05]"
    : "brightness-[0.98] saturate-[0.9]"
}`}
  />
  <img
  src="/images/about/about-field.jpg"
  alt="Juan D. Carranza on a construction site in Panama City"
  className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
  portraitMode === "field" ? "opacity-100" : "opacity-0"
}`}
/>
</div>
          </div>

          {/* Main story */}
          <div className="lg:col-span-9">
            <h2 className="hidden max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] lg:block lg:text-7xl">
              BUILT THROUGH
              <br />
              EXPERIENCE.
              <br />
              DRIVEN BY WHAT&apos;S NEXT.
            </h2>

            {/* Panama / USA story */}
            <div className="mt-5 grid gap-8 border-t border-[var(--line)] pt-7 md:mt-10 md:grid-cols-2">
              <div>
                <div className="min-h-[58px]">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  <span className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 16" className="h-[11px] w-4 shrink-0" aria-hidden="true">
                      <rect width="12" height="8" x="0" y="0" fill="#ffffff" />
                      <rect width="12" height="8" x="12" y="0" fill="#d21034" />
                      <rect width="12" height="8" x="0" y="8" fill="#005293" />
                      <rect width="12" height="8" x="12" y="8" fill="#ffffff" />
                      <text x="6" y="6" textAnchor="middle" fontSize="5" fill="#005293">★</text>
                      <text x="18" y="14" textAnchor="middle" fontSize="5" fill="#d21034">★</text>
                    </svg>
                    <span>PANAMA</span>
                  </span>
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  🏠 PANAMA CITY
                </p>
                </div>

                <p className="mt-4 max-w-md text-base leading-7">
                  My path in construction began with Civil Engineering and
                  developed through hands-on experience across high-rise
                  construction, preconstruction, field supervision, project
                  coordination, procurement, scheduling, and closeout.
                </p>
              </div>

              <div>
                <div className="min-h-[58px]">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  <span className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 26 16" className="h-[11px] w-[18px] shrink-0" aria-hidden="true">
                      <rect width="26" height="16" fill="#ffffff" />
                      {[0, 2, 4, 6, 8, 10, 12].map((stripe) => (
                        <rect key={stripe} x="0" y={stripe * (16 / 13)} width="26" height={16 / 13} fill="#b22234" />
                      ))}
                      <rect width="10.4" height="8.6" fill="#3c3b6e" />
                      <g fill="#ffffff">
                        <circle cx="2" cy="2" r="0.45" /><circle cx="4" cy="2" r="0.45" /><circle cx="6" cy="2" r="0.45" /><circle cx="8" cy="2" r="0.45" />
                        <circle cx="3" cy="4" r="0.45" /><circle cx="5" cy="4" r="0.45" /><circle cx="7" cy="4" r="0.45" />
                        <circle cx="2" cy="6" r="0.45" /><circle cx="4" cy="6" r="0.45" /><circle cx="6" cy="6" r="0.45" /><circle cx="8" cy="6" r="0.45" />
                      </g>
                    </svg>
                    <span>UNITED STATES</span>
                  </span>
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  📍 TEMPE, ARIZONA
                </p>
                </div>

                <p className="mt-4 max-w-md text-base leading-7">
                  Today, I&apos;m pursuing an M.S. in Construction Management
                  and Technology at Arizona State University, expanding that
                  field experience through advanced management practices,
                  emerging technology, and new ways of approaching project
                  delivery.
                </p>
              </div>
            </div>

            {/* Three disciplines */}
            <div className="mt-12 border-t border-[var(--line)] pt-7">
              <p className="mb-7 text-xs tracking-[0.18em] text-[var(--muted)]">
                THREE DISCIPLINES / ONE APPROACH
              </p>

              <div className="grid border-l border-t border-[var(--line)] md:grid-cols-3">

                {/* Construction */}
                <div className="group relative min-w-0 min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-5 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)] lg:p-6">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    01
                  </p>

                  <h3 className="mt-8 whitespace-nowrap text-lg font-semibold tracking-[-0.03em] lg:text-xl xl:text-2xl">
                    CONSTRUCTION
                  </h3>

                  <p className="mt-5 text-sm leading-6 opacity-70">
                    Understanding how projects move from planning into physical
                    execution through real field experience.
                  </p>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 text-[9px] tracking-[0.12em] opacity-60">
                    <span>FIELD</span>
                    <span>/</span>
                    <span>QA/QC</span>
                    <span>/</span>
                    <span>HIGH-RISE</span>
                  </div>
                </div>

                {/* Management */}
                <div className="group relative min-w-0 min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-5 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)] lg:p-6">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    02
                  </p>

                  <h3 className="mt-8 break-words text-xl font-semibold tracking-[-0.03em] lg:text-2xl">
                    MANAGEMENT
                  </h3>

                  <p className="mt-5 text-sm leading-6 opacity-70">
                    Connecting people, schedules, cost, materials, information,
                    and decisions to move projects forward.
                  </p>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 text-[9px] tracking-[0.12em] opacity-60">
                    <span>PEOPLE</span>
                    <span>/</span>
                    <span>COST</span>
                    <span>/</span>
                    <span>SCHEDULE</span>
                  </div>
                </div>

                {/* Technology */}
                <div className="group relative min-w-0 min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-5 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)] lg:p-6">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    03
                  </p>

                  <h3 className="mt-8 break-words text-xl font-semibold tracking-[-0.03em] lg:text-2xl">
                    TECHNOLOGY
                  </h3>

                  <p className="mt-5 text-sm leading-6 opacity-70">
                    Using BIM, AI, automation, and emerging tools to challenge
                    inefficient processes and explore better solutions.
                  </p>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 text-[9px] tracking-[0.12em] opacity-60">
                    <span>BIM</span>
                    <span>/</span>
                    <span>AI</span>
                    <span>/</span>
                    <span>AUTOMATION</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
                 {/* Experience */}
      <section
        id="experience"
        className="relative overflow-hidden border-t border-[var(--line)] px-6 py-14 md:px-10 md:py-24 lg:px-16"
      >
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Career timeline */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              02 / EXPERIENCE
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
              Growing through field experience, project management, and
              increasing responsibility.
            </p>

            <div className="relative mt-14 hidden pl-9 lg:block">
              {/* Base line and animated career tracer share the exact node centerline */}
              <div className="absolute bottom-1 left-[5px] top-2 w-px bg-[var(--line)]" />
              <div
                aria-hidden="true"
                className="absolute left-[4px] top-2 w-[3px] origin-top bg-[#b7975d] transition-transform duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  height: "calc(100% - 10px)",
                  transform: experienceVisible ? "scaleY(1)" : "scaleY(0)",
                }}
              />

              {[
                { year: "2018", role: "First field experience", detail: "", delay: 100, current: false },
                { year: "2019", role: "Civil Engineering degree begins", detail: "", delay: 500, current: false },
                { year: "2024", role: "Works Supervisor + Assistant PM", detail: "", delay: 900, current: false },
                { year: "2025", role: "Licensed Civil Engineer", detail: "PANAMA", delay: 1300, current: false },
                { year: "2026", role: "Production Lead", detail: "", delay: 1700, current: false },
                { year: "NOW", role: "Project Manager", detail: "", delay: 2100, current: true },
              ].map((step, index) => (
                <div
                  key={step.year}
                  className={`group relative ${index < 5 ? "pb-20" : ""} transition-all duration-700`}
                  style={{
                    opacity: experienceVisible ? 1 : 0.25,
                    transform: experienceVisible ? "translateX(0)" : "translateX(-8px)",
                    transitionDelay: experienceVisible ? `${step.delay}ms` : "0ms",
                  }}
                >
                  <span
                    className={`absolute -left-[36.5px] top-0.5 h-3 w-3 rounded-full border transition-all duration-500 group-hover:scale-125 ${
                      step.current
                        ? "border-[#b7975d] bg-[#b7975d] shadow-[0_0_0_5px_rgba(183,151,93,0.12)]"
                        : "border-[var(--foreground)] bg-[var(--background)]"
                    }`}
                  />
                  <p className={`text-[11px] tracking-[0.2em] ${step.current ? "text-[#b7975d]" : "text-[var(--muted)]"}`}>
                    {step.year}
                  </p>
                  <p className="mt-2 max-w-[230px] text-[17px] font-medium leading-6 tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                    {step.role}
                  </p>
                  {step.detail && (
                    <p className="mt-1 text-[10px] tracking-[0.18em] text-[var(--muted)]">
                      {step.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">

            <div className="mb-12">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                PROFESSIONAL JOURNEY
              </p>

              <h2 className="mt-5 max-w-4xl text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl md:text-6xl md:leading-[1.05] md:tracking-[-0.04em] lg:text-7xl">
                FROM THE FIELD
                <br />
                TO LEADING IT.
              </h2>
            </div>

            {/* ICE Electronics */}
            <article className="grid gap-8 border-t border-[var(--line)] py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div>
                <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                  MAY 2026 — PRESENT
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  ICE Electronics International
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Project Manager
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-7">
                  Coordinating project execution for specialized electrical,
                  electronics, and hydraulic workshops while maintaining
                  communication across stakeholders, contractors, and project
                  teams.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "PROJECT MANAGEMENT",
                    "SCHEDULING",
                    "COORDINATION",
                    "STAKEHOLDERS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="border border-[var(--line)] px-3 py-2 text-[10px] tracking-[0.14em] text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* RI Group */}
            <article className="border-y border-[var(--line)] py-10">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">

                <div>
                  <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                    FEB 2024 — APR 2026
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    RI Group Panama
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Construction &amp; Project Management
                  </p>
                </div>

                <div>
                  {/* Career progression */}
                  <div className="border-l border-[var(--line)] pl-6">
                    <div>
  <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
    STARTED AS
  </p>

  <h4 className="mt-2 text-xl font-semibold">
    Works Supervisor &amp; PM Assistant
  </h4>

  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
    Supported projects across preconstruction, field supervision,
    budgeting, scheduling, procurement, QA/QC, RFIs, submittals,
    contractor coordination, and project closeout.
  </p>
</div>

                    <div className="my-6 flex items-center gap-4">
                      <div className="h-px flex-1 bg-[var(--line)]" />
                      <span className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
                        PROMOTED
                      </span>
                      <span>↓</span>
                    </div>

                    <div>
  <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
    JAN 2026
  </p>

  <h4 className="mt-2 text-2xl font-semibold">
    Production Lead
  </h4>

  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
    Expanded into responsibility for daily site production, workforce
    coordination, materials, procurement, scheduling, and field
    resources for a team of more than 60 personnel.
  </p>
</div>
                  </div>

                  <p className="mt-8 max-w-2xl text-base leading-7">
                    Progressed from field supervision and project-management
                    support into responsibility for daily construction
                    production, schedules, procurement, field resources, and
                    coordination of a workforce of more than 60 personnel.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "60+ PERSONNEL",
                      "FIELD LEADERSHIP",
                      "PRECONSTRUCTION",
                      "PROCUREMENT",
                      "SCHEDULING",
                      "QA / QC",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--line)] px-3 py-2 text-[10px] tracking-[0.14em] text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>

          </div>
        </div>
      </section>
            {/* Selected Projects */}
      <section
        id="projects"
        className="border-t border-[var(--line)] px-6 py-14 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-10 md:gap-16 lg:grid-cols-12">

          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
             03 / SELECTED PROJECTS
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
              Selected projects that shaped my experience across field
              supervision, preconstruction, project management, and
              production leadership.
            </p>
          </div>

          {/* Projects */}
          <div className="lg:col-span-9">

            <div className="mb-10 md:mb-16">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                PANAMA / HIGH-RISE CONSTRUCTION
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                PROJECTS THAT
                <br />
                BUILT EXPERIENCE.
              </h2>
            </div>

            {/* Mini Design House */}
            <article className="group border-t border-[var(--line)] py-9 md:py-12">
              <div className="grid gap-10 md:grid-cols-[minmax(250px,1fr)_minmax(0,1.45fr)] lg:grid-cols-[minmax(280px,1fr)_minmax(0,1.5fr)] xl:grid-cols-[1fr_2fr]">

                <div>
  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
    01 / PROJECT CLOSEOUT
  </p>

  <p className="mt-3 text-sm text-[var(--muted)]">
    PANAMA CITY, PANAMA
  </p>

  <div className="mt-7 flex items-start justify-between gap-4 lg:hidden">
    <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:text-[2.1rem] xl:text-[1.85rem]">
      PH MINI DESIGN HOUSE 57
    </h3>
    <span className="shrink-0 text-2xl">↗</span>
  </div>

  <p className="mt-7 max-w-xs text-sm leading-7 text-[var(--muted)] md:mt-8 md:max-w-none xl:max-w-xs">
    Helped lead the completion and handover of a 20-story residential
    project after the original contractor exited the project, working
    under a limited closeout budget and tight delivery schedule.
  </p>

  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6 md:max-w-none xl:max-w-xs">
    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        SCALE
      </p>
     <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        20 Stories
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        ROLE
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
        Works Supervisor / PM Assistant
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        FOCUS
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
        Supervision / Closeout / Delivery
      </p>
    </div>
  </div>
</div>

<div>
 <div className="hidden items-start justify-between xl:flex xl:-mx-24">
  <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:translate-x-4 md:text-[2.15rem] lg:text-[2.35rem] xl:translate-x-10 xl:whitespace-nowrap xl:text-5xl">
    PH MINI DESIGN HOUSE 57
  </h3>

  <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
    ↗
  </span>
</div>

{/* MDH Gallery */}
<div className="mt-7 lg:hidden">
  <div className="flex w-full justify-center overflow-hidden">
    <img src={mdhImages[mdhImage].src} alt={`PH Mini Design House 57 — ${mdhImages[mdhImage].label}`} className="max-h-[62vh] w-full object-contain" />
  </div>
  <div className="mt-4 flex items-end justify-between gap-4">
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)]">{String(mdhImage + 1).padStart(2, "0")} / 04</p>
      <p className="mt-1 break-words text-lg font-semibold leading-tight tracking-[0.08em]">{mdhImages[mdhImage].label}</p>
    </div>
    <div className="flex shrink-0 gap-2">
      <button type="button" aria-label="Previous PH Mini Design House 57 image" onClick={() => { setMdhManualPause(true); setMdhDirection("left"); setMdhPreviousImage(mdhImage); setMdhImage((mdhImage - 1 + mdhImages.length) % mdhImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">←</button>
      <button type="button" aria-label="Next PH Mini Design House 57 image" onClick={() => { setMdhManualPause(true); setMdhDirection("right"); setMdhPreviousImage(mdhImage); setMdhImage((mdhImage + 1) % mdhImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">→</button>
    </div>
  </div>
</div>

<div className="mt-10 hidden lg:block">
 <div className="relative grid grid-cols-[0.85fr_1.7fr_0.85fr] items-center xl:-mx-24">

    {/* Previous */}
    <button
      type="button"
      onClick={() => {
        setMdhManualPause(true);
  setMdhDirection("left");
  setMdhPreviousImage(mdhImage);
  setMdhImage(
    (mdhImage - 1 + mdhImages.length) % mdhImages.length
  );
}}
      className="group relative z-10 -mr-8 translate-x-3 text-left xl:-mr-24 xl:translate-x-10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={
            mdhImages[
              (mdhImage - 1 + mdhImages.length) % mdhImages.length
            ].src
          }
          alt={
            mdhImages[
              (mdhImage - 1 + mdhImages.length) % mdhImages.length
            ].label
          }
          className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div
  aria-hidden="true"
  className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent ${
    theme === "dark"
      ? "to-[var(--background)]/30"
      : "to-[var(--background)]/70"
  }`}
/>
      </div>

      <p className="relative z-30 mt-3 text-[9px] tracking-[0.16em] text-[var(--muted)]">
        {String(
          ((mdhImage - 1 + mdhImages.length) % mdhImages.length) + 1
        ).padStart(2, "0")}{" "}
        /{" "}
        {
          mdhImages[
            (mdhImage - 1 + mdhImages.length) % mdhImages.length
          ].label
        }
      </p>
    </button>

  {/* Active */}
<div className="relative z-20 mx-auto w-fit">
  <div className="relative h-[clamp(260px,30vw,420px)] 2xl:h-[clamp(260px,42vw,590px)] overflow-hidden shadow-2xl">
    <img
      key={mdhImage}
      src={mdhImages[mdhImage].src}
      alt={`PH Mini Design House 57 — ${mdhImages[mdhImage].label}`}
      className={`h-full w-auto max-w-none object-contain ${
  mdhDirection === "right"
  ? "animate-[mdhFromRight_1300ms_cubic-bezier(0.22,1,0.36,1)]"
  : "animate-[mdhFromLeft_1300ms_cubic-bezier(0.22,1,0.36,1)]"
}`}
    />
    {mdhPreviousImage !== null && (
  <img
    key={`outgoing-${mdhPreviousImage}-${mdhImage}`}
    src={mdhImages[mdhPreviousImage].src}
    alt=""
    aria-hidden="true"
    onAnimationEnd={() => setMdhPreviousImage(null)}
    className={`pointer-events-none absolute inset-0 z-30 h-full w-full object-contain ${
      mdhDirection === "right"
        ? "animate-[mdhOutLeft_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
        : "animate-[mdhOutRight_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
    }`}
  />
)}
  </div>

  <div className="mt-4 flex w-full items-end justify-between">
    <div className="text-left">
      <p className="text-xs font-medium tracking-[0.18em] text-[var(--muted)]">
        {String(mdhImage + 1).padStart(2, "0")} / 04
      </p>

      <p className="mt-1 text-xl font-semibold tracking-[0.1em]">
        {mdhImages[mdhImage].label}
      </p>
    </div>

    <div className="flex gap-2">
      <button
        type="button"
       onClick={() => {
  setMdhManualPause(true);
  setMdhDirection("left");
  setMdhPreviousImage(mdhImage);
  setMdhImage(
    (mdhImage - 1 + mdhImages.length) % mdhImages.length
  );
}}
        aria-label="Previous Mini Design House image"
        className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        ←
      </button>

      <button
        type="button"
       onClick={() => {
  setMdhManualPause(true);
  setMdhDirection("right");
  setMdhPreviousImage(mdhImage);
  setMdhImage((mdhImage + 1) % mdhImages.length);
}}
        aria-label="Next Mini Design House image"
        className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        →
      </button>
    </div>
  </div>
</div>

    {/* Next */}
    <button
      type="button"
     onClick={() => {
  setMdhManualPause(true);
  setMdhDirection("right");
  setMdhPreviousImage(mdhImage);
  setMdhImage((mdhImage + 1) % mdhImages.length);
}}
     className="group relative z-10 -ml-10 -translate-x-4 text-left xl:-ml-24 xl:-translate-x-10"
    >
     <div className="aspect-[4/5] overflow-hidden">
        <img
          src={mdhImages[(mdhImage + 1) % mdhImages.length].src}
          alt={mdhImages[(mdhImage + 1) % mdhImages.length].label}
          className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <p className="relative z-30 mt-3 text-right text-[9px] tracking-[0.16em] text-[var(--muted)]">
        {String(((mdhImage + 1) % mdhImages.length) + 1).padStart(2, "0")}{" "}
        / {mdhImages[(mdhImage + 1) % mdhImages.length].label}
      </p>
    </button>

  </div>
</div>
                </div>
              </div>
            </article>

            {/* Amazonas */}
            <article className="group border-t border-[var(--line)] py-9 md:py-12">
              <div className="grid gap-10 md:grid-cols-[minmax(250px,1fr)_minmax(0,1.45fr)] lg:grid-cols-[minmax(280px,1fr)_minmax(0,1.5fr)] xl:grid-cols-[1fr_2fr]">

                <div>
  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
    02 / PRECONSTRUCTION + FOUNDATIONS
  </p>

  <p className="mt-3 text-sm text-[var(--muted)]">
    PANAMA CITY, PANAMA
  </p>

  <div className="mt-7 flex items-start justify-between gap-4 lg:hidden">
    <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:text-[2.1rem] xl:text-[1.85rem]">
      PH AMAZONAS
    </h3>
    <span className="shrink-0 text-2xl">↗</span>
  </div>

  <p className="mt-7 max-w-xs text-sm leading-7 text-[var(--muted)] md:mt-8 md:max-w-none xl:max-w-xs">
    Supported budgeting and project kickoff before supervising piling and
    foundation activities, including coordination of concrete, reinforcing
    steel, earthwork, and surrounding stakeholders.
  </p>

  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6 md:max-w-none xl:max-w-xs">
    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        SCALE
      </p>
     <p className="mt-2 text-base leading-7 text-[var(--muted)]">
        32 Stories
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        ROLE
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
        PM Assistant / Works Supervisor
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
        FOCUS
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
        Budgeting / Bidding / Piling
      </p>
    </div>
  </div>
</div>

<div>
 <div className="hidden items-start justify-between xl:flex xl:-mx-24">
  <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:translate-x-4 md:text-[2.15rem] lg:text-[2.35rem] xl:translate-x-10 xl:whitespace-nowrap xl:text-5xl">
    PH AMAZONAS
  </h3>

  <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
    ↗
  </span>
</div>

{/* Amazonas Gallery */}
<div className="mt-7 lg:hidden">
  <div className="flex w-full justify-center overflow-hidden">
    <img src={amazonasImages[amazonasImage].src} alt={`PH Amazonas — ${amazonasImages[amazonasImage].label}`} className="max-h-[62vh] w-full object-contain" />
  </div>
  <div className="mt-4 flex items-end justify-between gap-4">
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)]">{String(amazonasImage + 1).padStart(2, "0")} / 04</p>
      <p className="mt-1 break-words text-lg font-semibold leading-tight tracking-[0.08em]">{amazonasImages[amazonasImage].label}</p>
    </div>
    <div className="flex shrink-0 gap-2">
      <button type="button" aria-label="Previous PH Amazonas image" onClick={() => { setAmazonasManualPause(true); setAmazonasDirection("left"); setAmazonasPreviousImage(amazonasImage); setAmazonasImage((amazonasImage - 1 + amazonasImages.length) % amazonasImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">←</button>
      <button type="button" aria-label="Next PH Amazonas image" onClick={() => { setAmazonasManualPause(true); setAmazonasDirection("right"); setAmazonasPreviousImage(amazonasImage); setAmazonasImage((amazonasImage + 1) % amazonasImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">→</button>
    </div>
  </div>
</div>

<div className="mt-10 hidden lg:block">
 <div className="relative grid grid-cols-[0.85fr_1.7fr_0.85fr] items-center xl:-mx-24">

    {/* Previous */}
    <button
      type="button"
      onClick={() => {
        setAmazonasManualPause(true);
  setAmazonasDirection("left");
  setAmazonasPreviousImage(amazonasImage);
  setAmazonasImage(
    (amazonasImage - 1 + amazonasImages.length) % amazonasImages.length
  );
}}
      className="group relative z-10 -mr-8 translate-x-3 text-left xl:-mr-24 xl:translate-x-10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={
            amazonasImages[
              (amazonasImage - 1 + amazonasImages.length) % amazonasImages.length
            ].src
          }
          alt={
            amazonasImages[
              (amazonasImage - 1 + amazonasImages.length) % amazonasImages.length
            ].label
          }
          className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div
  aria-hidden="true"
  className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent ${
    theme === "dark"
      ? "to-[var(--background)]/30"
      : "to-[var(--background)]/70"
  }`}
/>
      </div>

      <p className="relative z-40 mt-3 text-[9px] tracking-[0.16em] text-[var(--muted)]">
        {String(
          ((amazonasImage - 1 + amazonasImages.length) % amazonasImages.length) + 1
        ).padStart(2, "0")}{" "}
        /{" "}
        {
          amazonasImages[
            (amazonasImage - 1 + amazonasImages.length) % amazonasImages.length
          ].label
        }
      </p>
    </button>

  {/* Active */}
<div className="relative z-20 mx-auto w-[clamp(280px,30vw,420px)] 2xl:w-[clamp(300px,42vw,590px)]">
  <div className="relative flex h-[clamp(260px,30vw,420px)] 2xl:h-[clamp(260px,42vw,590px)] w-full items-center justify-center overflow-visible">
    <img
      key={amazonasImage}
      src={amazonasImages[amazonasImage].src}
      alt={`PH Amazonas — ${amazonasImages[amazonasImage].label}`}
      className={`h-full w-auto max-w-none object-contain shadow-2xl ${
  amazonasDirection === "right"
  ? "animate-[mdhFromRight_1300ms_cubic-bezier(0.22,1,0.36,1)]"
  : "animate-[mdhFromLeft_1300ms_cubic-bezier(0.22,1,0.36,1)]"
}`}
    />
    {amazonasPreviousImage !== null && (
  <img
    key={`outgoing-${amazonasPreviousImage}-${amazonasImage}`}
    src={amazonasImages[amazonasPreviousImage].src}
    alt=""
    aria-hidden="true"
    onAnimationEnd={() => setAmazonasPreviousImage(null)}
    className={`pointer-events-none absolute left-1/2 top-0 z-30 h-full w-auto max-w-none -translate-x-1/2 object-contain shadow-2xl ${
      amazonasDirection === "right"
        ? "animate-[mdhOutLeft_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
        : "animate-[mdhOutRight_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
    }`}
  />
)}
  </div>

<div
  className="mx-auto mt-4 flex items-end justify-between"
  style={{
    width:
      amazonasImage === 2
        ? "100%"
        : amazonasImage === 0
        ? "59%"
        : "73.75%",
  }}
>
  <div className="text-left">
    <p className="text-xs font-medium tracking-[0.18em] text-[var(--muted)]">
      {String(amazonasImage + 1).padStart(2, "0")} / 04
    </p>

    <p className="mt-1 max-w-[230px] text-xl font-semibold leading-tight tracking-[0.1em]">
  {amazonasImage === 0 ? (
    <>
      EXISTING
      <br />
      CONDITIONS
    </>
  ) : (
    amazonasImages[amazonasImage].label
  )}
</p>
  </div>

    <div className="flex gap-2">
      <button
        type="button"
       onClick={() => {
  setAmazonasManualPause(true);
  setAmazonasDirection("left");
  setAmazonasPreviousImage(amazonasImage);
  setAmazonasImage(
    (amazonasImage - 1 + amazonasImages.length) % amazonasImages.length
  );
}}
        aria-label="Previous Amazonas image"
        className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        ←
      </button>

      <button
        type="button"
       onClick={() => {
  setAmazonasManualPause(true);
  setAmazonasDirection("right");
  setAmazonasPreviousImage(amazonasImage);
  setAmazonasImage((amazonasImage + 1) % amazonasImages.length);
}}
        aria-label="Next Amazonas image"
        className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        →
      </button>
    </div>
  </div>
</div>

    {/* Next */}
    <button
      type="button"
     onClick={() => {
  setAmazonasManualPause(true);
  setAmazonasDirection("right");
  setAmazonasPreviousImage(amazonasImage);
  setAmazonasImage((amazonasImage + 1) % amazonasImages.length);
}}
     className="group relative z-10 -ml-10 -translate-x-4 text-left xl:-ml-24 xl:-translate-x-10"
    >
     <div className="aspect-[4/5] overflow-hidden">
        <img
          src={amazonasImages[(amazonasImage + 1) % amazonasImages.length].src}
          alt={amazonasImages[(amazonasImage + 1) % amazonasImages.length].label}
          className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <p className="relative z-40 mt-3 text-right text-[9px] tracking-[0.16em] text-[var(--muted)]">
        {String(((amazonasImage + 1) % amazonasImages.length) + 1).padStart(2, "0")}{" "}
        / {amazonasImages[(amazonasImage + 1) % amazonasImages.length].label}
      </p>
    </button>

  </div>
</div>
                </div>
              </div>
            </article>

            {/* The Walker */}
            <article className="group border-y border-[var(--line)] py-9 md:py-12">
              <div className="grid gap-10 md:grid-cols-[minmax(250px,1fr)_minmax(0,1.45fr)] lg:grid-cols-[minmax(280px,1fr)_minmax(0,1.5fr)] xl:grid-cols-[1fr_2fr]">

                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    03 / PRODUCTION LEADERSHIP
                  </p>

                  <p className="mt-3 text-sm text-[var(--muted)]">
                    PANAMA CITY, PANAMA
                  </p>

                  <div className="mt-7 flex items-start justify-between gap-4 lg:hidden">
                    <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:text-[2.1rem] xl:text-[1.85rem]">
                      PH THE WALKER
                    </h3>
                    <span className="shrink-0 text-2xl">↗</span>
                  </div>

                  <p className="mt-7 max-w-xs text-sm leading-7 text-[var(--muted)] md:mt-8 md:max-w-none xl:max-w-xs">
                    Progressed from preconstruction and field supervision into
                    production leadership, coordinating structural activities,
                    procurement, schedules, field resources, and a workforce of
                    more than 60 personnel.
                  </p>

                  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6 md:max-w-none xl:max-w-xs">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
                        SCALE
                      </p>
                      <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                        35 Stories
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
                        ROLE
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        PM Assistant → Production Lead
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold tracking-[0.16em] text-[var(--foreground)]">
                        FOCUS
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        Structure / Procurement / Leadership
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="hidden items-start justify-between xl:flex xl:-mx-24">
                    <h3 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.04em] md:translate-x-4 md:text-[2.15rem] lg:text-[2.35rem] xl:translate-x-10 xl:whitespace-nowrap xl:text-5xl">
                      PH THE WALKER
                    </h3>

                    <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  {/* Walker Gallery */}
<div className="mt-7 lg:hidden">
  <div className="flex w-full justify-center overflow-hidden">
    <img src={walkerImages[walkerImage].src} alt={`PH The Walker — ${walkerImages[walkerImage].label}`} className="max-h-[62vh] w-full object-contain" />
  </div>
  <div className="mt-4 flex items-end justify-between gap-4">
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)]">{String(walkerImage + 1).padStart(2, "0")} / 05</p>
      <p className="mt-1 break-words text-lg font-semibold leading-tight tracking-[0.08em]">{walkerImages[walkerImage].label}</p>
    </div>
    <div className="flex shrink-0 gap-2">
      <button type="button" aria-label="Previous PH The Walker image" onClick={() => { setWalkerManualPause(true); setWalkerDirection("left"); setWalkerPreviousImage(walkerImage); setWalkerImage((walkerImage - 1 + walkerImages.length) % walkerImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">←</button>
      <button type="button" aria-label="Next PH The Walker image" onClick={() => { setWalkerManualPause(true); setWalkerDirection("right"); setWalkerPreviousImage(walkerImage); setWalkerImage((walkerImage + 1) % walkerImages.length); }} className="flex h-10 w-10 items-center justify-center border border-[var(--line)]">→</button>
    </div>
  </div>
</div>

                  <div className="mt-10 hidden lg:block">
                    <div className="relative grid grid-cols-[0.85fr_1.7fr_0.85fr] items-center xl:-mx-24">

                      {/* Previous */}
                      <button
                        type="button"
                        onClick={() => {
                          setWalkerManualPause(true);
                          setWalkerDirection("left");
                          setWalkerPreviousImage(walkerImage);
                          setWalkerImage(
                            (walkerImage - 1 + walkerImages.length) % walkerImages.length
                          );
                        }}
                        className="group relative z-10 -mr-8 translate-x-3 text-left xl:-mr-24 xl:translate-x-10"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img
                            src={
                              walkerImages[
                                (walkerImage - 1 + walkerImages.length) % walkerImages.length
                              ].src
                            }
                            alt={
                              walkerImages[
                                (walkerImage - 1 + walkerImages.length) % walkerImages.length
                              ].label
                            }
                            className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div
                            aria-hidden="true"
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent ${
                              theme === "dark"
                                ? "to-[var(--background)]/30"
                                : "to-[var(--background)]/70"
                            }`}
                          />
                        </div>

                        <p className="relative z-40 mt-3 text-[9px] tracking-[0.16em] text-[var(--muted)]">
                          {String(
                            ((walkerImage - 1 + walkerImages.length) % walkerImages.length) + 1
                          ).padStart(2, "0")} / {
                            walkerImages[
                              (walkerImage - 1 + walkerImages.length) % walkerImages.length
                            ].label
                          }
                        </p>
                      </button>

                      {/* Active */}
                      <div className="relative z-20 mx-auto w-[clamp(280px,30vw,420px)] 2xl:w-[clamp(300px,42vw,590px)]">
                        <div className="relative flex h-[clamp(260px,30vw,420px)] 2xl:h-[clamp(260px,42vw,590px)] w-full items-center justify-center overflow-visible">
                          <img
                            key={walkerImage}
                            src={walkerImages[walkerImage].src}
                            alt={`PH The Walker — ${walkerImages[walkerImage].label}`}
                            className={`h-full w-auto max-w-none object-contain shadow-2xl ${
                              walkerDirection === "right"
                                ? "animate-[mdhFromRight_1300ms_cubic-bezier(0.22,1,0.36,1)]"
                                : "animate-[mdhFromLeft_1300ms_cubic-bezier(0.22,1,0.36,1)]"
                            }`}
                          />

                          {walkerPreviousImage !== null && (
                            <img
                              key={`walker-outgoing-${walkerPreviousImage}-${walkerImage}`}
                              src={walkerImages[walkerPreviousImage].src}
                              alt=""
                              aria-hidden="true"
                              onAnimationEnd={() => setWalkerPreviousImage(null)}
                              className={`pointer-events-none absolute left-1/2 top-0 z-30 h-full w-auto max-w-none -translate-x-1/2 object-contain shadow-2xl ${
                                walkerDirection === "right"
                                  ? "animate-[mdhOutLeft_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                                  : "animate-[mdhOutRight_1300ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                              }`}
                            />
                          )}
                        </div>

                        <div
  className="mx-auto mt-4 flex items-end justify-between"
  style={{
    width:
      walkerImage === 1
        ? "81.25%"
        : walkerImage === 3
        ? "100%"
        : "75%",
  }}
>
                          <div className="text-left">
                            <p className="text-xs font-medium tracking-[0.18em] text-[var(--muted)]">
                              {String(walkerImage + 1).padStart(2, "0")} / {String(walkerImages.length).padStart(2, "0")}
                            </p>

                            <p className="mt-1 max-w-[230px] text-xl font-semibold leading-tight tracking-[0.1em]">
                              {walkerImage === 2 ? (
                                <>
                                  FIELD
                                  <br />
                                  LEADERSHIP
                                </>
                              ) : (
                                walkerImages[walkerImage].label
                              )}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setWalkerManualPause(true);
                                setWalkerDirection("left");
                                setWalkerPreviousImage(walkerImage);
                                setWalkerImage(
                                  (walkerImage - 1 + walkerImages.length) % walkerImages.length
                                );
                              }}
                              aria-label="Previous The Walker image"
                              className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                            >
                              ←
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setWalkerManualPause(true);
                                setWalkerDirection("right");
                                setWalkerPreviousImage(walkerImage);
                                setWalkerImage((walkerImage + 1) % walkerImages.length);
                              }}
                              aria-label="Next The Walker image"
                              className="flex h-9 w-9 items-center justify-center border border-[var(--line)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                            >
                              →
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Next */}
                      <button
                        type="button"
                        onClick={() => {
                          setWalkerManualPause(true);
                          setWalkerDirection("right");
                          setWalkerPreviousImage(walkerImage);
                          setWalkerImage((walkerImage + 1) % walkerImages.length);
                        }}
                        className="group relative z-10 -ml-10 -translate-x-4 text-left xl:-ml-24 xl:-translate-x-10"
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={walkerImages[(walkerImage + 1) % walkerImages.length].src}
                            alt={walkerImages[(walkerImage + 1) % walkerImages.length].label}
                            className="h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>

                        <p className="relative z-40 mt-3 text-right text-[9px] tracking-[0.16em] text-[var(--muted)]">
                          {String(((walkerImage + 1) % walkerImages.length) + 1).padStart(2, "0")} / {walkerImages[(walkerImage + 1) % walkerImages.length].label}
                        </p>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
                  {/* AI + Construction */}
      <section
        id="ai"
        className="relative overflow-hidden border-t border-[var(--line)]"
      >
        {/* Full-section living network background */}
        <video
          key={theme}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[108%] w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ${
            theme === "dark" ? "opacity-85" : "opacity-80"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src={
              theme === "dark"
                ? "/videos/ai-network-dark.mp4"
                : "/videos/ai-network-light.mp4"
            }
            type="video/mp4"
          />
        </video>

        {/* Theme-aware readability veil */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transition-colors duration-700 ${
            theme === "dark" ? "bg-[#111312]/65" : "bg-[#f1efe9]/58"
          }`}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(23,25,24,0.88) 0%, rgba(23,25,24,0.36) 22%, rgba(23,25,24,0.30) 72%, rgba(23,25,24,0.88) 100%)"
                : "linear-gradient(180deg, rgba(241,239,233,0.90) 0%, rgba(241,239,233,0.48) 22%, rgba(241,239,233,0.42) 72%, rgba(241,239,233,0.92) 100%)",
          }}
        />

        <div className="relative z-10 px-6 py-14 md:px-10 md:py-20 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Section label */}
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
                04 / AI + CONSTRUCTION
              </p>
              <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
                An evolving space for projects, AI agents, case studies, research,
                and ideas exploring technology across the built environment.
              </p>
              <div className="mt-10 hidden border-t border-[var(--line)]/70 pt-5 lg:block">
                <p className="text-[10px] tracking-[0.18em] text-[var(--muted)]">
                  STATUS / IN DEVELOPMENT
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  This section is being built.
                </p>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-9">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                EXPLORING WHAT&apos;S POSSIBLE
              </p>

              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                THERE&apos;S ALWAYS
                <br />
                A BETTER WAY.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:mt-8 md:text-lg md:leading-8">
                My interest in construction technology comes from a principle
                I&apos;ve carried from the field: there&apos;s always a better way.
                This space will document how I&apos;m exploring AI, automation, BIM,
                and emerging technologies to improve how projects are planned,
                coordinated, managed, and delivered.
              </p>

              {/* Central identity */}
              <div className="my-10 flex justify-center md:my-12">
                <div className="text-center">
                  <p className="text-[10px] font-medium tracking-[0.34em] text-[#b7975d]">
                    THE NEXT LAYER
                  </p>
                  <h3 className="mt-3 text-[2.15rem] font-semibold leading-none tracking-[-0.055em] sm:whitespace-nowrap sm:text-[2.4rem] md:text-[clamp(2.4rem,4.6vw,5.2rem)] md:tracking-[-0.06em]">
                    AI + CONSTRUCTION
                  </h3>
                  <div className="mx-auto mt-4 h-px w-20 bg-[#b7975d]/80" />
                </div>
              </div>

              {/* Future destinations */}
              <div className="grid border-l border-t border-[var(--line)]/80 md:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "PROJECTS",
                    description: "Academic and independent work across construction, management, technology, AI, and BIM.",
                  },
                  {
                    number: "02",
                    title: "AI AGENTS",
                    description: "Intelligent agents and automated workflows designed around construction-management processes.",
                  },
                  {
                    number: "03",
                    title: "CASE STUDIES",
                    description: "Real construction problems explored through process improvement, technology, and automation.",
                  },
                  {
                    number: "04",
                    title: "RESEARCH + WRITING",
                    description: "Research, observations, and perspectives on AI, construction technology, and industry change.",
                  },
                ].map((area) => (
                  <a
                    key={area.number}
                    href="#ai"
                    aria-label={`${area.title} — coming soon`}
                    className={`group relative min-h-[205px] border-b border-r border-[var(--line)]/80 p-6 backdrop-blur-[2px] transition-all duration-500 md:min-h-[220px] md:p-7 ${
                      theme === "dark"
                        ? "bg-[#171918]/30 hover:bg-[#171918]/55"
                        : "bg-[#f1efe9]/28 hover:bg-[#f1efe9]/58"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <p className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
                        {area.number} / IN DEVELOPMENT
                      </p>
                      <span className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                    <div className="mt-7 flex flex-col gap-3">
                      <h4 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                        {area.title}
                      </h4>
                      <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                        {area.description}
                      </p>
                      <p className="mt-1 text-[10px] tracking-[0.18em] text-[#b7975d]">
                        COMING SOON
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>
            {/* Contact */}
      <section
        id="contact"
        className="border-t border-[var(--line)] px-6 pt-14 md:px-10 md:pt-32 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-12">

          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              05 / CONTACT
            </p>
          </div>

          {/* Main contact */}
          <div className="lg:col-span-9">
            <p className="text-xs tracking-[0.18em] text-[#b7975d]">
              LET&apos;S CONNECT
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              LET&apos;S BUILD TOGETHER
<br />
WHAT&apos;S NEXT.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Whether you want to talk construction, technology, new ideas, or future opportunities, I’d be glad to connect. Let’s start a conversation and see where it leads.
            </p>

            {/* Contact links */}
            <div className="mt-12 border-t border-[var(--line)]">
              <a
  href="mailto:juandacarranza@gmail.com"
  className="group flex items-center justify-between border-b border-[var(--line)] px-3 py-6 transition-colors duration-300 hover:bg-[var(--foreground)]/[0.035]"
>
  <div className="transition-transform duration-300 group-hover:translate-x-1">
    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
      EMAIL / PRIMARY
    </p>
    <p className="mt-2 break-all text-xl md:text-2xl">
      juandacarranza@gmail.com
    </p>
  </div>

  <span className="text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7975d]">
    ↗
  </span>
</a>
<a
  href="mailto:jcarra47@asu.edu"
  className="group flex items-center justify-between border-b border-[var(--line)] px-3 py-6 transition-colors duration-300 hover:bg-[var(--foreground)]/[0.035]"
>
  <div className="transition-transform duration-300 group-hover:translate-x-1">
    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
      EMAIL / ASU
    </p>
    <p className="mt-2 break-all text-xl md:text-2xl">
      jcarra47@asu.edu
    </p>
  </div>

  <span className="text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7975d]">
    ↗
  </span>
</a>

              <a
                href="https://linkedin.com/in/jdca3011"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[var(--line)] px-3 py-6 transition-colors duration-300 hover:bg-[var(--foreground)]/[0.035]"
              >
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    LINKEDIN
                  </p>
                  <p className="mt-2 break-all text-xl md:text-2xl">
                    linkedin.com/in/jdca3011
                  </p>
                </div>

                <span className="text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7975d]">
                  ↗
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[var(--line)] px-3 py-6 transition-colors duration-300 hover:bg-[var(--foreground)]/[0.035]"
              >
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    RÉSUMÉ
                  </p>
                  <p className="mt-2 break-all text-xl md:text-2xl">
                    View résumé
                  </p>
                </div>

                <span className="text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7975d]">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative mt-16 flex flex-col gap-6 border-t border-[var(--line)] py-8 text-xs tracking-[0.14em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div aria-hidden="true" className="absolute -top-px left-0 h-px w-20 bg-[#b7975d]" />
          <p>© 2026 JUAN D. CARRANZA</p>

          <div className="flex flex-wrap gap-6">
            <span>PANAMA / USA</span>
          </div>
        </footer>
      </section>
      <a
  href="#top"
  aria-label="Back to top"
  className="fixed bottom-3 left-3 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)]/65 text-sm text-[var(--foreground)] opacity-65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:opacity-100 md:bottom-6 md:left-6 md:h-11 md:w-11 md:text-lg md:opacity-100"
>
  ↑
</a>
    </main>
  );
}