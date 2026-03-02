import Image from "next/image";
import Link from "next/link";

export default function BookSection() {
    return (
        <section className="w-full bg-[#1c1c1c] text-white py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="md:col-span-5 relative flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/book.png"
                                alt="NOT BEAUTY-FULL Book Cover"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            <span className="text-[12px] uppercase tracking-widest font-medium text-neutral-300">New Release</span>
                        </div>

                        <h2 className="text-4xl lg:text-[3.5rem] font-light tracking-tight mb-6 leading-[1.1]">
                            NOT BEAUTY-FULL
                        </h2>

                        <p className="text-neutral-400 font-medium text-[15px] leading-relaxed mb-10 max-w-lg">
                            A compelling journey of self-worth, resilience, and transformation, Not Beauty-Full is a deeply personal narrative unlocking the story of Eunice Appiah.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link
                                href="https://selar.com/594w65"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black px-8 py-3.5 rounded-full text-[13px] font-semibold uppercase tracking-wide hover:scale-105 transition-transform"
                            >
                                Get Your Copy
                            </Link>

                            <Link
                                href="https://selar.com/594w65"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[13px] font-medium text-white border-b border-transparent hover:border-white pb-0.5 transition-all uppercase tracking-wide flex items-center gap-2"
                            >
                                Learn More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
