import Link from "next/link";
import { Anchor, ShipWheel } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative overflow-hidden bg-slate-900">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Orange glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.28),transparent_60%)]" />

                {/* Logo watermark */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.06]"
                    style={{
                        backgroundImage: "url('/logo.png')",
                        backgroundSize: "55%",
                    }}
                />

                {/* Bottom gradient */}
                <div className="absolute bottom-0 h-72 w-full bg-gradient-to-t from-slate-950 via-orange-400/15 to-transparent" />
            </div>

            <div className="container mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
                <div className="text-center">

                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/05">
                        <ShipWheel className="h-10 w-10 text-orange-400" />
                    </div>

                    <span className="font-semibold uppercase tracking-[0.35em] text-orange-400">
                        Error 404
                    </span>

                    <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
                        Lost at Sea?
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                        The page you're looking for may have been moved, renamed, or no
                        longer exists. Navigate back to explore our complete range of
                        marine engine spare parts and equipment.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 font-semibold text-white transition hover:bg-orange-700"
                        >
                            <Anchor size={18} />
                            Return Home
                        </Link>

                        <Link
                            href="/categories"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-white"
                        >
                            Browse Products
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-5">

                        {[
                            ["Engine Parts", "/categories/engine-parts"],
                            ["Ship Machinery", "/categories/machinery"],
                            ["Hydraulic Equipment", "/categories/machinery/hydraulics"],
                            ["Turbochargers", "/categories/machinery/turbochargers"],
                            ["Contact Us", "/contact"],
                        ].map(([title, href]) => (
                            <Link
                                key={title}
                                href={href}
                                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-orange-500 hover:bg-slate-900"
                            >
                                <p className="font-medium text-white">{title}</p>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}