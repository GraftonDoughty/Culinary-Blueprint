import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center lg:col-span-6 lg:text-left">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-artisanal-brown mb-4">
              Artisanal Archives
            </h2>
            <h1 className="font-serif text-5xl font-bold tracking-tight text-artisanal-dark sm:text-6xl xl:text-7xl">
              Elevate Your <span className="text-artisanal-brown">Craft</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-artisanal-dark/70 lg:max-w-md">
              A curated space for the curious cook. Document, test, and share your culinary discoveries in a refined, distraction-free environment.
            </p>
            <div className="mt-10 flex items-center gap-x-6 sm:justify-center lg:justify-start">
              <Link 
                href="/archive"
                className="rounded-full bg-artisanal-dark px-10 py-4 text-sm font-semibold text-white shadow-xl hover:bg-artisanal-brown transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore The Archive
              </Link>
            </div>
          </div>
          <div className="relative mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream-200">
                <Image
                  src="/images/hero.png"
                  alt="Artisanal sourdough bread on a wooden board"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-artisanal-brown/10 backdrop-blur-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
