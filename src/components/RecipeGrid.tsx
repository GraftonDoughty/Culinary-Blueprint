"use client";

import { useState } from "react";
import RecipeCard, { Recipe } from "./RecipeCard";
import NewRecipeModal from "./NewRecipeModal";
import { Filter, SlidersHorizontal, Plus } from "lucide-react";

const INITIAL_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Artisanal Sourdough",
    prepTime: "24h",
    image: "/images/hero.png",
    category: "Main Course",
    temperature: "Hot",
    datePublished: "2024-03-20",
  },
  {
    id: "2",
    title: "Lavender Macarons",
    prepTime: "2h",
    image: "/images/macarons.png",
    category: "Dessert",
    temperature: "Cold",
    datePublished: "2024-03-22",
  },
  {
    id: "3",
    title: "Harvest Beet Salad",
    prepTime: "45m",
    image: "/images/salad.png",
    category: "Appetizer",
    temperature: "Cold",
    datePublished: "2024-03-18",
  },
  {
    id: "4",
    title: "Golden Yolk Pasta",
    prepTime: "1.5h",
    image: "/images/pasta.png",
    category: "Main Course",
    temperature: "Hot",
    datePublished: "2024-03-24",
  },
];

export default function RecipeGrid() {
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [sortBy, setSortBy] = useState("date");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortRecipes = (criteria: string) => {
    setSortBy(criteria);
    const sorted = [...recipes].sort((a, b) => {
      if (criteria === "name") return a.title.localeCompare(b.title);
      if (criteria === "date") return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime();
      if (criteria === "temp") return a.temperature.localeCompare(b.temperature);
      if (criteria === "category") return a.category.localeCompare(b.category);
      return 0;
    });
    setRecipes(sorted);
  };

  return (
    <div className="w-full">
      <NewRecipeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-artisanal-dark/40 uppercase tracking-widest">Sort By:</span>
          <select 
            onChange={(e) => sortRecipes(e.target.value)}
            className="bg-transparent border-none text-sm font-bold text-artisanal-dark focus:ring-0 cursor-pointer hover:text-artisanal-brown transition-colors"
          >
            <option value="date">Date Published</option>
            <option value="name">Name</option>
            <option value="temp">Temperature</option>
            <option value="category">Category</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full border border-cream-200 bg-white px-4 py-2.5 text-sm font-semibold text-artisanal-dark hover:bg-cream-100 transition-colors">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full bg-artisanal-brown px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-artisanal-dark hover:-translate-y-0.5 transition-all"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Recipe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
