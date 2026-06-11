import { ArrowDown, ChevronDown } from "lucide-react";

type SectionNotchProps = {
    color?: string;
    showArrow?: boolean;
};

export default function SectionNotch({
    color = "#f3f3f3",
    showArrow = true,
}: SectionNotchProps) {
    return (
        <div
            className="
                absolute
                -bottom-0.5
                left-1/2
                z-30
                -translate-x-1/2
                w-[280px]
                h-[80px]
                overflow-hidden
            "
        >
            {/* Curved Triangle */}
            <svg
                viewBox="0 0 280 80"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
            >
                <path
                    d="
                        M0 80
                        C40 80 70 60 95 35
                        C115 15 125 0 140 0
                        C155 0 165 15 185 35
                        C210 60 240 80 280 80
                        Z
                    "
                    fill={color}
                />
            </svg>

            {showArrow && (
                <ArrowDown
                    size={26}
                    className="
                        absolute
                        left-1/2
                        top-5
                        -translate-x-1/2
                        text-neutral-800
                        animate-bounce
                    "
                />
            )}
        </div>
    );
}