"use client";

import { X, Upload, Clock, Type } from "lucide-react";

export default function NewRecipeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-artisanal-dark/40 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream-50 shadow-2xl border border-cream-200">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-cream-200 bg-cream-50 px-8 py-6">
          <h2 className="font-serif text-3xl font-bold text-artisanal-dark">New Recipe</h2>
          <button onClick={onClose} className="rounded-full p-2 text-artisanal-dark/40 hover:text-artisanal-brown transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form className="p-8 space-y-8 text-left" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="space-y-4">
            <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">
              <Type className="h-4 w-4 mr-2" />
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Artisanal Sourdough"
              className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-base focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all placeholder:text-artisanal-dark/20"
              required
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">Description</label>
            <textarea
              placeholder="Brief overview..."
              rows={2}
              className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-base focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all placeholder:text-artisanal-dark/20 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">
                <Clock className="h-4 w-4 mr-2" />
                Prep Time
              </label>
              <input
                type="text"
                placeholder="e.g. 24h"
                className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-base focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all placeholder:text-artisanal-dark/20"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">
                Category
              </label>
              <select className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-base focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all appearance-none">
                <option>Main Course</option>
                <option>Dessert</option>
                <option>Appetizer</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">Ingredients</label>
            <textarea
              placeholder="Enter ingredients (one per line)..."
              rows={3}
              className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-sm focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all placeholder:text-artisanal-dark/20"
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">Instructions</label>
            <textarea
              placeholder="Describe the steps..."
              rows={3}
              className="w-full rounded-2xl border border-cream-200 bg-white px-6 py-4 text-sm focus:ring-artisanal-brown focus:border-artisanal-brown outline-none transition-all placeholder:text-artisanal-dark/20"
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center text-sm font-bold uppercase tracking-widest text-artisanal-brown">
              <Upload className="h-4 w-4 mr-2" />
              Picture
            </label>
            <div className="group relative flex min-h-[200px] cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-cream-200 bg-white hover:border-artisanal-brown transition-all duration-300">
              <div className="text-center space-y-2">
                <Upload className="mx-auto h-8 w-8 text-artisanal-dark/20 group-hover:text-artisanal-brown transition-colors" />
                <p className="text-sm font-medium text-artisanal-dark/40">Click or drag image to upload</p>
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border border-cream-200 py-4 text-sm font-bold text-artisanal-dark hover:bg-cream-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-full bg-artisanal-dark py-4 text-sm font-bold text-white shadow-xl hover:bg-artisanal-brown hover:-translate-y-1 transition-all"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
