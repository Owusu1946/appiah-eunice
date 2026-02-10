import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#fafafa] text-neutral-800 overflow-hidden">
            {/* 
        Grid Layout:
        - 12 columns total
        - Left content: ~5 cols
        - Right portrait: ~7 cols
      */}
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-screen">

                {/* --- Left Column (Content) --- */}
                <div className="relative z-20 flex flex-col justify-between p-6 lg:p-12 lg:col-span-5 lg:pl-32 xl:pl-40">

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
                    <nav className="flex items-center justify-between pt-4 w-full">
                        {/* Logo */}
                        <div className="w-6 h-6 shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black">
                                <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
                                <path d="M12 6L4 20H20L12 6Z" fill="#fafafa" />
                            </svg>
                        </div>

                        {/* Mobile Book Button */}
                        <Link href="#" className="lg:hidden flex items-center gap-1 text-xs font-semibold text-neutral-800">
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
                    <div className="flex items-start gap-12 mt-16 lg:mt-24 mb-auto">
                        <div>
                            <div className="text-2xl font-light text-neutral-800 mb-1">+200</div>
                            <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">Projects delivered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-light text-neutral-800 mb-1">+50</div>
                            <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">Brands voiced for</div>
                        </div>
                    </div>

                    {/* Main Headline Area */}
                    <div className="py-12 lg:py-0">
                        <h1 className="text-[18vw] lg:text-[11rem] xl:text-[12rem] 2xl:text-[13rem] leading-[0.8] font-light tracking-tighter text-neutral-800 -ml-2">
                            Hello
                        </h1>
                        <div className="flex items-center gap-3 mt-6 ml-2">
                            <div className="w-4 h-[1px] bg-neutral-300"></div>
                            <p className="text-sm text-neutral-500 font-medium">
                                It&apos;s Appiah Eunice, a voice-over artist
                            </p>
                        </div>
                    </div>

                    {/* Bottom Area: Scroll & Book Button */}
                    <div className="flex items-end justify-between mt-auto pb-4">

                        {/* Scroll Hint */}
                        <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
                            <span>Scroll down</span>
                            <svg className="animate-bounce" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>

                        {/* Floating 'Book A Call' for consistent right alignment in this col? 
                Actually reference has it Top Right of screen usually, or aligned with Nav. 
                Let's keep it Top Right of the screen absolute or flex.
                The prompt asked for "Top navigation (matches reference)... Right side: text button link".
                Let's move 'Book A Call' back to explicit Top Right of the viewport/container.
            */}
                    </div>

                </div>

                {/* --- Right Column (Portrait) --- */}
                <div className="relative h-[50vh] lg:h-auto lg:col-span-7 overflow-hidden">
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
                        <div className="relative w-full h-full lg:w-[120%] lg:-ml-[10%]">
                            <Image
                                src="/hero.png"
                                alt="Appiah Eunice Portrait"
                                fill
                                className="object-contain object-bottom grayscale"
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
