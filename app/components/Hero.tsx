"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: "About Me", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

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

                    {/* Top Nav Wrapper (Dynamic Island) */}
                    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center items-start pt-6 px-6 pointer-events-none transition-all duration-500`}>
                        <nav className={`
                            relative flex items-center pointer-events-auto
                            transition-all duration-500 ease-in-out px-4 py-2.5
                            ${isScrolled
                                ? "bg-white/80 backdrop-blur-md border border-neutral-200/50 shadow-lg rounded-full w-full max-w-[340px] md:max-w-[440px] justify-between"
                                : "w-full pt-2 lg:pt-4 justify-between lg:grid lg:grid-cols-3"}
                        `}>
                            {/* Logo */}
                            <div className={`shrink-0 transition-opacity duration-300 ${isScrolled ? "hidden md:block" : "lg:flex lg:justify-start"}`}>
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 lg:w-6 lg:h-6 text-black">
                                    <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
                                    <path d="M12 6L4 20H20L12 6Z" fill={isScrolled ? "white" : "#fafafa"} />
                                </svg>
                            </div>

                            {/* Links (Desktop) */}
                            <div className={`
                                ${isScrolled ? "flex" : "hidden md:flex"}
                                items-center gap-6 md:gap-8 text-[11px] font-semibold text-neutral-800 uppercase tracking-widest
                                ${!isScrolled && "lg:justify-center"}
                            `}>
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="hover:text-black transition-colors hover:scale-105">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Right placeholder for balance when not scrolled (Desktop) */}
                            {!isScrolled && <div className="hidden lg:block"></div>}

                            {/* Mobile Menu Button (Only when not scrolled or on small screens) */}
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden flex items-center gap-2 text-[11px] font-semibold text-neutral-800 uppercase tracking-widest pl-2 transition-all ${isScrolled ? "hidden md:flex" : "border-b border-black pb-0.5"}`}
                            >
                                {isMenuOpen ? "Close" : "Menu"}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {isMenuOpen ? (
                                        <>
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </>
                                    ) : (
                                        <>
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </>
                                    )}
                                </svg>
                            </button>

                            {/* Mobile Burger for Island - Simple Icon */}
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden flex items-center justify-center w-8 h-8 rounded-full transition-all ${isScrolled ? "flex" : "hidden"}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" y1="12" x2="20" y2="12"></line>
                                    <line x1="4" y1="6" x2="20" y2="6"></line>
                                    <line x1="4" y1="18" x2="20" y2="18"></line>
                                </svg>
                            </button>
                        </nav>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 z-[60] bg-[#fafafa] flex flex-col p-12 transition-transform duration-500 lg:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
                        <div className="flex justify-between items-center mb-24">
                            <div className="w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black">
                                    <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
                                    <path d="M12 6L4 20H20L12 6Z" fill="#fafafa" />
                                </svg>
                            </div>
                            <button onClick={toggleMenu} className="text-[11px] font-semibold uppercase tracking-widest border-b border-black">Close</button>
                        </div>
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-5xl font-light tracking-tighter hover:pl-4 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto pt-12 border-t border-neutral-200">
                            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">Get in Touch</p>
                            <a href="mailto:euniceappiah2@gmail.com" className="text-xl font-medium">euniceappiah2@gmail.com</a>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-start gap-8 lg:gap-12 mt-12 lg:mt-24 mb-auto pt-16 lg:pt-0">
                        <div>
                            <div className="text-xl lg:text-2xl font-light text-neutral-800 mb-1">Author</div>
                            <Link href="https://selar.com/594w65" target="_blank" rel="noopener noreferrer" className="block text-[9px] lg:text-[10px] text-neutral-400 hover:text-neutral-800 font-medium uppercase tracking-wide transition-colors">NOT BEAUTY-FULL</Link>
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
                    {/* Connect Button - Positioned absolute top right for desktop */}
                    <div className="absolute top-10 right-10 z-30 hidden lg:block">
                        <Link href="#contact" className="group flex items-center gap-1 text-xs font-semibold text-neutral-800 border-b border-transparent hover:border-black transition-all pb-0.5">
                            Let&apos;s Connect
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
                                alt="Eunice Appiah Portrait"
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
