export default function EngineModelOverview({
    model,
}: {
    model: any;
}) {
    return (
        <section className="bg-white px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Engine Model
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
                            Genuine spare parts for
                            {` ${model.name}`}.
                        </h2>

                        <p
                            className="
                                mt-8
                                text-lg
                                text-neutral-600
                            "
                        >
                            Browse genuine replacement
                            components, overhaul kits,
                            consumables, and engine spare
                            parts compatible with the
                            {` ${model.name}`} marine
                            engine platform.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}