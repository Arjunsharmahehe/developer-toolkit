import { buttonStyles } from "@/styles/styles";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-white text-neutral-950 p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-base text-neutral-600 mb-6">The page you are looking for is under construction or does not exist.</p>
            <Link href="/" className={`${buttonStyles.primary} ${buttonStyles.large} mb-24`}>Go back to Home</Link>
        </main>
    )
}