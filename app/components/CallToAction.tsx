import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="w-full bg-[#f8f8f8] py-24 lg:py-32 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-neutral-800 mb-6">
                    Got a Vision? Let&apos;s Give It a Voice!
                </h2>
                <p className="text-neutral-500 font-medium text-[15px] leading-relaxed mb-10 max-w-2xl px-4">
                    I&apos;m always excited to collaborate on new and innovative audio projects. Whether you&apos;re starting from scratch on a new campaign or refining an existing concept.
                </p>
                <a
                    href="tel:233272113689"
                    className="flex flex-col items-center gap-2 mt-4 hover:opacity-70 transition-opacity"
                >
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">Connect on Phone</span>
                    <span className="text-2xl lg:text-3xl font-normal text-neutral-800 border-b-2 border-neutral-800 pb-1">
                        (233) 27-211-3689
                    </span>
                </a>
            </div>
        </section>
    );
}
