import { ArrowRight } from "lucide-react";

type SideNotchProps = {
    color?: string;
    showArrow?: boolean;
};

export default function SideNotch({
    color = "#f3f3f3",
    showArrow = true,
}: SideNotchProps) {
    return (
        <div
            className="
                absolute
                bottom-0
                -right-0.5
                z-30
                h-[280px]
                w-[80px]
                overflow-hidden
            "
        >
            {/* Rotated SectionNotch */}
            <svg
                viewBox="0 0 80 280"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
            >
                <path
                    d="
                        M80 0
                        C80 40 60 70 35 95
                        C15 115 0 125 0 140
                        C0 155 15 165 35 185
                        C60 210 80 240 80 280
                        Z
                    "
                    fill={color}
                />
            </svg>

            {showArrow && (
                <ArrowRight
                    size={24}
                    className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        text-neutral-800
                        animate-pulse
                    "
                />
            )}
        </div>
    );
}