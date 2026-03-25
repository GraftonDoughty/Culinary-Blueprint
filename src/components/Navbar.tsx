import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-cream-200 bg-cream-50/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="font-serif text-xl tracking-tight text-artisanal-dark">
            L-Archive-Artisanal
          </Link>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            <Link href="/" className="text-sm font-medium text-artisanal-dark hover:text-artisanal-brown transition-colors">Home</Link>
            <Link href="/create" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Create</Link>
            <Link href="/recipes" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Recipes</Link>
            <Link href="/archives" className="text-sm font-medium text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">Archives</Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <button className="p-2 text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button className="p-2 text-artisanal-dark/60 hover:text-artisanal-brown transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
