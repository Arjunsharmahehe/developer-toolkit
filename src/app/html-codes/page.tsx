import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { HeadingStyles, subHeadingStyles, textStyles } from "@/styles/styles";
import SearchInput from "@/components/SearchInput";
import { htmlCodes } from "@/utils/htmlCodes/htmlCodes";
import CodeList from "@/components/CodesList";

export default async function Page({ searchParams }: { searchParams: Promise<{ query?: string | string[] }> }){

    const awaitedSearchParams = await searchParams;
    
      const query = Array.isArray(awaitedSearchParams.query)
        ? awaitedSearchParams.query[0] // If it's an array, take the first item
        : awaitedSearchParams.query || '';
    
      const filteredCodes = htmlCodes.filter((code) => 
        code.name.toLowerCase().includes(query.toLowerCase()) ||
        code.aliases.toLowerCase().includes(query.toLowerCase())
      );

    return (
        <main className="bg-white text-neutral-950 p-4 flex flex-col justify-between min-h-screen">
            <div className="max-w-[500px] mx-auto flex flex-col items-center">
            <BackToHome className="mb-6"/>
                <div>
                    <h2 className={`${HeadingStyles.h2}`}>HTML Codes</h2>
                    <p className={`${subHeadingStyles.small} ${textStyles.secondary}`}>
                        A comprehensive list of HTML codes for your reference. Just tap on the code to copy it to your clipboard.
                    </p>
                </div>

                <div className="flex flex-col w-full items-baseline gap-2 mt-4">
                    <SearchInput/>
                    {filteredCodes.length > 0 
                        ? <CodeList codes={filteredCodes}/>
                        : <p className="text-neutral-400 mx-auto">No HTML codes found</p>}
                </div>

            </div>

            <Footer/>
        </main>
    )
}