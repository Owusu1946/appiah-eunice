import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about" className="w-full bg-[#f8f8f8] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* --- Left Column: Text --- */}
                    <div className="md:col-span-4 relative flex flex-col pt-4">
                        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-neutral-800 mb-6">
                            About Me
                        </h2>
                        <p className="text-neutral-500 font-medium leading-relaxed mb-12">
                            I specialize in turning written words into captivating audio experiences. My approach blends vocal versatility with emotive delivery to create voice-overs that not only sound great but connect deeply with the audience. Ready to bring your next project to life?
                        </p>

                        {/* Hand-drawn curved arrow (approximate representation) */}
                        <div className="absolute top-[80%] lg:top-full left-1/4 lg:left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 text-[#e3e3e3] -rotate-12 hidden md:block">
                            <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-sm">
                                <path d="M 20 140 C 20 80, 70 40, 130 30" />
                                <path d="M 100 15 L 132 28 L 115 55" />
                            </svg>
                        </div>
                    </div>

                    {/* --- Middle Column: Card --- */}
                    <div className="md:col-span-4 flex justify-center">
                        <div className="bg-white rounded-3xl w-full max-w-sm flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                            <div className="p-8 pb-6 flex-1">
                                {/* Globe Icon */}
                                <div className="w-12 h-12 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-8">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-800">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                </div>
                                {/* Stat block */}
                                <div className="text-6xl font-medium tracking-tighter text-neutral-800 mb-6 z-10 relative">
                                    120%
                                </div>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed pr-4">
                                    Average increase in client engagement in the first 6 months
                                </p>
                            </div>

                            {/* Bottom Image area in Card */}
                            <div className="w-full relative h-[250px] bg-neutral-200 mt-2">
                                {/* Using a placeholder or lovinda.png here */}
                                <Image
                                    src="/lovinda.png"
                                    alt="Appiah Eunice Profile"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Portrait and Bullets --- */}
                    <div className="md:col-span-4 flex flex-col pt-4">
                        {/* Top Image with button overlay */}
                        <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto md:mx-0">
                            {/* This can be the same hero image or another one, acting as the top-right photo */}
                            <Image
                                src="/lovinda.png"
                                alt="Eunice Appiah Detail"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Center Arrow Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-800">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Sub Title / Title for Skills */}
                        <h3 className="text-2xl font-medium tracking-tight text-neutral-800 mb-6 uppercase text-[14px] tracking-widest text-center md:text-left">
                            Personal Skills
                        </h3>

                        {/* Bullet List Container */}
                        <div className="flex flex-col gap-4">
                            {[
                                "Highly trained and unique voice",
                                "Voice-OVER certificate",
                                "Wide vocal range",
                                "VIDEO EDITING (CANVA, CAPCUT)",
                                "Clear pronunciation",
                                "Reading and speaking skills",
                                "Creativity",
                                "Script writing",
                                "Ability to switch to different dialects"
                            ].map((skill, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 shrink-0 rounded-full bg-[#1c1c1c] flex items-center justify-center mt-[2px]">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className="text-white">
                                            <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                                        </svg>
                                    </div>
                                    <p className="text-[14px] text-neutral-500 font-medium leading-[1.6] uppercase">
                                        {skill}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
