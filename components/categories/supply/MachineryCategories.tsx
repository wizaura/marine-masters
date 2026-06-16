import Link from "next/link";

import { getMachineryTypes } from "@/sanity/lib/getMachineryTypes";
import MachineryTypesGrid from "../details/MachineryTypesGrid";

export default async function MachineryCategories() {
    const categories =
        await getMachineryTypes();

    return (
        <section
            className="
                rounded-4xl
                bg-gradient-to-b from-[#f3f3f3] via-white to-white
                px-8
                pt-20
                m-4
            "
        >
            <div className="mx-auto max-w-8xl">

                <div className="mb-20 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Marine Equipment
                        </p>
                    </div>

                    <div>

                        <h2
                            className="
                text-4xl
                font-bold
                leading-tight
                lg:text-6xl
            "
                        >
                            Machinery systems and equipment for every vessel.
                        </h2>

                        <p
                            className="
                mt-6
                max-w-4xl
                text-lg
                text-neutral-600
            "
                        >
                            Explore a comprehensive range of marine machinery
                            categories including pumps, compressors,
                            separators, purifiers, heat exchangers, deck
                            machinery, and auxiliary systems. We help vessel
                            operators source reliable equipment and spare
                            parts from trusted manufacturers worldwide.
                        </p>

                    </div>

                </div>

                <MachineryTypesGrid />

            </div>
        </section>
    );
}