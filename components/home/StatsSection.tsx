"use client";

export default function StatsSection() {
    return (
        <div className="mx-auto max-w-7xl py-8 px-4 pb-20">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

                {/* Left: warehouse image */}
                <img
                    src="HERO-11.jpeg"
                    alt="Warehouse interior"
                    className="h-[550px] w-full rounded-[40px] object-cover"
                />

                {/* Right: stats */}
                <div>
                    <p className="mb-12 text-4xl font-semibold text-neutral-400">
                        Numbers
                    </p>

                    <div className="space-y-20">

                        <div>
                            <h3 className="text-[clamp(80px,10vw,120px)] font-bold leading-none tracking-tight">
                                1,970<sup className="text-[0.45em] align-super">+</sup>
                            </h3>
                            <p className="mt-2 text-2xl text-neutral-500">
                                Clients Worldwide
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[clamp(80px,10vw,120px)] font-bold leading-none tracking-tight">
                                30<sup className="text-[0.45em] align-super">+</sup>
                            </h3>
                            <p className="mt-2 text-2xl text-neutral-500">
                                Years of Experience
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}