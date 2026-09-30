import {
  ArrowRight,
  ArrowRightLeft,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronDown,
  Columns3,
  Command,
  FileLock2,
  Gauge,
  KeyRound,
  LayoutDashboard,
  ListTodo,
  Lock,
  LogOut,
  Mail,
  Phone,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  UserCog,
  Users,
  UsersRound,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { ProductMock } from "@/components/product-mock";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

// Every claim on this page is something Lasan Grow does today (see the Lasan-Grow repo's
// USER_MANUAL.md). Keep it that way when editing.

const HIGHLIGHTS = [
  { icon: Columns3, label: "Drag-and-drop pipeline" },
  { icon: Gauge, label: "Automatic lead scoring" },
  { icon: BarChart3, label: "Live revenue dashboard" },
  { icon: Smartphone, label: "Works on any device — nothing to install" },
];

const PROBLEMS = [
  {
    title: "Deals living in spreadsheets",
    text: "Every rep keeps their own sheet, updates happen whenever someone remembers, and nobody trusts the numbers in the Monday meeting.",
  },
  {
    title: "Leads going cold",
    text: "Enquiries arrive on WhatsApp, email and calls. Without a clear order, the best ones wait while the team chases the loudest.",
  },
  {
    title: "Forecasts built on hope",
    text: "\"What will we close this month?\" becomes a round of guesses, because nobody can see value, stage and likelihood in one place.",
  },
];

const FEATURES = [
  {
    icon: Columns3,
    title: "Visual sales pipeline",
    text: "See every open deal on a board and drag it to the next stage. Stage totals and weighted value update the moment you let go.",
    points: ["Your own stages and win probabilities", "Won and Lost drop zones", "Board and list views"],
  },
  {
    icon: Gauge,
    title: "Lead scoring built in",
    text: "Every lead gets a 0–100 score from what you know about it, and the hottest leads float to the top so reps know who to call first.",
    points: ["Score explained factor by factor", "New, contacted, qualified tabs", "Status changes inline"],
  },
  {
    icon: ArrowRightLeft,
    title: "One-click lead conversion",
    text: "When a lead is ready, convert it: Lasan Grow creates the contact, the company and an open deal, and carries the history across.",
    points: ["Matches an existing company by name", "Activity history moves with it", "Lands you on the new deal"],
  },
  {
    icon: LayoutDashboard,
    title: "A dashboard that answers questions",
    text: "Open it and know where you stand: what you've won, what's in the pipeline, how often you win and where the wins come from.",
    points: ["Won this month vs last month", "12-month revenue trend and stage funnel", "Win sources, lost reasons, activity heatmap"],
  },
  {
    icon: Target,
    title: "Deal pages with the full story",
    text: "Each deal shows its value, stage, contact and company, with a stage stepper and a timeline of every note, call and meeting.",
    points: ["Move stages in one click", "Mark won, or lost with a reason", "Notes and follow-ups on the deal"],
  },
  {
    icon: ListTodo,
    title: "Follow-ups that happen",
    text: "Calls, meetings, emails and tasks with due dates, in an inbox sorted by what's overdue, due today and coming up.",
    points: ["Overdue first, always", "Tick off in one click", "Linked to deals and contacts"],
  },
  {
    icon: Building2,
    title: "Contacts & companies",
    text: "One place for the people you sell to and the accounts they belong to, each with their deals, stats and a combined activity timeline.",
    points: ["Contacts linked to companies", "Open and won value per account", "Searchable, sortable lists"],
  },
  {
    icon: Command,
    title: "Search everything, instantly",
    text: "Press Ctrl+K anywhere to find a deal, contact, company or lead, or to create a new one. Lists filter as you type.",
    points: ["Words in any order, across fields", "Keyboard-first quick create", "Matches highlighted as you type"],
  },
  {
    icon: UserCog,
    title: "Built around your team",
    text: "Add your teammates as admins or members, set your currency and pipeline, and work in a white or black theme, on desktop or phone.",
    points: ["Owner, admin and member roles", "INR, USD, EUR, GBP or AED", "Every screen works on a phone"],
  },
];

const MANAGER_POINTS = [
  "See won revenue, open pipeline and win rate the moment you sign in",
  "Know which stage deals get stuck in, and why deals are lost",
  "Tune stages and win probabilities so the weighted forecast stays honest",
  "Add teammates and choose who can change workspace settings",
  "Spot who's following up with the activity heatmap",
];

const REP_POINTS = [
  "Start the day on one inbox of overdue and upcoming follow-ups",
  "Call the hottest leads first, ranked by their score",
  "Move deals forward with a drag or a click",
  "Log a call or note in seconds, right on the deal",
  "Find anything with Ctrl+K without leaving the page",
];

const STEPS = [
  {
    icon: Wrench,
    title: "We set up your workspace",
    text: "Our team creates your company's private workspace with a ready-made sales pipeline and your owner login. No sign-up forms, no IT work.",
  },
  {
    icon: UsersRound,
    title: "You shape it and add your team",
    text: "Adjust the stages and currency to match how you sell, then add your teammates. Each one gets a temporary password and chooses their own on first sign-in.",
  },
  {
    icon: TrendingUp,
    title: "Your team starts selling",
    text: "Leads, deals and follow-ups go in, and the dashboard fills itself. From the first week you can see where your next win is coming from.",
  },
];

const PIPELINE = [
  { stage: "Qualified", prob: "10%" },
  { stage: "Contact made", prob: "25%" },
  { stage: "Demo scheduled", prob: "40%" },
  { stage: "Proposal sent", prob: "60%" },
  { stage: "Negotiation", prob: "80%" },
  { stage: "Won / Lost", prob: "100% / 0%" },
];

const SECURITY = [
  {
    icon: FileLock2,
    title: "Your data stays yours",
    text: "Each company's records are walled off inside the database itself with row-level security, not just in the app, so they stay protected even if a bug slips in.",
  },
  { icon: Lock, title: "Encrypted everywhere", text: "Every connection is encrypted over HTTPS, including the link to the database, with strict browser security policies on every page." },
  {
    icon: KeyRound,
    title: "Protected sign-in",
    text: "Passwords are strongly hashed, five wrong attempts lock an account for 15 minutes, and new users must replace their temporary password.",
  },
  { icon: LogOut, title: "Instant access control", text: "A password change or reset signs that person out of every other device, and a suspended workspace is locked out immediately." },
  { icon: UsersRound, title: "Right people, right settings", text: "Only owners and admins can change the workspace, the pipeline or the team. Members get on with selling." },
  { icon: ShieldCheck, title: "Set up by people, not a sign-up form", text: "Workspaces are created by our team, so there are no anonymous accounts sitting next to yours." },
];

const FAQ = [
  {
    q: "Do we need to install anything?",
    a: "No. Lasan Grow runs in the browser on any computer, Android phone or iPhone. Your team opens app.lasangrow.com and signs in; there's nothing to download or update.",
  },
  {
    q: "Can we use our own sales stages?",
    a: "Yes. Every workspace starts with a proven pipeline (Qualified to Negotiation, then Won or Lost), and admins can rename stages, reorder them, add new ones and set each stage's win probability.",
  },
  {
    q: "How does lead scoring work?",
    a: "Each lead gets a score from 0 to 100 based on what you know about it, such as its status, estimated value, source and whether you have an email and phone number. When you add or edit a lead, Lasan Grow shows exactly which factors add up to its score. 70+ is Hot, 40+ Warm.",
  },
  {
    q: "Which currencies are supported?",
    a: "Indian rupees, US dollars, euros, British pounds and UAE dirhams. Each workspace picks one, and every value and chart uses it.",
  },
  {
    q: "Can our sales team use it on their phones?",
    a: "Yes. Every screen, from the pipeline to the dashboard, is built to work on a phone as well as on a desktop.",
  },
  {
    q: "How do we get started?",
    a: "Book a demo. We'll walk you through Lasan Grow, and when you're ready our team sets up your workspace and sends your owner login, usually the same day.",
  },
  {
    q: "Where is our data stored?",
    a: "On secure cloud servers in the United States, with encrypted connections throughout and each company's data isolated at the database level.",
  },
];

function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
          <BadgeCheck className="mt-0.5 size-5 shrink-0 text-brand-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:pb-28">
            <div className="rise">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                <TrendingUp className="size-3.5" /> The sales CRM for growing teams
              </p>
              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Every lead, every deal. <span className="text-brand-500">One clear pipeline.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Lasan Grow brings your leads, deals, contacts, companies and follow-ups into one fast workspace, with a live
                dashboard that shows exactly where your next win is coming from.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-brand-600"
                >
                  Book a free demo <ArrowRight className="size-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-line bg-white px-6 py-3.5 text-base font-semibold text-fg transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  Explore features
                </a>
              </div>
              <p className="mt-5 text-sm text-subtle">Set up for you by our team · Focused on the modules that move revenue</p>
            </div>
            <div className="rise-late">
              <ProductMock />
            </div>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="border-y border-line bg-soft">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-7 sm:px-6 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium sm:text-[15px]">
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-white text-brand-500 shadow-card">
                  <Icon className="size-[18px]" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Why Lasan Grow"
            title="Selling is hard enough without chasing your own data"
            text="Most growing sales teams run on spreadsheets, chats and memory. It works until it doesn't, usually right when it matters."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                <span className="text-sm font-semibold tabular-nums text-brand-500">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium">
            Lasan Grow gives you <span className="text-brand-600">one pipeline</span> everyone trusts,{" "}
            <span className="text-brand-600">scored</span> leads and a <span className="text-brand-600">forecast</span> you
            can act on.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-line bg-soft py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Features"
              title="Everything a sales team needs. Nothing it doesn't."
              text="Suites bolt on dozens of modules. Lasan Grow does the few that move revenue, and does them properly."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, text, points }) => (
                <article
                  key={title}
                  className="group flex flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                  <ul className="mt-5 grid gap-2 border-t border-line pt-4 text-sm">
                    {points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <BadgeCheck className="mt-px size-4 shrink-0 text-ok" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Managers & reps */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="For the whole team"
            title="Clarity for managers. Focus for reps."
            text="Two ways of working, one set of numbers everybody agrees on."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-7 shadow-card sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                <LayoutDashboard className="size-4" /> For sales managers & founders
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">The whole pipeline, on one screen</h3>
              <p className="mt-2 mb-6 leading-relaxed text-muted">Stop assembling reports. The numbers are there when you sign in.</p>
              <CheckList items={MANAGER_POINTS} />
            </div>
            <div className="rounded-xl border border-line bg-white p-7 shadow-card sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-sm font-semibold text-teal">
                <Users className="size-4" /> For sales reps
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Less admin, more closing</h3>
              <p className="mt-2 mb-6 leading-relaxed text-muted">Everything needed for today&apos;s calls, a click away.</p>
              <CheckList items={REP_POINTS} />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-y border-line bg-brand-900 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Selling in three steps</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">No installation, no consultants, no months of setup. We do it with you.</p>
            </div>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="relative rounded-xl border border-white/15 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-white text-base font-semibold text-brand-700">{i + 1}</span>
                    <Icon className="size-5 text-brand-200" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/75">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ready-made pipeline */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.15fr]">
          <SectionHeading
            center={false}
            eyebrow="Ready on day one"
            title="A proven pipeline, yours to shape"
            text="Every workspace starts with a sales pipeline that works for most B2B teams, with a win probability on each stage so your weighted forecast means something. Rename, reorder or add stages in a minute."
          />
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
            <table className="w-full text-left text-sm sm:text-[15px]">
              <thead className="bg-soft text-xs uppercase tracking-wide text-subtle">
                <tr>
                  <th className="px-4 py-3 font-semibold sm:px-5">Stage</th>
                  <th className="px-4 py-3 font-semibold sm:px-5">Win probability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {PIPELINE.map((s) => (
                  <tr key={s.stage}>
                    <td className="px-4 py-3.5 font-medium sm:px-5">{s.stage}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-brand-600 sm:px-5">{s.prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="flex items-start gap-2 border-t border-line bg-softer px-4 py-3 text-xs text-subtle sm:px-5">
              <TrendingUp className="mt-px size-3.5 shrink-0 text-brand-500" />
              Weighted pipeline = each open deal&apos;s value × its stage&apos;s win probability. A ₹1,00,000 deal at 40% counts as
              ₹40,000 of forecast.
            </p>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="border-t border-line bg-soft py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Security & privacy"
              title="Your customer data, properly protected"
              text="A CRM holds your most valuable list: your customers and your pipeline. Security is part of the foundation, not an add-on."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SECURITY.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-line bg-white p-6 shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ok-soft text-ok">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="Questions we hear often" />
          <div className="mt-12 divide-y divide-line rounded-xl border border-line bg-white shadow-card">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group px-5 sm:px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-semibold">
                  {q}
                  <ChevronDown className="faq-chevron size-5 shrink-0 text-subtle transition-transform" />
                </summary>
                <p className="-mt-1 pb-5 leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-soft py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Contact us</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">See Lasan Grow in action</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Book a free, no-obligation demo. We&apos;ll walk you through the pipeline, lead scoring and the dashboard, and
                show you how it fits the way your team sells.
              </p>
              <div className="mt-8 grid gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition-colors hover:border-brand-200"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-500">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-subtle">Email us</span>
                    <span className="block break-all font-semibold">{SITE.email}</span>
                  </span>
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition-colors hover:border-brand-200"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-500">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-subtle">Call us</span>
                    <span className="block font-semibold">{SITE.phoneDisplay}</span>
                  </span>
                </a>
                <p className="text-sm text-muted">
                  Already a customer?{" "}
                  <a href={SITE.signInUrl} className="font-semibold text-brand-600 hover:underline">
                    Sign in to Lasan Grow
                  </a>
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The sales CRM for growing teams: pipeline, lead scoring, contacts, follow-ups and a live revenue dashboard in one
              workspace.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-14 text-sm">
            {[
              ["Product", [["Features", "#features"], ["How it works", "#how-it-works"], ["Security", "#security"]]],
              ["Company", [["FAQ", "#faq"], ["Contact", "#contact"], ["Sign in", SITE.signInUrl]]],
            ].map(([heading, links]) => (
              <div key={heading} className="grid content-start gap-2">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-subtle">{heading}</p>
                {links.map(([label, href]) => (
                  <a key={label} href={href} className="text-muted hover:text-fg">
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-subtle sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} Lasan Labs. All rights reserved.</p>
            <p>
              Powered by <span className="lasan-signature font-semibold">Lasan Labs</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
