import { MoonIcon } from "lucide-react";
import ToolCard from "../components/ToolCard";
import { contributers, utilities } from "../constants/index.js"
import Footer from "@/components/Footer";
import SearchInput from "@/components/SearchInput";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined; } }) {

  // TODO: Add a search bar to filter tools
  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0] // If it's an array, take the first item
    : searchParams.query || '';

  const filteredUtilities = utilities.filter((utility) => 
    utility.name.toLowerCase().includes(query.toLowerCase()) ||
    utility.description.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <main className="bg-white text-neutral-900  px-4 py-4 min-h-svh flex flex-col justify-between">
      <div className="max-w-[500px] mx-auto flex flex-col items-center justify-between">
        
        <div>

          <h1 className="text-xl font-medium tracking-tight mb-3 flex items-baseline justify-between">
            <span className="font-semibold">Developer Toolkit</span>
            <MoonIcon className="size-6 text-neutral-300 bg-neutral-200 p-0.5 rounded-sm"/>
          </h1>

          <p className="text-sm text-neutral-400 max-w-xl mb-6">A growing collection of random tools to help developer in their often unplanned expiditions without the distraction of ads and bloat</p>
          
          <p className="text-sm">
            <span className="font-semibold text-neutral-800">Contributers: </span>
            {contributers.map((contributer, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-1 text-neutral-400">|</span>}
                <a href={contributer.link} className="text-neutral-400 hover:underline">{contributer.name}</a>
              </span>
            ))}
          </p>

        </div>

        <div className="w-full flex flex-col items-baseline mt-8 gap-4">

          <h2 className="flex justify-between items-baseline w-full">
            <span className="font-semibold text-xl">Tools</span>
            <SearchInput/>
          </h2>

          <div className="flex flex-col gap-4 w-full">
            {filteredUtilities.length > 0 ? filteredUtilities.map((utility) => <ToolCard key={utility.id} {...utility}/>) : <p className="text-neutral-400 mx-auto">No tools found</p>}
          </div>
        </div>

      </div>

      <Footer/>

    </main>
  );
}
