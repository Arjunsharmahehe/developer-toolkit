"use client"

import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { buttonStyles, HeadingStyles, subHeadingStyles, textStyles } from "@/styles/styles";
import BackToHome from "@/components/BackToHome";

export default function PromptFormatterPage() {

    const [ role, setRole ] = useState("");
    const [ task, setTask ] = useState("");
    const [ context, setContext ] = useState("");
    const [ instructions, setInstructions ] = useState("");
    const [ outputFormat, setOutputFormat ] = useState("");
    const [ formattedPrompt, setFormattedPrompt ] = useState("");
    const [ isCopied, setIsCopied ] = useState(false);
    const [ copyPrompt, setCopyPrompt ] = useState("");

    const InputFields = [
        { label: "Role", placeholder: "e.g. You are a helpful assistant", value: role, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setRole(e.target.value) },
        { label: "Task", placeholder: "e.g. Write a poem about the sea", value: task, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setTask(e.target.value) },
        { label: "Context", placeholder: "e.g. The sea is vast and mysterious", value: context, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setContext(e.target.value) },
        { label: "Instructions", placeholder: "e.g. Use vivid imagery and metaphors", value: instructions, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setInstructions(e.target.value) },
        { label: "Output Format", placeholder: "e.g. The poem should contain 3 stanzas", value: outputFormat, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setOutputFormat(e.target.value) }
    ]

    function handleCopy(){
        navigator.clipboard.writeText(copyPrompt)
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

    function handleClearAll(){
        setRole("")
        setContext("")
        setTask("")
        setInstructions("")
        setOutputFormat("")
        setCopyPrompt("")
        setFormattedPrompt("")
    }

    useEffect(() => {
        const prompt = `${ role ? `#Role\n${role}\n\n` : "" }` +
            `${ task ? `#Task\n${task}\n\n` : "" }` +
            `${ context ? `#Context\n${context}\n\n` : "" }` +
            `${ instructions ? `#Instructions\n${instructions}\n\n` : "" }` +
            `${ outputFormat ? `#Output Format\n${outputFormat}\n\n` : "" }`

        setCopyPrompt(prompt.trim());

        setFormattedPrompt(prompt.split("\n").join("<Br/>"))
    }, [ role, task, context, instructions, outputFormat ]); // Recalculate prompt

    return (

        <main className="bg-white text-neutral-950 min-h-screen flex flex-col justify-between p-4">
            <div className="max-w-[500px] mx-auto flex flex-col">
                <BackToHome className="mb-6"/>
                <div>
                    <h2 className={`${HeadingStyles.h2}`}>Prompt Formatter</h2>
                    <p className={`${subHeadingStyles.small} ${textStyles.secondary}`}>
                        Get the results you want from AI models like ChatGPT and Claude by using our prompt formatting tool. 
                    </p>
                </div>

                <div className="flex flex-col items-baseline gap-2 mt-4">
                    { InputFields.map((field, index) => (
                        <InputField
                            key={index}
                            label={field.label}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                        />
                    ))}
                    <button className={`${buttonStyles.small} text-red-800 border-2 border-red-800 hover:bg-red-100`}
                            onClick={handleClearAll}>
                        Clear All
                    </button>
                </div>

                {formattedPrompt && (
                    <div className="flex flex-col">
                        <p className={`${ isCopied ? "text-green-700" : "text-white"} ml-auto px-3`}>Copied</p>
                        <button dangerouslySetInnerHTML={{__html: formattedPrompt}}
                        onClick={handleCopy}
                        className={`px-4 py-3 text-wrap bg-white border-2 border-neutral-200 rounded-md text-black text-left`}
                        />
                    </div>
                )}
            </div>
            <Footer/>
        </main>
    )
}

function InputField({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="w-full">
            <label>{label}</label>
            <textarea placeholder={placeholder} value={value} onChange={onChange} className="w-full border rounded-md text-sm p-2" />
        </div>
    )
}

