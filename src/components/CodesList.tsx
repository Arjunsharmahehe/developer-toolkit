"use client"; 

import { buttonStyles, subHeadingStyles, textStyles } from "@/styles/styles";
import { useState } from "react";


type CodeItem = {
    name: string;
    htmlcode: string;
};


function Row({ name, htmlcode, onClick }: { name: string, htmlcode: string, onClick: () => void }) {
    return (
        <div className="text-neutral-950 border-b border-neutral-200 py-2 flex justify-between items-center w-full">

            <p className={`${subHeadingStyles.small} ${textStyles.secondary} text-sm flex gap-2`}>
                <span className="font-bol text-neutral-950" dangerouslySetInnerHTML={{ __html: htmlcode }} />
                : {name}
            </p>

            <button 
                onClick={onClick} 
                className={`${textStyles.primary} text-left font-mono ${buttonStyles.secondary} py-1 px-2 rounded-md transition-colors`}
            >
                {htmlcode}
            </button>
        </div>
    );
}


export default function CodeList({ codes }: { codes: CodeItem[] }) {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = (codeToCopy: string) => {
        navigator.clipboard.writeText(codeToCopy);
        setCopiedCode(codeToCopy);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    if (codes.length === 0) {
        return <p className="text-neutral-400 mx-auto mt-4">No HTML codes found</p>;
    }

    return (
        <div className="flex flex-col w-full">
            {codes.map((code, index) => (
                <Row
                    key={index}
                    name={code.name}
                    htmlcode={code.htmlcode}
                    onClick={() => handleCopy(code.htmlcode)}
                />
            ))}
            {copiedCode && (
                <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white text-green-700 px-4 py-2 rounded-md border-2 border-green-800 shadow-lg">
                    Copied: {copiedCode}
                </div>
            )}
        </div>
    );
}