import { HeadingStyles, textStyles, subHeadingStyles } from "@/styles/styles"
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";

export default function Loading(){
    return (
        <main className="bg-white text-neutral-950 p-4 flex flex-col justify-between min-h-screen">
            <div className="max-w-[500px] mx-auto flex flex-col items-center">
                <BackToHome className="mb-6"/>
                <div>
                    <h2 className={`${HeadingStyles.h2}`}>HTTP Status Codes</h2>
                    <p className={`${subHeadingStyles.small} ${textStyles.secondary}`}>
                        A comprehensive list of HTTP status codes for your reference. Learn, understand, and use them effectively in your web applications. 
                    </p>
                </div>

                <div className="flex flex-col w-full items-baseline gap-3 mt-4">
                    <p className="max-w-36 animate-pulse w-full h-7 bg-neutral-100 rounded-md"/>
                    <p className="w-full mt-4 h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                    <p className="w-full h-24 animate-pulse bg-neutral-100 rounded-md"/>
                </div>

            </div>

            <Footer/>
        </main>
    )
}