import Link from "next/link"
import { ArrowLeft } from "lucide-react";
import { buttonStyles } from "@/styles/styles";

export default function BackToHome({ className }: { className?: string }) {
    return (
        <Link href={"/"} className={`p-2 mr-auto mb-12 rounded-md ${buttonStyles.secondary} ${className}`}>
            <ArrowLeft className="size-5"/>
        </Link>
    )
}