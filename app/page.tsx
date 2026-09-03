export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5 md:px-10 lg:px-16">
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
          aria-label="Toggle color theme"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm"
        >
          ◐
        </button>
      </nav>

           {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col overflow-hidden px-6 py-8 md:px-10 md:py-10 lg:px-16">

        {/* Layered technical background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Large soft light */}
          <div
            className="absolute -right-[15%] -top-[20%] h-[70vw] w-[70vw] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--muted) 0%, transparent 65%)",
            }}
          />

          {/* Architectural vertical line */}
          <div className="absolute bottom-0 right-[18%] top-0 w-px bg-[var(--line)] opacity-60" />

          {/* Architectural horizontal line */}
          <div className="absolute left-0 right-0 top-[38%] h-px bg-[var(--line)] opacity-40" />
        </div>

        {/* Hero top */}
     {/* Hero top */}
<div className="relative z-10 flex items-start justify-end">
  <div className="text-right">
    <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
      PANAMA / USA
    </p>
  </div>
</div>

        {/* Main statement */}
        <div className="relative z-10 my-auto py-12">
          <h1 className="max-w-[95rem] text-[clamp(3.4rem,8.4vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
            <span className="block">CONSTRUCTION.</span>
            <span className="block">MANAGEMENT.</span>
            <span className="block">TECHNOLOGY.</span>
          </h1>

          {/* Core statement */}
          <div className="mt-8 border-l border-[var(--line)] pl-5 md:mt-10 md:pl-7">
            <p className="text-base tracking-[0.08em] text-[var(--muted)] md:text-xl">
              GREAT ON THEIR OWN.
            </p>

            <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              BETTER TOGETHER.
            </p>
          </div>
        </div>

        {/* Hero bottom */}
        <div className="relative z-10 grid gap-8 border-t border-[var(--line)] pt-6 md:grid-cols-2">
          <div>
            <p className="max-w-lg text-sm leading-6 text-[var(--muted)]">
              Civil Engineer &amp; M.S. Construction Management and Technology
              Student at Arizona State University.
            </p>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              href="#about"
              className="text-xs font-semibold tracking-[0.16em]"
            >
              EXPLORE ↓
            </a>
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

            <div className="mt-10 hidden min-h-[320px] items-center justify-center border border-[var(--line)] lg:flex">
  <p className="text-[10px] tracking-[0.18em] text-[var(--muted)]">
    PORTRAIT / TO BE ADDED
  </p>
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
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                      PH MINI DESIGN
                      <br />
                      HOUSE 57
                    </h3>

                    <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                  <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        SCALE
                      </p>
                      <p className="mt-2">20 Stories</p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        ROLE
                      </p>
                      <p className="mt-2">
                        Works Supervisor / PM Assistant
                      </p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        FOCUS
                      </p>
                      <p className="mt-2">
                        Supervision / Closeout / Delivery
                      </p>
                    </div>
                  </div>

                  <p className="mt-10 max-w-3xl text-base leading-7 text-[var(--muted)]">
                    Helped lead the completion and handover of a 20-story
                    residential project after the original contractor exited
                    the project, working under a limited closeout budget and
                    tight delivery schedule.
                  </p>

                  {/* Image placeholder */}
                  <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-[var(--line)] bg-[var(--line)]/10">
                    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                      PROJECT IMAGE / COMING SOON
                    </p>
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
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                      PH AMAZONAS
                    </h3>

                    <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                  <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        SCALE
                      </p>
                      <p className="mt-2">32 Stories</p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        ROLE
                      </p>
                      <p className="mt-2">
                        PM Assistant / Works Supervisor
                      </p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        FOCUS
                      </p>
                      <p className="mt-2">
                        Budgeting / Bidding / Piling
                      </p>
                    </div>
                  </div>

                  <p className="mt-10 max-w-3xl text-base leading-7 text-[var(--muted)]">
                    Supported budgeting and project kickoff before supervising
                    piling and foundation activities, including coordination
                    of concrete, reinforcing steel, earthwork, and surrounding
                    stakeholders.
                  </p>

                  <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-[var(--line)] bg-[var(--line)]/10">
                    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                      PROJECT IMAGE / COMING SOON
                    </p>
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
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                      PH THE WALKER
                    </h3>

                    <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                  <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        SCALE
                      </p>
                      <p className="mt-2">35 Stories</p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        ROLE
                      </p>
                      <p className="mt-2">
                        PM Assistant → Production Lead
                      </p>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                        FOCUS
                      </p>
                      <p className="mt-2">
                        Structure / Procurement / Leadership
                      </p>
                    </div>
                  </div>

                  <p className="mt-10 max-w-3xl text-base leading-7 text-[var(--muted)]">
                    Progressed from preconstruction and field supervision into
                    production leadership, coordinating structural activities,
                    procurement, schedules, and a workforce of more than 60
                    personnel.
                  </p>

                  <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-[var(--line)] bg-[var(--line)]/10">
                    <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                      PROJECT IMAGE / COMING SOON
                    </p>
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
        {/* Background detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
              An evolving collection of projects, AI agents, case studies,
              research, and ideas exploring technology across the built
              environment.
            </p>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">

            <div className="mb-14">
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
                I&apos;ve carried from the field: there&apos;s always a better
                way. This space documents how I&apos;m exploring AI and
                emerging technologies as tools to improve how projects are
                planned, coordinated, managed, and delivered.
              </p>
            </div>

            {/* Areas */}
            <div className="grid border-l border-t border-[var(--line)] md:grid-cols-2">

              {/* Projects */}
              <div className="group relative min-h-[300px] border-b border-r border-[var(--line)] p-8 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                <p className="text-xs tracking-[0.18em] opacity-60">
                  01 / PROJECTS
                </p>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  Projects
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 opacity-70">
                  Academic and independent work exploring construction,
                  management, technology, AI, BIM, and related topics.
                </p>

                <p className="absolute bottom-8 left-8 text-xs tracking-[0.16em]">
                  EXPLORE →
                </p>
              </div>

              {/* AI Agents */}
              <div className="group relative min-h-[300px] border-b border-r border-[var(--line)] p-8 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                <p className="text-xs tracking-[0.18em] opacity-60">
                  02 / AI AGENTS
                </p>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  AI Agents
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 opacity-70">
                  Exploring intelligent agents and automated workflows designed
                  around construction-management processes.
                </p>

                <p className="absolute bottom-8 left-8 text-xs tracking-[0.16em]">
                  EXPLORE →
                </p>
              </div>

              {/* Case Studies */}
              <div className="group relative min-h-[300px] border-b border-r border-[var(--line)] p-8 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                <p className="text-xs tracking-[0.18em] opacity-60">
                  03 / CASE STUDIES
                </p>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  Case Studies
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 opacity-70">
                  Examining real construction problems and where technology can
                  improve processes, decisions, and project outcomes.
                </p>

                <p className="absolute bottom-8 left-8 text-xs tracking-[0.16em]">
                  EXPLORE →
                </p>
              </div>

              {/* Research */}
              <div className="group relative min-h-[300px] border-b border-r border-[var(--line)] p-8 transition-all duration-500 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                <p className="text-xs tracking-[0.18em] opacity-60">
                  04 / RESEARCH + WRITING
                </p>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  Research &amp; Writing
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 opacity-70">
                  Research, article reviews, observations, and perspectives on
                  AI, construction technology, and industry change.
                </p>

                <p className="absolute bottom-8 left-8 text-xs tracking-[0.16em]">
                  EXPLORE →
                </p>
              </div>

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
    </main>
  );
}