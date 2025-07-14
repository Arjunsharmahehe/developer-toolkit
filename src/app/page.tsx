import { utilities } from "../constants/index.js"

export default function Home() {
  return (
    <main className="bg-white text-neutral-900  px-4 py-4 min-h-svh">
      <div className="max-w-xl mx-auto flex flex-col items-center justify-between">
        
        <div>
          <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
            <span>Developer Toolkit</span>
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mb-8">A growing collection of random tools to help developer in their often unplanned expiditions without the distraction of ads and bloat</p>
        </div>

      </div>

    </main>
  );
}
