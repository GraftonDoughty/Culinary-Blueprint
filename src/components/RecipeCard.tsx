import Image from "next/image";
import Link from "next/link";
import { Clock, Pencil, Sliders } from "lucide-react";

export interface Recipe {
  id: string;
  title: string;
  prepTime: string;
  image: string;
  category: "Main Course" | "Dessert" | "Appetizer";
  temperature: "Cold" | "Hot";
  datePublished: string;
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="group relative bg-cream-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-cream-200">
      <Link href={`/${recipe.id}`} className="block">
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="inline-flex items-center rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-artisanal-dark backdrop-blur-sm">
              {recipe.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-artisanal-dark mb-2 group-hover:text-artisanal-brown transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center text-artisanal-dark/40 text-[10px] font-bold uppercase tracking-widest">
            <Clock className="h-3 w-3 mr-1" /> {recipe.prepTime}
            <span className="mx-2 opacity-30">•</span>
            <span>{recipe.temperature}</span>
          </div>
        </div>
      </Link>

      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Link 
          href={`/tweak?id=${recipe.id}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-artisanal-dark shadow-sm hover:bg-white transition-colors"
          title="Manipulate Recipe"
        >
          <Sliders className="h-4 w-4" />
        </Link>
        <Link 
          href={`/edit?id=${recipe.id}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-artisanal-dark shadow-sm hover:bg-white transition-colors"
          title="Edit Recipe"
        >
          <Pencil className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
