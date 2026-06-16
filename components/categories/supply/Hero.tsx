export default function ShipSupplyHero() {
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

                <img
                    src="/hero-2.avif"
                    alt="Ship Supply"
                    className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
    "
                    style={{
                        objectPosition: "50% 80%",
                    }}
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex h-full items-end">

                    <div className="px-8 pb-20">

                        <p
                            className="
                                text-lg
                                text-white/70
                            "
                        >
                            Marine Procurement
                        </p>

                        <h1
                            className="
                                mt-4
                                max-w-5xl
                                text-6xl
                                font-bold
                                text-white
                                lg:text-8xl
                            "
                        >
                            Global Ship Supply
                            Solutions
                        </h1>

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-xl
                                text-white/80
                            "
                        >
                            Supplying vessels worldwide with
                            marine equipment, consumables,
                            engine spares, safety products,
                            and technical procurement services.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}