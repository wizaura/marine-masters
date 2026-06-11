import Link from "next/link";
import { ShipWheel } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f3f3f3] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Logo */}
                <div className="flex justify-center">
                    <Link href="/" className="justify-self-center">
                        <Image
                            src="/logo.png"
                            alt="Marine Masters"
                            width={180}
                            height={60}
                            className="h-20 w-auto"
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">

                    <Link
                        href="/"
                        className="
                            rounded-full
                            bg-white
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            transition
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="
                            rounded-full
                            bg-white
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            transition
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        About
                    </Link>

                    <Link
                        href="/categories"
                        className="
                            rounded-full
                            bg-white
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            transition
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        Categories
                    </Link>

                    <Link
                        href="/blogs"
                        className="
                            rounded-full
                            bg-white
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            transition
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        News
                    </Link>

                    <Link
                        href="/contact"
                        className="
                            rounded-full
                            bg-orange-400
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            text-white
                            transition
                            hover:scale-105
                        "
                    >
                        Ask for a Quote
                    </Link>

                </div>

                {/* Divider */}
                <div className="my-14 h-px bg-neutral-200" />

                {/* Bottom */}
                <div className="flex flex-col items-center gap-3 text-center">

                    <p className="text-lg text-neutral-500">
                        Global Marine Engine Parts & Machinery Supplier
                    </p>

                    <p className="text-neutral-400">
                        © {new Date().getFullYear()} Marine Masters. All Rights Reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}