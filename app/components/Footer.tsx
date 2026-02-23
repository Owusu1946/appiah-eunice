import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white relative overflow-hidden">

            {/* Decorative Background Lines */}
            {/* Left geometric shape */}
            <div className="absolute top-0 left-0 w-[40%] h-full border-r border-[#333] pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#333]"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#333] rounded-3xl opacity-50"></div>
                <div className="absolute top-1/4 -left-10 w-40 h-40 border border-[#333] rounded-3xl opacity-50"></div>
            </div>
            {/* Right geometric shape */}
            <div className="absolute top-0 right-0 w-[20%] h-full border-l border-[#333] pointer-events-none">
                <div className="absolute top-1/3 left-1/2 w-[1px] h-full bg-[#333]"></div>
                <div className="absolute top-1/2 -left-10 w-40 h-40 border border-[#333] rounded-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* Navigation Links */}
                <nav className="flex items-center gap-6 lg:gap-8 text-[13px] font-medium text-neutral-400">
                    <Link href="#" className="bg-[#2c2c2c] text-white px-5 py-2.5 rounded-full hover:bg-[#3c3c3c] transition-colors">
                        Home
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">About Me</Link>
                    <Link href="#" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="#" className="hover:text-white transition-colors">Services</Link>
                    <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                </nav>

                {/* Big Email */}
                <a
                    href="mailto:euniceappiah2@gmail.com"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-white hover:opacity-80 transition-opacity"
                >
                    euniceappiah2@gmail.com
                </a>

            </div>
        </footer>
    );
}
