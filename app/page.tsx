export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5 md:px-10 lg:px-16">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.18em]"
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
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col justify-between overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-16">
        
        {/* Technical background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top metadata */}
        <div className="relative z-10 flex justify-between text-[10px] tracking-[0.18em] text-[var(--muted)] md:text-xs">
          <span>01 / PORTFOLIO 2026</span>
          <span>PANAMA → ARIZONA</span>
        </div>

        {/* Main statement */}
        <div className="relative z-10 my-auto py-16">
          <p className="mb-5 text-xs tracking-[0.22em] text-[var(--muted)]">
            CIVIL ENGINEERING / CONSTRUCTION MANAGEMENT / TECHNOLOGY
          </p>

          <h1 className="max-w-6xl text-[clamp(3.4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.06em]">
            <span className="block">CONSTRUCTION.</span>
            <span className="block">MANAGEMENT.</span>
            <span className="block">TECHNOLOGY.</span>
          </h1>
        </div>

        {/* Bottom hero */}
        <div className="relative z-10 grid gap-8 border-t border-[var(--line)] pt-6 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.12em] text-[var(--muted)]">
              GREAT ON THEIR OWN.
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              BETTER TOGETHER.
            </p>
          </div>

          <div className="md:justify-self-end md:max-w-md">
            <p className="text-sm leading-6 text-[var(--muted)]">
              Civil Engineer &amp; M.S. Construction Management and Technology
              Student at Arizona State University.
            </p>

            <a
              href="#about"
              className="mt-5 inline-block text-xs font-semibold tracking-[0.16em]"
            >
              EXPLORE ↓
            </a>
          </div>
        </div>
      </section>
            {/* About */}
      <section
        id="about"
        className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              02 / ABOUT
            </p>
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

            <div className="mt-16 grid gap-12 border-t border-[var(--line)] pt-8 md:grid-cols-2">
              
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  PANAMA CITY, PANAMA
                </p>

                <p className="mt-6 max-w-md text-base leading-7">
                  My path in construction began with a fascination for turning
                  ideas into physical reality. That curiosity led me to Civil
                  Engineering and eventually into the field, where I developed
                  experience across preconstruction, project coordination,
                  supervision, procurement, scheduling, and project closeout.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  TEMPE, ARIZONA
                </p>

                <p className="mt-6 max-w-md text-base leading-7">
                  Today, I&apos;m pursuing an M.S. in Construction Management
                  and Technology at Arizona State University, exploring how
                  technology can improve the way projects are planned,
                  managed, coordinated, and delivered.
                </p>
              </div>

            </div>

            {/* Journey */}
            <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
              
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  01 / CONSTRUCTION
                </p>
                <p className="mt-3 text-lg">
                  Civil engineering and field experience.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  02 / MANAGEMENT
                </p>
                <p className="mt-3 text-lg">
                  Projects, people, schedules, materials, and decisions.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  03 / TECHNOLOGY
                </p>
                <p className="mt-3 text-lg">
                  Exploring better tools for better project delivery.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
            {/* Experience */}
      <section
        id="experience"
        className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-12">

          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              03 / EXPERIENCE
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
              From field supervision to project leadership, my experience has
              grown across multiple stages of construction and project
              management.
            </p>
          </div>

          {/* Experience content */}
          <div className="lg:col-span-9">

            <div className="mb-16">
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

            {/* RI Group - Production Lead */}
            <article className="grid gap-8 border-t border-[var(--line)] py-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                  JAN 2026 — APR 2026
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  RI Group Panama
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Production Lead
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-7">
                  Led day-to-day site production for PH The Walker,
                  coordinating a workforce of 60+ personnel while managing
                  construction schedules, daily activities, materials, and
                  field resources.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "60+ PERSONNEL",
                    "FIELD LEADERSHIP",
                    "PROCUREMENT",
                    "PRODUCTION",
                    "SCHEDULING",
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

            {/* RI Group - Supervisor / PM Assistant */}
            <article className="grid gap-8 border-y border-[var(--line)] py-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs tracking-[0.16em] text-[var(--muted)]">
                  FEB 2024 — JAN 2026
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  RI Group Panama
                </h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Works Supervisor &amp; PM Assistant
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-7">
                  Supported projects across preconstruction, field
                  supervision, budgeting, scheduling, procurement, quality
                  control, contractor coordination, and project closeout.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "PRECONSTRUCTION",
                    "QA / QC",
                    "RFIs",
                    "SUBMITTALS",
                    "BUDGETING",
                    "CLOSEOUT",
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
              04 / SELECTED PROJECTS
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
        className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-12">

          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
              05 / AI + CONSTRUCTION
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--muted)]">
              An evolving collection of projects, experiments, research, and
              ideas exploring the intersection of artificial intelligence and
              the built environment.
            </p>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">

            <div className="mb-20">
              <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                CONSTRUCTION × MANAGEMENT × TECHNOLOGY
              </p>

              <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                THERE HAS TO BE
                <br />
                A BETTER WAY.
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                My interest in construction technology comes from a question
                I&apos;ve repeatedly asked in the field: can we do this better?
                This space documents my exploration of how AI and emerging
                technologies can improve the way construction projects are
                planned, coordinated, managed, and delivered.
              </p>
            </div>

            {/* Areas of exploration */}
            <div className="grid border-t border-l border-[var(--line)] md:grid-cols-2">

              <div className="min-h-64 border-r border-b border-[var(--line)] p-8">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  01 / PROJECTS
                </p>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  Course Projects
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Applied AI projects developed through coursework in
                  construction management and technology.
                </p>

                <p className="mt-10 text-xs tracking-[0.16em]">
                  COMING SOON →
                </p>
              </div>

              <div className="min-h-64 border-r border-b border-[var(--line)] p-8">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  02 / EXPERIMENTS
                </p>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  AI Experiments
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Testing emerging tools against practical construction
                  workflows, problems, and opportunities.
                </p>

                <p className="mt-10 text-xs tracking-[0.16em]">
                  COMING SOON →
                </p>
              </div>

              <div className="min-h-64 border-r border-b border-[var(--line)] p-8">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  03 / CASE STUDIES
                </p>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  Case Studies
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Examining where technology can improve real construction
                  processes, decisions, and project outcomes.
                </p>

                <p className="mt-10 text-xs tracking-[0.16em]">
                  COMING SOON →
                </p>
              </div>

              <div className="min-h-64 border-r border-b border-[var(--line)] p-8">
                <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                  04 / RESEARCH + WRITING
                </p>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  Ideas &amp; Reviews
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Notes, article reviews, observations, and perspectives on AI,
                  construction technology, and industry change.
                </p>

                <p className="mt-10 text-xs tracking-[0.16em]">
                  COMING SOON →
                </p>
              </div>

            </div>

            {/* Philosophy */}
            <div className="mt-20 border-t border-[var(--line)] pt-10">
              <div className="grid gap-10 md:grid-cols-3">

                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    CONSTRUCTION
                  </p>

                  <p className="mt-4 text-xl">
                    Understand the problem.
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    MANAGEMENT
                  </p>

                  <p className="mt-4 text-xl">
                    Understand the process.
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    TECHNOLOGY
                  </p>

                  <p className="mt-4 text-xl">
                    Explore a better way.
                  </p>
                </div>

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
              06 / CONTACT
            </p>
          </div>

          {/* Main contact */}
          <div className="lg:col-span-9">
            <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
              LET&apos;S CONNECT
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              LET&apos;S BUILD
              <br />
              WHAT&apos;S NEXT.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I&apos;m always interested in connecting with people working
              across construction, project management, technology, and the
              future of the built environment.
            </p>

            {/* Contact links */}
            <div className="mt-16 border-t border-[var(--line)]">
              <a
                href="mailto:jcarra47@asu.edu"
                className="group flex items-center justify-between border-b border-[var(--line)] py-6"
              >
                <div>
                  <p className="text-xs tracking-[0.18em] text-[var(--muted)]">
                    EMAIL
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
            <span>PANAMA → ARIZONA</span>
            <a href="#" className="text-[var(--foreground)]">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}