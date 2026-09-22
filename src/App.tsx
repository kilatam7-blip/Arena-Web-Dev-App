const topStories = [
  {
    title: "Neon Districts at Night",
    text: "Carefully crafted routes through Tokyo's most atmospheric neighborhoods, where every turn reveals a new rhythm of the city.",
  },
  {
    title: "Tradition and Silence",
    text: "A contrast-rich day between Shinto shrines, tea houses, and bay panoramas filled with cool sea air and timeless detail.",
  },
  {
    title: "After-Sunset Lights",
    text: "Evening walks along waterfronts and viewpoints, focused on cinematic vistas and thoughtfully selected photo stops.",
  },
];

const tours = [
  {
    name: "TOUR No.1",
    caption: "Kyoto Temples and Morning Mist",
    image: "/images/tour-1-temple.png",
  },
  {
    name: "TOUR No.2",
    caption: "Pagodas Beneath the Mountains",
    image: "/images/tour-2-pagoda.png",
  },
  {
    name: "TOUR No.3",
    caption: "Cherry Blossom Season",
    image: "/images/tour-3-sakura.png",
  },
  {
    name: "TOUR No.4",
    caption: "Kimono Walk with Red Umbrella",
    image: "/images/tour-4-umbrella.png",
  },
];

const reelThumbs = [
  {
    title: "Mountain Road at Sunset",
    image: "/images/thumb-road-sunset.png",
  },
  {
    title: "Snowy Village Under Stars",
    image: "/images/thumb-snow-village.png",
  },
];

export default function App() {
  return (
    <main className="bg-[#050607] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/images/hero-torii-night.png"
          alt="Itsukushima torii gate standing in water at night"
          className="animate-slow-pan absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/90 via-[#0a1220]/70 to-[#050607]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-black/45" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pb-14 pt-8 lg:px-12">
          <nav className="animate-fade-up grid grid-cols-[auto_1fr_auto] items-center border-b border-white/15 pb-5 text-xs uppercase tracking-[0.28em]">
            <a href="#" className="flex items-center gap-2 text-sm tracking-[0.35em]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f97316]" />
              <span>TRAVEL</span>
            </a>
            <ul className="mx-auto hidden items-center gap-8 text-[11px] text-white/80 md:flex">
              {[
                "Home",
                "About",
                "Tours",
                "Gallery",
                "Reviews",
                "Contacts",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button aria-label="Search" className="justify-self-end text-white/85 transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="11" cy="11" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
          </nav>

          <div className="flex flex-1 items-end justify-between gap-8 py-12 lg:py-16">
            <div className="animate-fade-up max-w-3xl" style={{ animationDelay: "120ms" }}>
              <h1 className="text-6xl font-black leading-[0.9] tracking-[0.08em] sm:text-7xl lg:text-[9rem]">
                VISIT
                <br />
                TOKYO
              </h1>
              <div className="mt-8 flex items-center gap-3 text-white/70">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4 21 20H3z" />
                  <path d="M12 10v4" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </div>

            <div
              className="animate-fade-up hidden min-w-[160px] items-start justify-end self-center lg:flex"
              style={{ animationDelay: "240ms" }}
            >
              <div className="flex flex-col items-end gap-3 text-sm tracking-[0.32em] text-white/45">
                <span>01</span>
                <span>02</span>
                <div className="my-1 flex items-center gap-4 text-white">
                  <span className="text-5xl font-bold tracking-[0.08em] text-[#f97316]">03</span>
                  <span className="h-px w-16 bg-white/55" />
                </div>
                <span>04</span>
                <span>05</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-up grid gap-7 border-t border-white/15 pt-8 text-sm text-white/70 md:grid-cols-3" style={{ animationDelay: "360ms" }}>
            {topStories.map((item, idx) => (
              <article key={item.title} className="space-y-3">
                <h2 className="text-xs uppercase tracking-[0.24em] text-white/88">{item.title}</h2>
                <p className="max-w-sm text-[13px] leading-relaxed">{item.text}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs tracking-[0.24em] text-white">
                  <span className={idx === 0 ? "border-b border-[#f97316] pb-1" : "border-b border-transparent pb-1"}>
                    LEARN MORE →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#07090c] px-6 py-20 lg:px-12"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 980px" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.26em] text-white/50">and get unforgettable emotions</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[0.12em] text-white sm:text-5xl">POPULAR TOURS</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tours.map((tour, idx) => (
              <figure key={tour.name} className="group relative h-[430px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#f97316]">{tour.name}</p>
                  <p className="mt-2 text-sm text-white/85">{tour.caption}</p>
                </figcaption>
                {idx === 2 && <span className="absolute inset-y-0 right-0 w-px bg-[#f97316]/80" />}
              </figure>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-white/20" />
            <span className="h-[3px] w-20 bg-[#f97316]" />
            <span className="h-px flex-1 bg-white/20" />
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden px-6 py-20 lg:px-12 lg:py-24"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 980px" }}
      >
        <img
          src="/images/aurora-mountains-night.png"
          alt="Night mountains with colorful aurora glow"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06070a]/88 via-[#180f31]/68 to-[#07070b]/88" />
        <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1400px] flex-col justify-between">
          <div className="max-w-3xl pt-6">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[0.09em] sm:text-6xl lg:text-7xl">
              TRAVEL AND
              <br />
              INSPIRE
              <br />
              YOUR LIFE
            </h2>
            <div className="mt-10 inline-flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-white/90">
              <button
                className="animate-pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-white text-black"
                aria-label="Watch video"
              >
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
                  <path d="M8 6v12l10-6z" />
                </svg>
              </button>
              <span>Watch video</span>
            </div>
          </div>

          <div className="relative ml-auto mt-10 w-full max-w-[540px] pb-1">
            <span className="absolute -top-12 left-1/2 hidden h-px w-44 -translate-x-1/2 -rotate-[31deg] bg-white/45 md:block" />
            <div className="grid gap-4 sm:grid-cols-2">
              {reelThumbs.map((clip) => (
                <article key={clip.title} className="relative overflow-hidden">
                  <img
                    src={clip.image}
                    alt={clip.title}
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs tracking-[0.12em] text-white">
                    <p>{clip.title}</p>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-current">
                        <path d="M8 6v12l10-6z" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
