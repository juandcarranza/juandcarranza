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
  return (
    <main
  id="top"
  data-theme={theme}
  className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500"
>
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--background)]/80 px-6 py-5 backdrop-blur-md md:px-10 lg:px-16">
       <a
  href="#"
  className="text-lg font-semibold tracking-[-0.02em] md:text-xl"
>
  JUAN D. CARRANZA
</a>

        <div className="hidden items-center gap-8 text-xs tracking-[0.12em] md:flex">
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
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-[var(--line)]">

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
        <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col px-6 py-8 text-[var(--foreground)] md:px-10 md:py-10 lg:px-16">

          {/* Top metadata */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] text-[#b4b5b1]">
              CIVIL ENGINEER / ASU
            </p>

            <p className="text-[10px] tracking-[0.2em] text-[#b4b5b1]">
              PANAMA / USA
            </p>
          </div>

          {/* Main statement */}
          <div className="my-auto py-12">
            <h1 className="max-w-5xl text-[clamp(3.3rem,7.2vw,8rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
              <span className="block">CONSTRUCTION.</span>
              <span className="block">MANAGEMENT.</span>
              <span className="block">TECHNOLOGY.</span>
            </h1>

            {/* Better Together */}
            <div className="mt-8 border-l-2 border-[#b7975d] pl-5 md:mt-10">
              <p className="text-base tracking-[0.05em] text-[#b4b5b1] md:text-lg">
                GREAT ON THEIR OWN.
              </p>

              <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                BETTER TOGETHER.
              </p>
            </div>

            {/* Intro */}
            <p className="mt-8 max-w-md text-sm leading-6 text-[#b4b5b1]">
              Civil Engineer &amp; M.S. Construction Management and Technology
              Student at Arizona State University.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="flex items-end justify-between">
            <a
              href="#about"
              className="text-[9px] tracking-[0.2em] text-[#b4b5b1]"
            >
              SCROLL ↓
            </a>

            <div className="text-right text-[9px] tracking-[0.18em] text-[#b4b5b1]">
              <p>CONSTRUCTION / MANAGEMENT</p>
              <p className="mt-1">TECHNOLOGY / 2026</p>
            </div>
          </div>

        </div>
      </section>
                  {/* About */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-[var(--line)] px-6 py-20 md:px-10 md:py-24 lg:px-16"
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

            <div
  onMouseEnter={() => setPortraitMode("field")}
onMouseLeave={() => setPortraitMode("professional")}
  className="relative mt-10 hidden aspect-[4/5] overflow-hidden lg:block"
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
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              BUILT THROUGH
              <br />
              EXPERIENCE.
              <br />
              DRIVEN BY WHAT&apos;S NEXT.
            </h2>

            {/* Panama / USA story */}
            <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-7 md:grid-cols-2">
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  PANAMA
                </p>

                <p className="mt-4 max-w-md text-base leading-7">
                  My path in construction began with Civil Engineering and
                  developed through hands-on experience across high-rise
                  construction, preconstruction, field supervision, project
                  coordination, procurement, scheduling, and closeout.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  UNITED STATES
                </p>

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
                <div className="group relative min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-6 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    01
                  </p>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
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
                <div className="group relative min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-6 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    02
                  </p>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
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
                <div className="group relative min-h-[280px] overflow-hidden border-b border-r border-[var(--line)] p-6 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                  <p className="text-xs tracking-[0.18em] opacity-60">
                    03
                  </p>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
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
        className="relative overflow-hidden border-t border-[var(--line)] px-6 py-20 md:px-10 md:py-24 lg:px-16"
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

            <div className="relative mt-12 hidden pl-6 lg:block">
              <div className="absolute bottom-0 left-[4px] top-2 w-px bg-[var(--line)]" />

              <div className="relative pb-12">
                <span className="absolute -left-6 top-1 h-[9px] w-[9px] rounded-full bg-[var(--muted)]" />
                <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  2017
                </p>
                <p className="mt-2 text-sm">
                  First field experience
                </p>
              </div>

              <div className="relative pb-12">
                <span className="absolute -left-6 top-1 h-[9px] w-[9px] rounded-full bg-[var(--muted)]" />
                <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  2024
                </p>
                <p className="mt-2 text-sm">
                  Works Supervisor
                </p>
              </div>

              <div className="relative pb-12">
                <span className="absolute -left-6 top-1 h-[9px] w-[9px] rounded-full bg-[var(--foreground)]" />
                <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  2026
                </p>
                <p className="mt-2 text-sm">
                  Production Lead
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-6 top-1 h-[9px] w-[9px] rounded-full bg-[var(--foreground)]" />
                <p className="text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  NOW
                </p>
                <p className="mt-2 text-sm">
                  Project Manager
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">

            <div className="mb-12">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                PROFESSIONAL JOURNEY
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                FROM THE FIELD
                <br />
                TO LEADING IT.
              </h2>
            </div>

            {/* ICE Electronics */}
            <article className="grid gap-8 border-t border-[var(--line)] py-10 md:grid-cols-[1fr_2fr]">
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
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">

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
        className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-12">

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

            <div className="mb-16">
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
            <article className="group border-t border-[var(--line)] py-12">
              <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

                <div>
  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
    01 / PROJECT CLOSEOUT
  </p>

  <p className="mt-3 text-sm text-[var(--muted)]">
    PANAMA CITY, PANAMA
  </p>

  <p className="mt-8 max-w-xs text-sm leading-7 text-[var(--muted)]">
    Helped lead the completion and handover of a 20-story residential
    project after the original contractor exited the project, working
    under a limited closeout budget and tight delivery schedule.
  </p>

  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6">
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
 <div className="-mx-8 flex items-start justify-between xl:-mx-24">
  <h3 className="translate-x-4 whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] md:text-5xl xl:translate-x-10">
    PH MINI DESIGN HOUSE 57
  </h3>

  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</div>

{/* MDH Gallery */}
<div className="mt-10">
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
  <div className="relative h-[clamp(260px,42vw,590px)] overflow-hidden shadow-2xl">
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
            <article className="group border-t border-[var(--line)] py-12">
              <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

                <div>
  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
    02 / PRECONSTRUCTION + FOUNDATIONS
  </p>

  <p className="mt-3 text-sm text-[var(--muted)]">
    PANAMA CITY, PANAMA
  </p>

  <p className="mt-8 max-w-xs text-sm leading-7 text-[var(--muted)]">
    Supported budgeting and project kickoff before supervising piling and
    foundation activities, including coordination of concrete, reinforcing
    steel, earthwork, and surrounding stakeholders.
  </p>

  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6">
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
 <div className="-mx-8 flex items-start justify-between xl:-mx-24">
  <h3 className="translate-x-4 whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] md:text-5xl xl:translate-x-10">
    PH AMAZONAS
  </h3>

  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</div>

{/* Amazonas Gallery */}
<div className="mt-10">
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
<div className="relative z-20 mx-auto w-[clamp(300px,42vw,590px)]">
  <div className="relative flex h-[clamp(260px,42vw,590px)] w-full items-center justify-center overflow-visible">
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
            <article className="group border-y border-[var(--line)] py-12">
              <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    03 / PRODUCTION LEADERSHIP
                  </p>

                  <p className="mt-3 text-sm text-[var(--muted)]">
                    PANAMA CITY, PANAMA
                  </p>

                  <p className="mt-8 max-w-xs text-sm leading-7 text-[var(--muted)]">
                    Progressed from preconstruction and field supervision into
                    production leadership, coordinating structural activities,
                    procurement, schedules, field resources, and a workforce of
                    more than 60 personnel.
                  </p>

                  <div className="mt-10 max-w-xs space-y-6 border-t border-[var(--line)] pt-6">
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
                  <div className="-mx-8 flex items-start justify-between xl:-mx-24">
                    <h3 className="translate-x-4 whitespace-nowrap text-3xl font-semibold tracking-[-0.04em] md:text-5xl xl:translate-x-10">
                      PH THE WALKER
                    </h3>

                    <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                  {/* Walker Gallery */}
                  <div className="mt-10">
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
                      <div className="relative z-20 mx-auto w-[clamp(300px,42vw,590px)]">
                        <div className="relative flex h-[clamp(260px,42vw,590px)] w-full items-center justify-center overflow-visible">
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
        className="relative overflow-hidden border-t border-[var(--line)] px-6 py-20 md:px-10 md:py-24 lg:px-16"
      >
        {/* Background drafting grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-12">
          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              04 / AI + CONSTRUCTION
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
              An evolving space for projects, AI agents, case studies, research,
              and ideas exploring technology across the built environment.
            </p>

            <div className="mt-10 hidden border-t border-[var(--line)] pt-5 lg:block">
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
            <div className="mb-12">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                EXPLORING WHAT&apos;S POSSIBLE
              </p>

              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                THERE&apos;S ALWAYS
                <br />
                A BETTER WAY.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                My interest in construction technology comes from a principle
                I&apos;ve carried from the field: there&apos;s always a better way.
                This space will document how I&apos;m exploring AI, automation, BIM,
                and emerging technologies to improve how projects are planned,
                coordinated, managed, and delivered.
              </p>
            </div>

            {/* Living network */}
            <div className="relative min-h-[560px] overflow-hidden border border-[var(--line)] md:min-h-[620px]">
              <video
                className={`pointer-events-none absolute left-1/2 top-1/2 h-[106%] w-[106%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-all duration-700 ${
                  theme === "dark"
                    ? "opacity-75 brightness-[0.72] contrast-[1.08] saturate-[0.75]"
                    : "opacity-20 brightness-[1.35] contrast-[0.75] grayscale"
                }`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              >
                <source src="/videos/ai-network-dark.mp4" type="video/mp4" />
              </video>

              {/* Theme/readability treatment */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 ${
                  theme === "dark"
                    ? "bg-[var(--background)]/20"
                    : "bg-[var(--background)]/65"
                }`}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at center, transparent 0%, rgba(23,25,24,0.08) 42%, rgba(23,25,24,0.72) 100%)"
                      : "radial-gradient(circle at center, rgba(241,239,233,0.18) 0%, rgba(241,239,233,0.62) 58%, rgba(241,239,233,0.94) 100%)",
                }}
              />

              {/* Real HTML labels over the generated network */}
              <div className="relative z-10 grid min-h-[560px] grid-cols-2 grid-rows-2 md:min-h-[620px]">
                {[
                  {
                    number: "01",
                    title: "PROJECTS",
                    description: "Academic + independent work",
                    position: "items-start justify-start text-left",
                  },
                  {
                    number: "02",
                    title: "AI AGENTS",
                    description: "Intelligent construction workflows",
                    position: "items-start justify-end text-right",
                  },
                  {
                    number: "03",
                    title: "CASE STUDIES",
                    description: "Problems, processes + better solutions",
                    position: "items-end justify-start text-left",
                  },
                  {
                    number: "04",
                    title: "RESEARCH + WRITING",
                    description: "Ideas, observations + industry change",
                    position: "items-end justify-end text-right",
                  },
                ].map((area) => (
                  <div
                    key={area.number}
                    className={`flex p-6 md:p-8 ${area.position}`}
                  >
                    <div className="max-w-[250px] bg-[var(--background)]/70 p-4 backdrop-blur-[2px] md:p-5">
                      <p className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
                        {area.number} / IN DEVELOPMENT
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] md:text-2xl">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center marker */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#b7975d]/60 bg-[var(--background)]/75 backdrop-blur-sm md:h-24 md:w-24">
                  <div className="text-center">
                    <p className="text-[9px] tracking-[0.2em] text-[var(--muted)]">AI +</p>
                    <p className="mt-1 text-[10px] font-semibold tracking-[0.14em]">CONSTRUCTION</p>
                  </div>
                </div>
              </div>

              {/* Technical corner marks */}
              <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#b7975d]/60" />
              <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#b7975d]/60" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#b7975d]/60" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#b7975d]/60" />
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--line)] pt-5 text-[10px] tracking-[0.16em] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <span>PROJECTS / AGENTS / CASE STUDIES / RESEARCH</span>
              <span className="text-[var(--foreground)]">THIS SECTION IS BEING BUILT.</span>
            </div>
          </div>
        </div>
      </section>
            {/* Contact */}
      <section
        id="contact"
        className="border-t border-[var(--line)] px-6 pt-24 md:px-10 md:pt-32 lg:px-16"
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
            <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
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
            <div className="mt-16 border-t border-[var(--line)]">
              <a
  href="mailto:juandacarranza@gmail.com"
  className="group flex items-center justify-between border-b border-[var(--line)] py-6"
>
  <div>
    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
      EMAIL / PRIMARY
    </p>
    <p className="mt-2 text-xl md:text-2xl">
      juandacarranza@gmail.com
    </p>
  </div>

  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</a>
<a
  href="mailto:jcarra47@asu.edu"
  className="group flex items-center justify-between border-b border-[var(--line)] py-6"
>
  <div>
    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
      EMAIL / ASU
    </p>
    <p className="mt-2 text-xl md:text-2xl">
      jcarra47@asu.edu
    </p>
  </div>

  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
    ↗
  </span>
</a>

              <a
                href="https://linkedin.com/in/jdca3011"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[var(--line)] py-6"
              >
                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    LINKEDIN
                  </p>
                  <p className="mt-2 text-xl md:text-2xl">
                    linkedin.com/in/jdca3011
                  </p>
                </div>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>

              <a
                href="/resume.pdf"
                className="group flex items-center justify-between border-b border-[var(--line)] py-6"
              >
                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    RÉSUMÉ
                  </p>
                  <p className="mt-2 text-xl md:text-2xl">
                    View résumé
                  </p>
                </div>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 flex flex-col gap-6 border-t border-[var(--line)] py-8 text-xs tracking-[0.14em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 JUAN D. CARRANZA</p>

          <div className="flex flex-wrap gap-6">
            <span>PANAMA / USA</span>
            <a href="#" className="text-[var(--foreground)]">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </section>
      <a
  href="#top"
  aria-label="Back to top"
  className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)]/80 text-lg text-[var(--foreground)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
>
  ↑
</a>
    </main>
  );
}