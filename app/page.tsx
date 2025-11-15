import Image from "next/image";

const producten = [
  {
    id: 1,
    naam: "Hartvormig rozenboeket",
    prijs: 89,
    img: "/images/heart shaped woods red roses bouquet.JPG",
  },
  {
    id: 2,
    naam: "Blauw money bouquet",
    prijs: 99,
    img: "/images/blue money bouquet.JPG",
  },
  {
    id: 3,
    naam: "Teddy ‘I love you’ bubble bouquet",
    prijs: 75,
    img: "/images/I love you teddy bear bubble bouquet met bloemen.jpg",
  },
  {
    id: 4,
    naam: "Ballonnenboog XXL",
    prijs: 250,
    img: "/images/ballonnenboog met airballoon bloemstuk XXl.jpg",
  },
];

const showcase = [
  {
    img: "/images/white and pink roses pink lilies pink wrap bouquet.JPG",
    titel: "Roze & witte rozen",
  },
  {
    img: "/images/hot airballoon bloemstuk XXL met sieraden en chocolade.jpg",
    titel: "Hot air balloon luxe",
  },
  {
    img: "/images/red roses white orchids black wrap bouquet.JPG",
    titel: "Rode rozen & orchideeën",
  },
  {
    img: "/images/vlinder ballon stand.jpg",
    titel: "Vlinder ballonstand",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07070d] text-white font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Eventurella
        </div>
        <div className="hidden md:flex gap-6 text-sm opacity-80">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#weddings" className="hover:text-white">
            Weddings
          </a>
          <a href="#showcase" className="hover:text-white">
            Portfolio
          </a>
          <a href="#pricing" className="hover:text-white">
            Prijzen
          </a>
          <a href="#giftshop" className="hover:text-white">
            Giftshop
          </a>
          <a href="#about" className="hover:text-white">
            Over ons
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="pt-40 pb-32 text-center px-6 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Luxe Event Styling
          <span className="block mt-2 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            met een futuristische touch
          </span>
        </h1>
        <p className="mt-4 text-white/70 text-lg">
          Ballondecoraties • Bloemenkunst • Cadeaus op maat
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#showcase"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-semibold shadow-lg shadow-fuchsia-500/20 hover:scale-105 transition"
          >
            Bekijk werk
          </a>
          <a
            href="#giftshop"
            className="px-6 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/10 transition"
          >
            Giftshop
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Onze services</h2>
        <p className="text-center text-white/60 max-w-xl mx-auto">
          Luxe styling voor bruiloften, verjaardagen, openingen en zakelijke
          events.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-400/40 transition shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold mb-2">Ballondecoraties</h3>
            <p className="text-white/60 text-sm">
              Bogen, backdrops, ballonstanden, XL-displays.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-400/40 transition shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold mb-2">Bloemenkunst</h3>
            <p className="text-white/60 text-sm">
              Boeketten, luxe combinaties & gifting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold mb-2">Event styling</h3>
            <p className="text-white/60 text-sm">
              Volledige thema-styling & decorconcepten.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-400/40 transition shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold mb-2">Cadeaus op maat</h3>
            <p className="text-white/60 text-sm">
              Handgemaakte cadeaus, bubble-displays & luxe gifting.
            </p>
          </div>
        </div>
      </section>

      {/* WEDDINGS */}
      <section
        id="weddings"
        className="py-32 px-6 bg-white/5 border-y border-white/10 mt-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Bruiloften</h2>
          <p className="text-center text-white/70 max-w-xl mx-auto">
            Romantische en elegante styling op maat — perfect voor jullie
            speciale dag.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Image
              src="/images/white and pink roses pink lilies pink wrap bouquet.JPG"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg shadow-black/30 hover:scale-[1.02] transition"
              alt="Wedding decor 1"
            />

            <Image
              src="/images/red roses white orchids black wrap bouquet.JPG"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg shadow-black/30 hover:scale-[1.02] transition"
              alt="Wedding decor 2"
            />

            <Image
              src="/images/heart shaped woods red roses bouquet.JPG"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg shadow-black/30 hover:scale-[1.02] transition"
              alt="Wedding decor 3"
            />
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
        <p className="text-center text-white/60 max-w-xl mx-auto">
          Een selectie van recent werk.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {showcase.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <Image
                src={s.img}
                width={500}
                height={400}
                alt={s.titel}
                className="h-64 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm text-white/80">{s.titel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Prijzen</h2>
          <p className="text-white/70">
            Indicatieve prijzen — we werken altijd met offertes op maat,
            afgestemd op jouw wensen.
          </p>
          <ul className="mt-8 space-y-2 text-white/80 text-sm">
            <li>• Backdrop + basisstyling vanaf €349</li>
            <li>• Ballonnenbogen vanaf €150</li>
            <li>• Luxe bloemstukken vanaf €75</li>
            <li>• Zakelijke events & brand activations: op aanvraag</li>
          </ul>
        </div>
      </section>

      {/* GIFTSHOP */}
      <section id="giftshop" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Giftshop</h2>
        <p className="text-center text-white/60 max-w-xl mx-auto">
          Handgemaakte cadeaus – bestel direct via WhatsApp.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {producten.map((p) => (
            <div
              key={p.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col"
            >
              <Image
                src={p.img}
                width={400}
                height={300}
                alt={p.naam}
                className="rounded-xl h-40 w-full object-cover"
              />
              <h3 className="mt-3 font-semibold">{p.naam}</h3>
              <p className="text-fuchsia-300 font-medium">€{p.prijs}</p>
              <a
                href={`https://wa.me/31649625216?text=Hallo! Ik wil graag bestellen: ${encodeURIComponent(
                  p.naam
                )} (€${p.prijs}).`}
                className="mt-3 inline-block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-sm font-semibold"
              >
                Bestel via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Over Eventurella</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Eventurella is een creatief stylingduo uit Kerkrade. Onze passie is het
            creëren van unieke, luxe designs die emoties oproepen en perfect
            passen bij het verhaal van de klant. Van kleine, intieme momenten tot
            grootschalige zakelijke events – wij verzorgen styling die blijft
            hangen.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-center text-white/70 mb-6">
          Vertel ons over jouw event, dan denken wij met je mee.
        </p>
        <div className="space-y-2 text-center text-sm text-white/80">
          <p>📧 info@eventurella.com</p>
          <p>📞 +31 6 49625216</p>
          <p>📍 Kerkrade</p>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-white/50 border-t border-white/10">
        © {new Date().getFullYear()} Eventurella — Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
