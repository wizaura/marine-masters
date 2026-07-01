"use client";

const LOGOS = ["Man", "Wartsila", "Yanmar", "Daihatsu", "Mitsubishi", "Sulzer", "Bergen"];

export default function ClientsSection() {
    return (
        <div className="px-4 pb-12">
            <div className="mx-auto max-w-8xl rounded-4xl bg-black px-10 py-24 overflow-hidden">

                <p className="mb-20 text-center text-xl text-white/70 font-medium">
                    Brands we supply
                </p>

                {/* Scrolling logo marquee */}
                <div className="relative overflow-hidden">
                    <div className="clients-marquee flex items-center gap-20">
                        {[...LOGOS, ...LOGOS].map((logo, i) => (
                            <span
                                key={i}
                                className="whitespace-nowrap text-5xl lg:text-6xl font-bold text-white shrink-0"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}