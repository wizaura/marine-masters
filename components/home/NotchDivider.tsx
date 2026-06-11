"use client";

import { ChevronDown } from "lucide-react";

export default function NotchDivider() {
    return (
        <div className="relative z-20">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="flex h-16 w-56 items-start justify-center rounded-b-[100px] bg-[#f3f3f3]">
                    <ChevronDown
                        size={28}
                        className="mt-4 animate-bounce text-neutral-800"
                    />
                </div>
            </div>
        </div>
    );
}