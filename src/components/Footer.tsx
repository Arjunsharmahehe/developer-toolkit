import Link from "next/link"
import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="w-full max-w-[500px] mx-auto flex text-sm text-neutral-400 justify-between items-baseline">
                <p>developer-toolkit</p>
                <Link className="flex gap-1 items-center hover:underline"
                    href={"https://github.com/arjunsharmahehe/developer-toolkit"}>
                        Github 
                        <ExternalLink className="size-3"/>
                </Link>
            </footer>
        </>
    )
}