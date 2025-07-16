import Footer from "@/components/Footer";

export default function Loading(){
    return (
    <main className="bg-white text-neutral-900  px-4 py-4 min-h-svh flex flex-col justify-between">
      <div className="max-w-[500px] mx-auto flex flex-col items-center justify-between">
        
        <div>

          <h1 className="text-xl font-medium tracking-tight mb-3 flex items-baseline justify-between">
            <span className="font-semibold">Developer Toolkit</span>
          </h1>

          <p className="text-sm text-neutral-400 max-w-xl mb-6">A growing collection of random tools to help developer in their often unplanned expiditions without the distraction of ads and bloat</p>
          
          <p className="text-sm">
            <span className="font-semibold text-neutral-800">Contributers: </span>
          </p>

        </div>

        <div className="w-full flex flex-col items-baseline mt-8 gap-4">

          <h2 className="flex justify-between items-baseline w-full">
            <span className="font-semibold text-xl">Tools</span>
            <p className="max-w-36 animate-pulse w-full h-7 bg-neutral-100 rounded-md"/>
          </h2>

          <div className="flex flex-col gap-4 w-full">
            <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
            <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
            <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
            <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
            <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
          </div>
        </div>

      </div>

      <Footer/>

    </main>
    )
}