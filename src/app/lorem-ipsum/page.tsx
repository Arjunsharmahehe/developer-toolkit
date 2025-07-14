"use client"

import { useState } from "react";
import { generateMultipleParagraphs, generateParagraph, generateSentence } from "../../../utils/lorem-ipsum/generators";
import { text } from "stream/consumers";

export default function Page(){

    const [loremIpsum, setLoremIpsum] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [textToCopy, setTextToCopy] = useState("");
    const [sentenceCount, setSentenceCount] = useState(4);
    const [avgSentenceLength, setAvgSentenceLength] = useState(10);
    const [paragraphCount, setParagraphCount] = useState(2);
    const [textAlignment, setTextAlignment] = useState<"left" | "right" | "center">("left");
    const [isCopied, setIsCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    function manageMultipleParagraphs(sentenceCount: number, avgSentenceLength: number, paragraphCount: number): string {
        const paragraphs = generateMultipleParagraphs(sentenceCount, avgSentenceLength, paragraphCount);
        setLoremIpsum(paragraphs.join("<br/>"));
        setTextToCopy(paragraphs.join("\n\n"));

        return paragraphs.join("<br/>");
    }

    function handleCopy(){
        navigator.clipboard.writeText(textToCopy)
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
        <div className="flex flex-col items-center gap-8 bg-white min-h-screen p-8">
            <div className="flex flex-col max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-lg gap-3">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 mx-auto w-fit">Lorem Ipsum</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="sentenceCount"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Sentence Count:
                        </label>
                        <div className="w-full flex flex-row gap-2 items-center">
                            <input type="range" min={1} max={20} value={sentenceCount} 
                                onChange={(e) => setSentenceCount(Number(e.target.value))}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <input type="number" min={1} max={20} value={sentenceCount} 
                                onChange={(e) => setSentenceCount(Number(e.target.value))}
                                className="w-12 text-center px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200 no-spinner" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="sentenceCount"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Avg. Sentence Length:
                        </label>
                        <div className="w-full flex flex-row gap-2 items-center">
                            <input type="range" min={1} max={20} value={avgSentenceLength} 
                                onChange={(e) => setAvgSentenceLength(Number(e.target.value))}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <input type="number" min={1} max={20} value={avgSentenceLength} 
                                onChange={(e) => setAvgSentenceLength(Number(e.target.value))}
                                className="w-12 text-center px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200 no-spinner" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="sentenceCount"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Paragraph Count:
                        </label>
                        <div className="w-full flex flex-row gap-2 items-center">
                            <input type="range" min={1} max={20} value={paragraphCount} 
                                onChange={(e) => setParagraphCount(Number(e.target.value))}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <input type="number" min={1} max={20} value={paragraphCount} 
                                onChange={(e) => setParagraphCount(Number(e.target.value))}
                                className="w-12 text-center px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200 no-spinner" 
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 flex-wrap">
                    <h2 className="text-xl font-semibold text-gray-800">Generate:</h2>
                    <div className="flex gap-3">
                        <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease" 
                                onClick={() => {
                                    setLoremIpsum(generateSentence(avgSentenceLength))
                                    setTextToCopy(loremIpsum)
                                }}>
                                    Sentence
                        </button>
                        <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease"  
                                onClick={() => {
                                    setLoremIpsum(generateParagraph(sentenceCount, avgSentenceLength))
                                    setTextToCopy(loremIpsum)
                                    }}>
                                        Paragraph
                        </button>
                        <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease" 
                        onClick={() => setLoremIpsum(manageMultipleParagraphs(avgSentenceLength, sentenceCount, paragraphCount))}>Paragraphs</button>
                    </div>
                </div>

                <hr className="border-neutral-200"/>
                
                <div className="flex w-full justify-between">
                    <div className="flex">
                        <button onClick={() => setTextAlignment("left")} className={`${ textAlignment === "left" ? "bg-neutral-200/80 hover:bg-neutral-300/70" : "bg-white hover:bg-neutral-100"} px-0.5 py-0.5 rounded-md  transition-colors duration-100 ease`}>
                            <img className="h-8 w-8" src={'/icons/align-left.svg'}/>
                        </button>
                        <button onClick={() => setTextAlignment("center")}  className={`${ textAlignment === "center" ? "bg-neutral-200/80 hover:bg-neutral-300/70" : "bg-white hover:bg-neutral-100"} px-0.5 py-0.5 rounded-md transition-colors duration-100 ease`}>
                            <img className="h-8 w-8" src={'/icons/align-center.svg'}/>
                            </button>
                        <button onClick={() => setTextAlignment("right")} className={`${ textAlignment === "right" ? "bg-neutral-200/80 hover:bg-neutral-300/70" : "bg-white hover:bg-neutral-100"} px-0.5 py-0.5 rounded-md transition-colors duration-100 ease`}>
                            <img className="h-8 w-8" src={'/icons/align-right.svg'}/>
                        </button>
                    </div>

                    <button className={`${ isMobile ? "bg-neutral-200/80 hover:bg-neutral-300/70" : "bg-white hover:bg-neutral-100"} px-0.5 py-0.5 rounded-md transition-colors duration-100 ease`}
                            onClick={() => setIsMobile(!isMobile)}>
                        <img className="h-7 w-7" src={'/icons/mobile.svg'}/>
                    </button>
                </div>

            </div>
            <div className="flex flex-col">
                <p className={`${ isCopied ? "text-green-700" : "text-white"} ml-auto px-3`}>Copied</p>
                <button dangerouslySetInnerHTML={{__html: loremIpsum}}
                onClick={handleCopy}
                className={`px-4 py-3 text-wrap bg-white border-2 border-neutral-200 rounded-md text-black`}
                style={{ textAlign: textAlignment,
                    maxWidth: isMobile ? "36ch" : "672px",
                 }}
                />
            </div>
        </div>
    )
}


// "use client"

// import { useState } from "react";
// import { generateMultipleParagraphs, generateParagraph, generateSentence } from "../../../utils/lorem-ipsum/generators";

// export default function Page(){

//     const [loremIpsum, setLoremIpsum] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
//     const [textToCopy, setTextToCopy] = useState("");
//     const [sentenceCount, setSentenceCount] = useState(4);
//     const [avgSentenceLength, setAvgSentenceLength] = useState(10);
//     const [paragraphCount, setParagraphCount] = useState(2);

//     function manageMultipleParagraphs(sentenceCount: number, avgSentenceLength: number, paragraphCount: number): string {
//         const paragraphs = generateMultipleParagraphs(sentenceCount, avgSentenceLength, paragraphCount);
//         setLoremIpsum(paragraphs.join("<br/>"));
//         setTextToCopy(paragraphs.join("\n\n"));

//         return paragraphs.join("<br/>");
//     }

//     return (
//         <div className="flex flex-col items-center gap-8 bg-white min-h-screen p-8">
//             <div className="flex flex-col max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-lg gap-3">
//                 <h2 className="text-xl font-semibold mb-6 text-gray-800 mx-auto w-fit">Lorem Ipsum</h2>
//                 <div className="flex flex-col gap-2">
//                     <div className="flex flex-col">
//                         <label htmlFor="sentenceCount"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                             Sentence Count:
//                         </label>
//                         <div className="w-full flex flex-row gap-2 items-center">
//                             <input type="range" min={1} max={20} value={sentenceCount} 
//                                 onChange={(e) => setSentenceCount(Number(e.target.value))}
//                                 className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//                             />
//                             <input type="number" min={1} max={20} value={sentenceCount} 
//                                 onChange={(e) => setSentenceCount(Number(e.target.value))}
//                                 className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="sentenceCount"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                             Avg. Sentence Length:
//                         </label>
//                         <div className="w-full flex flex-row gap-2 items-center">
//                             <input type="range" min={1} max={20} value={avgSentenceLength} 
//                                 onChange={(e) => setAvgSentenceLength(Number(e.target.value))}
//                                 className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//                             />
//                             <input type="number" min={1} max={20} value={avgSentenceLength} 
//                                 onChange={(e) => setAvgSentenceLength(Number(e.target.value))}
//                                 className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-col w-full">
//                         <label htmlFor="sentenceCount"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                             Paragraph Count:
//                         </label>
//                         <div className="w-full flex flex-row gap-2 items-center">
//                             <input type="range" min={1} max={20} value={paragraphCount} 
//                                 onChange={(e) => setParagraphCount(Number(e.target.value))}
//                                 className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
//                             />
//                             <input type="number" min={1} max={20} value={paragraphCount} 
//                                 onChange={(e) => setParagraphCount(Number(e.target.value))}
//                                 className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-2 flex-wrap">
//                     <h2 className="text-xl font-semibold text-gray-800">Generate:</h2>
//                     <div className="flex gap-3">
//                         <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease" 
//                                 onClick={() => setLoremIpsum(generateSentence(avgSentenceLength))}>Sentence</button>
//                         <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease"  
//                                 onClick={() => setLoremIpsum(generateParagraph(sentenceCount, avgSentenceLength))}>Paragraph</button>
//                         <button className="flex-1 bg-neutral-200 rounded-md py-2 px-3 hover:bg-neutral-300 transition-colors duration-100 ease" 
//                         onClick={() => setLoremIpsum(manageMultipleParagraphs(avgSentenceLength, sentenceCount, paragraphCount))}>Paragraphs</button>
//                     </div>
//                 </div>
//             </div>

//             <button dangerouslySetInnerHTML={{__html: loremIpsum}}
//                className="px-4 py-3 max-w-2xl text-wrap bg-white border-2 border-neutral-200 rounded-md text-black text-left"
//             />
//         </div>
//     )
// }