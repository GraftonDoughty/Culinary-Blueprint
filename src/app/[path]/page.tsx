import Navbar from "@/components/Navbar";
import RecipeGrid from "@/components/RecipeGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import RecipeForm from "@/components/RecipeForm";

export default async function DynamicPathPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  
  if (path === "create" || path === "add") {
    return (
      <div className="flex min-h-screen flex-col bg-cream-50">
        <Navbar />
        <main className="flex-grow">
          <RecipeForm />
        </main>
        <Footer />
      </div>
    );
  }

  const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : "Archive";

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-artisanal-brown/5 border-b border-cream-200">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-artisanal-dark">{title}</h1>
            <p className="mt-2 text-sm text-artisanal-dark/60 font-medium uppercase tracking-widest">
              Exploring the {title} collection
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <RecipeGrid />
            </div>
            <div className="mt-16 lg:col-span-4 lg:mt-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
