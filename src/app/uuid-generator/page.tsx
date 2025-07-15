"use client"

import { useEffect, useState } from "react";
import { generateUUID } from "../../utils/UUID/generators";
import CopyBlock from "@/components/CopyBlock";
import BackToHome from "@/components/BackToHome";

export default function Page(){
    const [uuid, setUUID] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const handleGenerateUUID = () => {
        setUUID(generateUUID());
    };

    useEffect(() => {
        handleGenerateUUID()
    }, [])

    function handleCopy(){
        navigator.clipboard.writeText(uuid)
            .then(() => {
                console.log("Text copied to clipboard");
                setIsCopied(true);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
                setIsCopied(false);
            });
            setTimeout(() => {
                setIsCopied(false);
            }, 1000)
    }

    return (
        <div className="p-4 flex flex-col min-h-screen items-center">
            <div className="flex flex-col min-h-screen items-center justify-center max-w-[500px] w-full">
                <BackToHome className="md:ml-12"/>
                <h1 className="text-2xl font-bold mb-4">UUID Generator</h1>
                <button 
                    onClick={handleGenerateUUID} 
                    className="bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease"
                >
                    Generate UUID
                </button>
                {uuid && (
                    <CopyBlock isCopied={isCopied} content={uuid} handleCopy={handleCopy} />
                )}
            </div>
        </div>
    );
}