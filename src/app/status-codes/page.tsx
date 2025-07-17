import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { HeadingStyles, subHeadingStyles, textStyles } from "@/styles/styles";
import SearchInput from "@/components/SearchInput";
import { httpStatusCodes } from "@/utils/statusCodes/statusCodes";


export default async function Page({ searchParams }: { searchParams: Promise<{ query?: string | string[] }> }){

    const awaitedSearchParams = await searchParams;
    
      const query = Array.isArray(awaitedSearchParams.query)
        ? awaitedSearchParams.query[0] // If it's an array, take the first item
        : awaitedSearchParams.query || '';

      const filteredCodes = httpStatusCodes.filter((code) =>
        code.name.toLowerCase().includes(query.toLowerCase()) ||
        code.code.toString().includes(query.toLowerCase()) ||
        code.type.toLowerCase().includes(query.toLowerCase()) ||
        code.explanation.toLowerCase().includes(query.toLowerCase())
      );

    return (
        <main className="bg-white text-neutral-950 p-4 flex flex-col justify-between min-h-screen">
            <div className="max-w-[500px] mx-auto flex flex-col items-center">
            <BackToHome className="mb-6"/>
                <div>
                    <h2 className={`${HeadingStyles.h2}`}>HTTP Status Codes</h2>
                    <p className={`${subHeadingStyles.small} ${textStyles.secondary}`}>
                        A comprehensive list of HTTP status codes for your reference. Learn, understand, and use them effectively in your web applications. 
                    </p>
                </div>

                <div className="flex flex-col w-full items-baseline gap-2 mt-4">
                    <SearchInput/>
                    {filteredCodes.length > 0 
                        ? <StatusList codes={filteredCodes}/>
                        : <p className="text-neutral-400 mx-auto">No HTTP status codes found</p>}
                </div>

            </div>

            <Footer/>
        </main>
    )
}

type StatusCodeItem = {
    code: number;
    name: string;
    type: string;
    explanation: string;
};


function StatusList({ codes }: { codes: StatusCodeItem[] }) {
    
    if (codes.length === 0) {
        return <p className="text-neutral-400 mx-auto mt-4">No HTML codes found</p>;
    }

    return (
        <div className="flex flex-col gap-4 w-full mt-4">
            {codes.map((code, index) => (
                <Row
                key={index}
                name={code.name}
                code={code.code}
                type={code.type}
                explanation={code.explanation}
                />
            ))}
        </div>
    );
}

function Row({ code, name, explanation, type }: StatusCodeItem) {
    return (
        <div className="text-neutral-950 border-b border-neutral-200 flex flex-col justify-baseline w-full">

            <p className={`text-base font-normal ${textStyles.primary} flex justify-between items-center gap-2`}>
                <span className="font-bold text-neutral-950">{code}</span> <Tag type={type} />
            </p>
            <p className={`font-medium text-base mb-1`}>{name}</p>
            <p className={`${textStyles.secondary} text-xs mb-2`}>{explanation}</p>
        </div>
    );
}

function Tag({type}: {type: string}) {
    return (
        <span className={`text-xs px-1 py-0.5 rounded-full h-fit border-2 ${ type === "Informational" ? "border-blue-500 text-blue-500" : type === "Successful" ? "border-green-500 text-green-500" : type === "Client Error" ? "border-yellow-500 text-yellow-500" : type === "Redirection" ? "border-lime-500 text-lime-500" : "border-red-500 text-red-500"}`}>
            {type}
        </span>
    )
}