import Image from "next/image";
import Link from "next/link";

const experiences = [
    {
        company: "Advertisements",
        date: "Various Projects",
        role: "Victorious Cakes, Tiwa's Ventures, PH Patmond ENTERPRISE,\nEKUBUAH COSMETICS, CLOSET M BOUTIQUE 1-3",
        tags: ["Commercials", "Promo"],
        active: false,
    },
    {
        company: "More Advertisements",
        date: "Various Projects",
        role: "Laris Books, makae's kloding, JMC Enterprise, KAYN catering,\nC Dede catering, Elorms Pressons 1-2, Sam Tey Klodin",
        tags: ["Commercials", "Promo"],
        active: false,
    },
    {
        company: "Religious Celebrations",
        date: "Special Events",
        role: "He is Risen, Happy Birthday Jesus (Twi & English),\nAppreciation Service - Pastor Otubuah",
        tags: ["Events", "Bilingual"],
        active: false,
    },
    {
        company: "Other Works & Documentaries",
        date: "February 2022 - Present",
        role: "", // Empty for expanded content
        tags: ["Documentary", "Corporate"],
        active: true,
        expandedContent: {
            images: ["/lovinda.png", "/lovinda.png", "/lovinda.png"],
            text: "Including ANIMAL DOCUMENTARY (MENTALITY OF THE ANT), Sustainable Development Goal 4, Samsung A31, Access Bank Vals, Breakfast ad, 6th March 2024 & 2025, and IWD 2024 (Nana Aba Anamoah)."
        }
    }
];

export default function Experiences() {
    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Top header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 lg:mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-neutral-800" />
                            <span className="text-[15px] font-medium text-neutral-800">Experiences</span>
                        </div>
                        <h2 className="text-[2.5rem] lg:text-[3.2rem] font-normal tracking-tight text-neutral-800 leading-[1.1]">
                            Explore My Voice<br />Journey
                        </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center md:pl-8">
                        <p className="text-neutral-500 font-medium text-[15px] leading-relaxed mb-6 max-w-[420px]">
                            Over the past 4+ years, I&apos;ve had the opportunity to work on a wide range of voice-over projects, collaborating with diverse teams and clients to bring creative visions to life.
                        </p>
                        <Link href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-neutral-800 border-b border-neutral-800 pb-0.5 hover:opacity-70 transition-opacity uppercase tracking-wide">
                            Book A Call
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-y-[-1px]">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`flex flex-col py-8 lg:py-10 ${index !== 0 ? 'border-t border-neutral-100' : ''}`}>

                            {/* Main Row */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-start">

                                {/* Left (Company & Date) */}
                                <div className="lg:col-span-5 flex flex-col">
                                    <h3 className="text-xl lg:text-[22px] font-normal tracking-tight text-neutral-800 mb-2.5">
                                        {exp.company}
                                    </h3>
                                    <div className="flex items-center gap-2.5 text-[13px] text-neutral-400 font-medium">
                                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                        {exp.date}
                                    </div>
                                </div>

                                {/* Middle (Role) */}
                                <div className="lg:col-span-4 relative mt-2 lg:mt-0">
                                    {exp.role && (
                                        <p className="text-neutral-500 font-medium text-[14px] leading-relaxed">
                                            {exp.role.split('\n').map((line, i) => (
                                                <span key={i}>{line}{i === 0 && <br className="hidden lg:block" />}</span>
                                            ))}
                                        </p>
                                    )}
                                </div>

                                {/* Right (Tags) */}
                                <div className="lg:col-span-3 flex items-center lg:justify-end gap-2.5 mt-2 lg:mt-0">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className={`px-4 py-1.5 rounded-full text-[12px] font-medium ${exp.active ? 'bg-[#1c1c1c] text-white' : 'bg-[#f4f4f4] text-neutral-600'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Expanded Content (Images & Text) */}
                            {exp.expandedContent && (
                                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                    {/* Images */}
                                    <div className="lg:col-span-6 flex gap-3 lg:gap-4 overflow-x-auto hide-scrollbar">
                                        {exp.expandedContent.images.map((img, i) => (
                                            <div key={i} className="relative w-40 lg:w-48 h-32 lg:h-40 shrink-0 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
                                                <Image
                                                    src={img}
                                                    alt={`Project snapshot ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Text & Button */}
                                    <div className="lg:col-span-6 flex items-center justify-between gap-6 pl-0 lg:pl-4">
                                        <p className="text-[14px] text-neutral-500 font-medium leading-[1.8] max-w-sm">
                                            {exp.expandedContent.text}
                                        </p>
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full bg-[#1c1c1c] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform shadow-lg mx-auto lg:mx-0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="scale-125">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
