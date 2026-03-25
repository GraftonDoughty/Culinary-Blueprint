export default function Sidebar() {
  return (
    <aside className="space-y-8">
      <div className="rounded-3xl bg-cream-100 p-8 border border-cream-200">
        <h3 className="font-serif text-2xl font-bold text-artisanal-dark mb-4 text-center">Join The Archive</h3>
        <p className="text-sm text-artisanal-dark/60 leading-relaxed text-center mb-6">
          Be the first to know about new artisanal recipes, testing techniques, and seasonal ingredients.
        </p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-full border-cream-200 bg-white px-6 py-3 text-sm focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all"
          />
          <button className="w-full rounded-full bg-artisanal-dark py-3 text-sm font-bold text-white hover:bg-artisanal-brown transition-all">
            Subscribe
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-artisanal-brown/10 p-8 border border-artisanal-brown/10">
        <h3 className="font-serif text-xl font-bold text-artisanal-dark mb-4">Trending Collections</h3>
        <ul className="space-y-4">
          {["Sourdough Basics", "Spring Harvest", "Pastel Desserts", "Quick Appetizers"].map((item) => (
            <li key={item}>
              <a href="#" className="flex items-center justify-between group">
                <span className="text-sm font-medium text-artisanal-dark/70 group-hover:text-artisanal-brown transition-colors">{item}</span>
                <span className="text-xs font-bold text-artisanal-brown opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">View</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-cream-200 p-8">
        <h3 className="font-serif text-xl font-bold text-artisanal-dark mb-4">Artisanal Tips</h3>
        <blockquote className="italic text-sm text-artisanal-dark/60 leading-loose">
          "The secret to a perfect crust is patience. Let the dough rest, let the oven breathe, and let the flavors speak for themselves."
        </blockquote>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-artisanal-brown">— Master Baker</p>
      </div>
    </aside>
  );
}
