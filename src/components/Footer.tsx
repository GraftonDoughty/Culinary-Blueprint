import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 py-12 print:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-2xl tracking-tight text-artisanal-dark">
              L-Archive-Artisanal
            </Link>
            <p className="mt-2 text-sm text-artisanal-dark/50">
              © 2024 Crafted with intention.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Home</Link>
            <Link href="/recipes" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Recipes</Link>
            <Link href="/about" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">About</Link>
            <Link href="/privacy" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
