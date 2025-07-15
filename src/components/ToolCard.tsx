import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ToolCard({ name, description, route, contributers }: { name: string; description: string; route: string; contributers?: string[] }) {
    return (
        <Link href={route} className="w-full block hover:translate-x-1 transition-transform duration-1000 will-change-transform ease-in-out">

            <h3 className="mb-1 flex items-baseline justify-between">
                <span className="text-md font-medium">{name}</span>
                <p className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-100 transition-colors">
                    <ArrowUpRight className="size-4"/>
                </p>
            </h3>

            <p className="text-sm text-neutral-500 mb-1">{description}</p>

            {contributers && contributers.length > 0 && (
                <p className="text-xs text-neutral-400">
                    <span className="font-medium">Credits: </span>
                    {contributers.map((contributer, index) => (
                        <span key={index}>
                            {index > 0 && <span className="mx-1 text-neutral-400">/</span>}
                            <span>{contributer}</span>
                        </span>
                    ))}
                </p>
            )}
        </Link>
    );
}