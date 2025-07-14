import { MoonIcon } from "lucide-react";
import ToolCard from "../components/ToolCard.tsx";
import { contributers, utilities } from "../constants/index.js"

export default function Home() {
  return (
    <main className="bg-white text-neutral-900  px-4 py-4 min-h-svh">
      <div className="max-w-[500px] mx-auto flex flex-col items-center justify-between">
        
        <div>
          <h1 className="text-xl font-medium tracking-tight mb-3 flex items-baseline justify-between">
            <span className="font-semibold">Developer Toolkit</span>
            <button><MoonIcon className="size-6"/></button>
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
            <p className="font-normal text-sm text-neutral-400">Search</p>
          </h2>
          <div className="flex flex-col gap-4 w-full">
            {utilities.map((utility, index) => <ToolCard key={utility.id} {...utility}/>)}
          </div>
        </div>

      </div>

    </main>
  );
}
