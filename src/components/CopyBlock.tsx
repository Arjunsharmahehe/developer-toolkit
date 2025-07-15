export default function CopyBlock({ isCopied, content, handleCopy }: { isCopied: boolean, content: string, handleCopy: () => void }) {
    return (
        <div className="flex flex-col mb-20">
            <p className={`${isCopied ? "text-green-700" : "text-white"} ml-auto px-3`}>Copied</p>
            <button
                onClick={handleCopy}
                className={`px-4 py-3 text-wrap break-all text-left max-w-[500px] w-full bg-white border-2 border-neutral-200 rounded-md text-black`}
            >
                {content}
            </button>
        </div>
    );
}
