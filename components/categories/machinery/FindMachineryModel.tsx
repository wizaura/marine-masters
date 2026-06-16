"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
    open: boolean;
    onClose: () => void;
    brand: any;
    models: any[];
    loading: boolean;
};

export default function FindMachineryModal({
    open,
    onClose,
    brand,
    models,
    loading,
}: Props) {
    const router = useRouter();

    if (!open) return null;

    return (
        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-black/70
                backdrop-blur-md
                p-6
            "
        >
            <div
                className="
                    w-full
                    max-w-6xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-[40px]
                    bg-white
                    p-8
                    shadow-[0_40px_120px_rgba(0,0,0,0.25)]
                    lg:p-12
                "
            >
                <div className="mb-10 flex items-start justify-between">

                    <div>
                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.25em]
                                text-neutral-500
                            "
                        >
                            Machinery Finder
                        </p>

                        <h2
                            className="
                                mt-3
                                text-5xl
                                font-bold
                            "
                        >
                            {brand.name}
                        </h2>

                        <p
                            className="
                                mt-3
                                text-lg
                                text-neutral-500
                            "
                        >
                            Select a machinery model.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-gray-300
                            hover:bg-gray-200
                        "
                    >
                        <X size={20} />
                    </button>

                </div>

                <div
                    className="
                        grid
                        gap-4
                        md:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {models.map((model: any) => (
                        <button
                            key={model._id}
                            onClick={() =>
                                router.push(
                                    `/categories/machinery/${brand.machineryType.slug.current}/${brand.slug.current}/${model.slug.current}`
                                )
                            }
                            className="
                                rounded-[28px]
                                border
                                border-neutral-200
                                p-6
                                text-left
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-orange-400
                                hover:shadow-xl
                            "
                        >
                            <h3
                                className="
                                    text-xl
                                    font-semibold
                                "
                            >
                                {model.name}
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-neutral-500
                                "
                            >
                                View model →
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}