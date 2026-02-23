import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#fafafa] text-neutral-800 overflow-hidden">
            {/* 
        Layout:
        - Mobile: Flex column (text top, image bottom)
        - Desktop: 12 column grid (Left content: ~5 cols, Right portrait: ~7 cols)
      */}
            <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-screen">

                {/* --- Left Column (Content) --- */}
                <div className="relative z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-12 lg:col-span-5 lg:pl-32 xl:pl-40 min-h-[60vh] lg:min-h-0">

                    {/* Vertical Rail (Fixed position relative to this col or screen) */}
                    <div className="hidden lg:flex flex-col justify-between absolute left-8 top-0 bottom-0 py-12 w-8 pointer-events-none">
                        {/* Top Line */}
                        <div className="h-40 w-[1px] bg-neutral-200 mx-auto" />

                        {/* Label: Voice-over artist */}
                        <div
                            className="flex-1 flex items-center justify-center my-8 text-[11px] uppercase tracking-[0.2em] text-neutral-300 font-medium"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            Voice-over artist
                        </div>

                        {/* Bottom Group: 2024 & Line */}
                        <div className="flex flex-col items-center gap-6">
                            <span
                                className="text-[11px] font-medium text-neutral-300 tracking-widest"
                                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                            >
                                2024
                            </span>
                            <div className="h-20 w-[1px] bg-neutral-200 mx-auto" />
                        </div>
                    </div>

                    {/* Top Nav */}
                    <nav className="flex items-center justify-between pt-2 lg:pt-4 w-full">
                        {/* Logo */}
                        <div className="w-5 h-5 lg:w-6 lg:h-6 shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black">
                                <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
                                <path d="M12 6L4 20H20L12 6Z" fill="#fafafa" />
                            </svg>
                        </div>

                        {/* Mobile Book Button */}
                        <Link href="#" className="lg:hidden flex items-center gap-1 text-[11px] font-semibold text-neutral-800 uppercase tracking-widest pl-2 border-b border-black pb-0.5">
                            Book
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </Link>

                        {/* Links */}
                        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-600">
                            <Link href="#" className="hover:text-black transition-colors">About Me</Link>
                            <Link href="#" className="hover:text-black transition-colors">Portfolio</Link>
                            <Link href="#" className="hover:text-black transition-colors">Services</Link>
                            <Link href="#" className="hover:text-black transition-colors">Blog</Link>
                        </div>
                    </nav>

                    {/* Stats Row */}
                    <div className="flex items-start gap-8 lg:gap-12 mt-12 lg:mt-24 mb-auto">
                        <div>
                            <div className="text-xl lg:text-2xl font-light text-neutral-800 mb-1">Author</div>
                            <div className="text-[9px] lg:text-[10px] text-neutral-400 font-medium uppercase tracking-wide">NOT BEAUTY-FULL</div>
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl font-light text-neutral-800 mb-1">Translator</div>
                            <div className="text-[9px] lg:text-[10px] text-neutral-400 font-medium uppercase tracking-wide">Twi-to-English</div>
                        </div>
                        <div>
                            <div className="text-xl lg:text-2xl font-light text-neutral-800 mb-1">Writer</div>
                            <div className="text-[9px] lg:text-[10px] text-neutral-400 font-medium uppercase tracking-wide">Scriptwriter</div>
                        </div>
                    </div>

                    {/* Main Headline Area */}
                    <div className="py-8 lg:py-0">
                        <h1 className="text-[20vw] sm:text-[14vw] lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem] leading-[0.8] font-light tracking-tighter text-neutral-800 -ml-1 lg:-ml-2 uppercase">
                            My Voice
                        </h1>
                        <div className="flex flex-col gap-2 mt-4 lg:mt-6 ml-1 lg:ml-2">
                            <div className="flex items-center gap-2 lg:gap-3">
                                <div className="w-3 lg:w-4 h-[1px] bg-neutral-300"></div>
                                <p className="text-xs lg:text-sm text-neutral-500 font-medium uppercase tracking-widest text-[10px]">
                                    THE PERSONALITY BEHIND THE VOICE
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Area: Scroll */}
                    <div className="flex items-end justify-between mt-8 lg:mt-auto pb-2 lg:pb-4">
                        {/* Scroll Hint */}
                        <div className="flex items-center gap-2 text-[9px] lg:text-[10px] font-medium text-neutral-400 uppercase tracking-widest hidden sm:flex">
                            <span>Scroll down</span>
                            <svg className="animate-bounce" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>
                    </div>

                </div>

                {/* --- Right Column (Portrait) --- */}
                <div className="relative h-[45vh] sm:h-[55vh] lg:h-auto lg:col-span-7 overflow-hidden mt-2 lg:mt-0">
                    {/* Book A Call - Positioned absolute top right for desktop */}
                    <div className="absolute top-10 right-10 z-30 hidden lg:block">
                        <Link href="#" className="group flex items-center gap-1 text-xs font-semibold text-neutral-800 border-b border-transparent hover:border-black transition-all pb-0.5">
                            Book A Call
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </Link>
                    </div>

                    {/* Inner Wrapper for overlapping/centering effect */}
                    <div className="absolute inset-0 lg:inset-y-0 lg:-left-24 lg:right-0 flex items-end justify-center lg:justify-end">
                        <div className="relative w-[90%] sm:w-[75%] h-full lg:w-[120%] lg:-ml-[10%]">
                            <Image
                                src="/lovinda.png"
                                alt="Appiah Eunice Portrait"
                                fill
                                className="object-contain object-bottom"
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
