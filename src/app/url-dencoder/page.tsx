"use client"
import { useState } from "react";
import { buttonStyles, HeadingStyles } from "@/styles/styles";
import CopyBlock from "@/components/CopyBlock";

export default function Page(){

    const [url, setUrl] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [modifiedUrl, setModifiedUrl] = useState("");

    function handleEncode() {
        setModifiedUrl(encodeURIComponent(url));
    }

    function handleDecode() {
        setModifiedUrl(decodeURIComponent(url));
    }

    function handleCopy(){
        navigator.clipboard.writeText(modifiedUrl)
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
        <main className="bg-white text-neutral-950 pt-4 flex items-center justify-center min-h-screen px-4">
            <div className="min-h-screen flex flex-col items-center justify-center max-w-[500px] w-full">
                <h2 className={`${HeadingStyles.h2} w-fit mx-auto`}>URL Decoder/Encoder</h2>
                <p className="text-sm text-neutral-500 mb-6">A simple tool to decode or encode URLs.</p>
                <div className="w-full flex flex-col items-center">

                    <textarea 
                        className="w-full h-32 py-2 px-4 border border-neutral-200 rounded-md mb-2"
                        placeholder="Enter URL here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    ></textarea>

                    <div className="flex w-full gap-2 mb-4">
                        <button onClick={handleEncode} 
                                className={`flex-1 ${buttonStyles.medium} ${buttonStyles.primary}`} >
                            Encode
                        </button>
                        <button onClick={handleDecode} 
                                className={`flex-1 ${buttonStyles.medium} ${buttonStyles.primary}`} >
                            Decode
                        </button>
                    </div>

                    { modifiedUrl ? (
                        <CopyBlock isCopied={isCopied} content={modifiedUrl} handleCopy={handleCopy} />
                    ) : (
                        <p className="text-neutral-500 text-sm text-center py-6.5 mb-20">No result to display</p>
                    )}
                    
                </div>
            </div>
        </main>
    )
}