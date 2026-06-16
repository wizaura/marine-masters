"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { getPartTypesByEngineModel } from "@/sanity/lib/getPartTypesByEngineModel";
import { useRouter } from "next/navigation";

type Props = {
    open: boolean;
    onClose: () => void;
    brand: any;
    models: any[];
};

export default function FindPartsModal({
    open,
    onClose,
    brand,
    models,
}: Props) {
    const router = useRouter();

    const [selectedModel, setSelectedModel] =
        useState<any>(null);

    const [partTypes, setPartTypes] =
        useState<any[]>([]);

    const [loadingParts, setLoadingParts] =
        useState(false);

    useEffect(() => {
        async function fetchPartTypes() {
            if (!selectedModel) {
                setPartTypes([]);
                return;
            }

            setLoadingParts(true);

            try {
                const data =
                    await getPartTypesByEngineModel(
                        selectedModel.slug.current
                    );

                setPartTypes(data);
            } finally {
                setLoadingParts(false);
            }
        }

        fetchPartTypes();
    }, [selectedModel]);

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
                bg-black/70 backdrop-blur-md
                p-6
            "
        >
            <div
                className="
                    max-h-[92vh]
                    border
                    border-neutral-200
                    shadow-[0_40px_120px_rgba(0,0,0,0.25)]
                    w-full
                    max-w-6xl
                    overflow-auto
                    rounded-[40px]
                    bg-white
                    p-8
                    lg:p-12
                "
            >
                {/* Header */}

                <div
                    className="
                        mb-10
                        flex
                        items-start
                        justify-between
                    "
                >
                    <div>
                        <p className="text-lg text-neutral-500">
                            Find Engine Parts
                        </p>

                        <h2
                            className="
                                mt-2
                                text-4xl
                                font-bold
                            "
                        >
                            {brand.name}
                        </h2>
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

                {/* Models */}

                <div>
                    <h3
                        className="
                            text-xl
                            font-semibold
                        "
                    >
                        Select Engine Model
                    </h3>

                    <div
                        className="
                            mt-6
                            grid
                            gap-4
                            md:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {models.map(
                            (model) => (
                                <button
                                    key={model._id}
                                    onClick={() =>
                                        setSelectedModel(
                                            model
                                        )
                                    }
                                    className={`
                                        rounded-2xl
                                        border
                                        p-5
                                        text-left
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                        transition
                                        ${selectedModel?._id ===
                                            model._id
                                            ? "border-orange-400 bg-orange-50"
                                            : "border-neutral-200 hover:border-orange-400"
                                        }
                                    `}
                                >
                                    <h4
                                        className="
                                            text-lg
                                            font-semibold
                                        "
                                    >
                                        {model.name}
                                    </h4>
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Part Types */}

                {selectedModel && (
                    <div
                        className="
                            mt-6
                            border-t
                            border-neutral-200
                            pt-6
                        "
                    >
                        <div
                            className="
                                mb-4
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <div>
                                <p className="text-neutral-500">
                                    Selected Model
                                </p>

                                <h3
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >
                                    {
                                        selectedModel.name
                                    }
                                </h3>
                            </div>
                        </div>

                        <div
                            className="
                                grid
                                gap-4
                                md:grid-cols-2
                                lg:grid-cols-3
                            "
                        >
                            {loadingParts ? (
                                <div className="col-span-full">
                                    Loading parts...
                                </div>
                            ) : (
                                partTypes.map((part: any) => (
                                    <button
                                        key={part._id}
                                        onClick={() =>
                                            router.push(
                                                `/categories/engine-parts/${brand.slug.current}/${selectedModel.slug.current}/${part.slug.current}`
                                            )
                                        }
                                        className="
                rounded-2xl
                border
                border-neutral-200
                p-6
                text-left
                transition
                hover:-translate-y-1
                hover:border-orange-400
                hover:shadow-lg
            "
                                    >
                                        <h4
                                            className="
                    text-xl
                    font-semibold
                "
                                        >
                                            {part.title}
                                        </h4>

                                        <p
                                            className="
                    mt-3
                    text-neutral-500
                "
                                        >
                                            Browse products →
                                        </p>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}