import { useState } from "react";

const PHONE = "(561) 843-7162";
const TEL = "tel:+15618437162";
const EMAIL = "RFStumpRemoval@gmail.com";

const services = [
  {
    title: "Tree Trimming",
    img: "/images/trim.jpg",
    desc: "Shaping, canopy thinning, deadwood and hurricane-prep pruning that keeps your trees healthy and your property safe.",
    points: ["Canopy thinning & shaping", "Hurricane prep cuts", "Palm trimming & skinning"],
  },
  {
    title: "Tree Removal",
    img: "/images/removal.jpg",
    desc: "Safe, fully-cleaned-up removal of hazardous, dead or unwanted trees — from tight backyards to open lots.",
    points: ["Hazardous & storm-damaged trees", "Sectional rope lowering", "Full haul-away & cleanup"],
  },
  {
    title: "Stump Grinding",
    img: "/images/hero.jpg",
    desc: "Our specialty. We grind stumps well below grade so you can re-sod, replant or build over the spot.",
    points: ["Ground 6-12\" below grade", "Surface root grinding", "Grindings hauled or backfilled"],
  },
  {
    title: "Power Washing",
    img: "/images/wash.jpg",
    desc: "Driveways, pavers, patios, pool decks, fences and house siding brought back to like-new condition.",
    points: ["Driveways & pavers", "Pool decks & patios", "House & fence soft wash"],
  },
];

const areas = [
  "West Palm Beach", "Palm Beach Gardens", "Jupiter", "Wellington", "Royal Palm Beach",
  "Boynton Beach", "Delray Beach", "Boca Raton", "Lake Worth", "Port St. Lucie",
  "Stuart", "Fort Lauderdale", "Pompano Beach", "Belle Glade", "Okeechobee",
];

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function Section({ id, children, className = "" }: any) {
  return <section id={id} className={`scroll-mt-20 px-5 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const nav = [
    ["Services", "#services"],
    ["Why Us", "#why"],
    ["Service Area", "#area"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* top bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2">
          <span className="truncate">Serving West Palm Beach + 50 miles · Free Estimates</span>
          <a href={TEL} className="font-semibold whitespace-nowrap hover:text-amber-300">{PHONE}</a>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-white">
              <Leaf className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-emerald-900">RF Stump Removal</span>
              <span className="block text-[11px] uppercase tracking-widest text-stone-500">Tree & Property Care</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-stone-600 hover:text-emerald-700">{l}</a>
            ))}
            <a href={TEL} className="rounded-full bg-amber-500 px-5 py-2 text-sm font-bold text-stone-900 shadow hover:bg-amber-400">
              Call Russel
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-md border border-stone-300 p-2" aria-label="Menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
              <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="border-t border-stone-200 bg-white px-5 pb-4 md:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                className="block border-b border-stone-100 py-3 text-sm font-medium">{l}</a>
            ))}
            <a href={TEL} className="mt-3 block rounded-full bg-amber-500 py-2.5 text-center text-sm font-bold text-stone-900">
              Call {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* hero */}
      <div id="top" className="relative">
        <img src="/images/hero.jpg" alt="Stump grinding in West Palm Beach" className="h-[520px] w-full object-cover sm:h-[600px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/20" />
        <div className="absolute inset-0 flex items-center px-5">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl text-white">
              <span className="inline-block rounded-full bg-emerald-600/90 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                Licensed & Insured · Palm Beach County
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Stumps Gone.<br />Trees Handled.<br />
                <span className="text-amber-400">Property Restored.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base text-stone-200 sm:text-lg">
                RF Stump Removal provides stump grinding, tree trimming, tree removal and power
                washing throughout West Palm Beach and up to 50 miles out. Fast quotes, clean work,
                fair prices.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="rounded-full bg-amber-500 px-7 py-3.5 font-bold text-stone-900 shadow-lg hover:bg-amber-400">
                  Call {PHONE}
                </a>
                <a href="#contact" className="rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white hover:bg-white/10">
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-7 text-center md:grid-cols-4">
          {[["Free", "On-Site Estimates"], ["50 mi", "Service Radius"], ["Full", "Cleanup Included"], ["Owner", "Operated by Russel"]]
            .map(([a, b]) => (
              <div key={b} className="px-2 py-2">
                <div className="text-2xl font-extrabold text-emerald-800">{a}</div>
                <div className="text-xs uppercase tracking-wide text-stone-500">{b}</div>
              </div>
            ))}
        </div>
      </div>

      {/* services */}
      <Section id="services" className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-stone-600">
            One crew for everything from the canopy to the concrete. Residential and commercial.
          </p>
        </div>
        <div className="mt-10 grid gap-7 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-xl">
              <div className="h-52 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="mt-1 text-emerald-600">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-5 inline-block text-sm font-bold text-emerald-700 hover:text-emerald-900">
                  Request a quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* why */}
      <Section id="why" className="bg-emerald-900 py-20 text-emerald-50">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Why RF Stump Removal</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              You talk to the man doing the work.
            </h2>
            <p className="mt-4 text-emerald-100/90">
              No call centers, no sales reps. Call Russel directly, get a straight price, and get the
              job done right — usually within a few days. We show up with the right equipment, protect
              your lawn and hardscape, and leave the site cleaner than we found it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-full bg-amber-500 px-6 py-3 font-bold text-stone-900 hover:bg-amber-400">{PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="rounded-full border border-emerald-300/40 px-6 py-3 font-semibold hover:bg-white/10">Email Us</a>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Licensed & Insured", "Full coverage on every job for your peace of mind."],
              ["Honest Pricing", "Clear, upfront quotes. No surprise add-ons."],
              ["Clean Job Sites", "Debris hauled away, grindings handled your way."],
              ["Storm Ready", "Hurricane prep and fast post-storm response."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl bg-emerald-800/60 p-5 ring-1 ring-emerald-700">
                <Leaf className="h-6 w-6 text-amber-400" />
                <h4 className="mt-3 font-bold">{t}</h4>
                <p className="mt-1 text-sm text-emerald-100/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* area */}
      <Section id="area" className="py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Service Area</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              West Palm Beach & 50 Miles Around
            </h2>
            <p className="mt-4 text-stone-600">
              Based in West Palm Beach, Florida, we travel up to 50 miles in every direction — covering
              all of Palm Beach County plus parts of Martin, St. Lucie, Broward and Okeechobee counties.
              Not sure if you're in range? Just call and ask.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
            <iframe
              title="Service area map"
              className="h-[380px] w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-81.9%2C25.6%2C-79.4%2C27.6&layer=mapnik&marker=26.7153%2C-80.0534"
            />
          </div>
        </div>
      </Section>

      {/* contact */}
      <Section id="contact" className="bg-white py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Free Estimates — Call or Message
            </h2>
            <p className="mt-4 text-stone-600">
              Tell us what you need and we'll get you a price fast. Photos help — text or email them along.
            </p>
            <div className="mt-8 space-y-4">
              <a href={TEL} className="flex items-center gap-4 rounded-xl border border-stone-200 p-4 hover:border-emerald-500">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-xl">📞</span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-stone-500">Call or Text Russel</span>
                  <span className="block text-lg font-bold text-stone-900">{PHONE}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl border border-stone-200 p-4 hover:border-emerald-500">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-xl">✉️</span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-stone-500">Email</span>
                  <span className="block truncate font-bold text-stone-900">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-stone-200 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-xl">📍</span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-stone-500">Based In</span>
                  <span className="block font-bold text-stone-900">West Palm Beach, FL</span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.target as HTMLFormElement);
              const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nService: ${f.get("service")}\n\n${f.get("msg")}`;
              window.location.href = `mailto:${EMAIL}?subject=Quote Request - ${f.get("service")}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
            className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-bold text-stone-900">Request a Quote</h3>
            <div className="mt-5 space-y-4">
              {[["name", "Your Name", "text"], ["phone", "Phone Number", "tel"], ["email", "Email (optional)", "email"]].map(([n, l, t]) => (
                <div key={n}>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-stone-500">{l}</label>
                  <input name={n} type={t} required={n !== "email"}
                    className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-600" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-stone-500">Service Needed</label>
                <select name="service" className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-600">
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Multiple / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-stone-500">Details</label>
                <textarea name="msg" rows={4} placeholder="Address, number of stumps/trees, size..."
                  className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-600" />
              </div>
              <button className="w-full rounded-full bg-emerald-700 py-3 font-bold text-white hover:bg-emerald-800">
                Send Request
              </button>
              {sent && <p className="text-center text-sm text-emerald-700">Opening your email app… or just call {PHONE}.</p>}
            </div>
          </form>
        </div>
      </Section>

      <footer className="bg-stone-900 px-5 py-10 text-stone-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-lg font-extrabold text-white">RF Stump Removal</div>
            <p className="text-sm">Tree Trimming · Tree Removal · Stump Grinding · Power Washing</p>
          </div>
          <div className="text-sm">
            <a href={TEL} className="block font-semibold text-amber-400">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-white">{EMAIL}</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-stone-800 pt-5 text-center text-xs">
          © {new Date().getFullYear()} RF Stump Removal · West Palm Beach, FL · Serving within 50 miles
        </div>
      </footer>

      <a href={TEL} className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-amber-500 py-3.5 text-center font-bold text-stone-900 shadow-2xl md:hidden">
        📞 Call {PHONE}
      </a>
    </div>
  );
}
