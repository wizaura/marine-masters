"use client";

import {
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Globe,
    Package,
    Wrench,
    Clock3,
} from "lucide-react";

export default function ContactInfoSection() {
    return (
        <section
            className="
                relative
                z-30
                bg-white
            "
        >
            <div className="absolute -top-12 left-0 h-12 w-full bg-white" />

            <div className="mx-auto max-w-8xl px-8 py-20">

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Contact Details */}
                    <div>

                        <p
                            className="
                                text-xl
                                md:text-2xl
                                font-medium
                                text-neutral-500
                            "
                        >
                            Contact Information
                        </p>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                md:text-5xl
                                font-bold
                                leading-tight
                            "
                        >
                            Get in touch with our
                            marine supply team.
                        </h2>

                        <div className="mt-12 space-y-8">

                            <div className="flex gap-4">
                                <Mail className="mt-1 h-5 w-5 text-orange-400" />
                                <div>
                                    <p className="font-semibold">
                                        Email
                                    </p>
                                    <p className="text-neutral-600">
                                        sales@marinemasters.com
                                    </p>
                                </div>
                            </div>

                            {/* <div className="flex gap-4">
                                <Phone className="mt-1 h-5 w-5 text-orange-400" />
                                <div>
                                    <p className="font-semibold">
                                        Phone
                                    </p>
                                    <p className="text-neutral-600">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div> */}

                            <div className="flex gap-4">
                                <MapPin className="mt-1 h-5 w-5 text-orange-400" />
                                <div>
                                    <p className="font-semibold">
                                        Locations
                                    </p>

                                    <p className="text-neutral-600">
                                        Kochi, India
                                    </p>

                                    <p className="text-neutral-600">
                                        Dubai, UAE
                                    </p>

                                    <p className="text-neutral-600">
                                        Singapore
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Clock3 className="mt-1 h-5 w-5 text-orange-400" />
                                <div>
                                    <p className="font-semibold">
                                        Working Hours
                                    </p>

                                    <p className="text-neutral-600">
                                        Monday – Saturday
                                    </p>

                                    <p className="text-neutral-600">
                                        09:00 AM – 06:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div>

                        <p
                            className="
                                text-xl
                                md:text-2xl
                                font-medium
                                text-neutral-500
                            "
                        >
                            Why Choose Us
                        </p>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                md:text-5xl
                                font-bold
                                leading-tight
                            "
                        >
                            Trusted marine supply
                            solutions for vessels
                            worldwide.
                        </h2>

                        <div className="mt-12 space-y-8">

                            <div className="flex gap-4">
                                <ShieldCheck className="mt-1 h-6 w-6 text-orange-400" />

                                <div>
                                    <h3 className="font-semibold">
                                        Genuine Marine Components
                                    </h3>

                                    <p className="mt-1 text-neutral-600">
                                        Reliable and authentic parts sourced
                                        from trusted manufacturers and suppliers.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Globe className="mt-1 h-6 w-6 text-orange-400" />

                                <div>
                                    <h3 className="font-semibold">
                                        Global Supply Network
                                    </h3>

                                    <p className="mt-1 text-neutral-600">
                                        Serving ship owners and operators across
                                        international maritime routes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Package className="mt-1 h-6 w-6 text-orange-400" />

                                <div>
                                    <h3 className="font-semibold">
                                        Fast Delivery
                                    </h3>

                                    <p className="mt-1 text-neutral-600">
                                        Efficient sourcing and logistics to
                                        minimize vessel downtime.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Wrench className="mt-1 h-6 w-6 text-orange-400" />

                                <div>
                                    <h3 className="font-semibold">
                                        Technical Expertise
                                    </h3>

                                    <p className="mt-1 text-neutral-600">
                                        Experienced support for engine,
                                        machinery, and spare part requirements.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}